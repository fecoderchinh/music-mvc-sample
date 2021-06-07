import { Injectable, Inject} from '@nestjs/common';
import { CreateProductDto } from 'shared/dtos/tenant/product/create.product.dto';
import {Model, Connection} from 'mongoose';
import { ProductSchema, IProductDocument } from 'shared/schemas/tenant/product.schema';
import {AttributeSchema, IAttributeDocument} from "shared/schemas/tenant/attribute.schema";
import {IProductTagDocument, ProductTagSchema} from "shared/schemas/tenant/product-tag.schema";
import { ObjectID } from "mongodb";
import {
    ATTRIBUTE_MODEL,
    BRAND_MODEL,
    CLIENT_MODEL,
    PRODUCT_MODEL,
    PRODUCT_TAG_MODEL
} from "shared/schemas/model.constant";
import {BrandSchema, IBrandDocument} from "shared/schemas/tenant/brand.schema";
import {Paginator} from "shared/paginator";
import {seoDefault} from "shared/utils/seo.utils";
import {InjectModel} from "@nestjs/mongoose";
import {ProductCriteria} from "../../criteria/product.criteria";

@Injectable()
export class ProductService {
    private productModel:Model<IProductDocument>;
    private attributeModel:Model<IAttributeDocument>;
    private productTagModel:Model<IProductTagDocument>;
    private brandModel:Model<IBrandDocument>;

	constructor(
        @Inject('TENANT_CONNECTION') private connection: Connection,
        @InjectModel(CLIENT_MODEL) private clientModel: Model<any>,
	) {
        this.productModel = this.connection.model<IProductDocument>(PRODUCT_MODEL, ProductSchema);
        this.attributeModel = this.connection.model<IAttributeDocument>(ATTRIBUTE_MODEL, AttributeSchema);
        this.productTagModel = this.connection.model<IProductTagDocument>(PRODUCT_TAG_MODEL, ProductTagSchema);
        this.brandModel = this.connection.model<IBrandDocument>(BRAND_MODEL, BrandSchema);
	}

    async create(userId: ObjectID, createProductDto: CreateProductDto): Promise<IProductDocument> {
	    const attributesDto = createProductDto.attributes || [];
	    const tagsDto = createProductDto.tags || [];
	    const brandsDto = createProductDto.brands || [];
	    let variantData = createProductDto.variants || [];
	    delete createProductDto.attributes;
	    const attributePromises = [],
            tagPromises = [],
            brandPromises = [];


        await this.productModel.createCollection();
        await this.attributeModel.createCollection();
        await this.productTagModel.createCollection();
        await this.brandModel.createCollection();

        const session = await this.productModel.startSession();
        session.startTransaction();

        try {
            attributesDto.forEach(attribute => {
                const name = attribute.name;
                attributePromises.push(this.attributeModel.findOneAndUpdate({ name }, { name }, {
                    new: true,
                    upsert: true,
                    session,
                }))
            });

            if (attributePromises.length) {
                const attributes = await Promise.all(attributePromises);
                createProductDto.attributes = [];
                attributes.forEach(attribute => {
                    const attributeDto = attributesDto.find(item => item.name === attribute.name);
                    createProductDto.attributes.push({ _id: attribute._id, name: attribute.name, values: attributeDto.values });
                });

                variantData = variantData.map(variant => {
                    const variantAttributes = variant.attributes.map(attributeDto => {
                        const attribute = attributes.find(item => item.name === attributeDto.name);
                        return {
                            ...attributeDto,
                            id: attribute.id
                        };
                    });
                    return {
                        ...variant,
                        attributes: variantAttributes
                    };
                });
            }

            tagsDto.forEach(tag => {
                tagPromises.push(this.productTagModel.findOneAndUpdate({ name: tag }, { name: tag }, {
                    upsert: true
                }))
            });

            if (tagPromises.length) {
                await Promise.all(tagPromises);
            }

            brandsDto.forEach(brand => {
                brandPromises.push(this.productTagModel.findOneAndUpdate({ name: brand }, { name: brand }, {
                    upsert: true
                }))
            });

            if (brandPromises.length) {
                await Promise.all(brandPromises);
            }

            const seo = createProductDto.seo || seoDefault;

            const productModel = new this.productModel({
                user: userId,
                ...createProductDto,
                ...(variantData && {variants: variantData}),
                seo,
            });
            const product = await productModel.save({ session });
            await session.commitTransaction();
            await session.endSession();
            return product;
        } catch (e) {
            await session.abortTransaction();
            session.endSession();
            throw e;
        }
    }

    async getList(queryParams: object): Promise<any>{
        const paginator = new Paginator(queryParams);
        const options = paginator.getOptionQueryString();
        const builderOptions = (new ProductCriteria(queryParams)).handle();

        const countPromise = this.productModel.aggregate([
            { $unwind: { path: '$variants', preserveNullAndEmptyArrays: true } },
            { $match: builderOptions },
            { $group: { _id: null, total: { $sum: 1 } } },
            { $project: { _id: 0 } },
        ]).exec();
        const docsPromise = this.productModel
            .aggregate([{
                $unwind: {path: "$variants", preserveNullAndEmptyArrays: true }
            }, {
                $lookup: {
                    from: "categories",
                    localField: "categories",
                    foreignField: "_id",
                    as: "categories",
                },
            }, {
                $match: builderOptions ,
            }, {
                $skip: options.offset,
            }, {
                $limit: options.limit,
            }])
            .exec();

        const [totalResult, docs] = await Promise.all([countPromise, docsPromise]);
        const total = totalResult.length ? totalResult[0].total : 0;
        const tmp = await this.buildResponse(docs);

        return paginator.buildResponse(total, tmp);
    }

    private async buildResponse(products: IProductDocument[]) {
	    const userIds = [];
        products.forEach(product => {
            userIds.push(product.user);
        });

        const users = await this.clientModel.find({
            _id: {
                $in: userIds.filter(userId => userId),
            }
        }).select({ _id: 1, fullName: 1, phone: 1});

        return products.map(product => {
            const user = users.find(user => user.equals(product.user));
            return {
                ...product,
                user,
            }
        });
    }

}
