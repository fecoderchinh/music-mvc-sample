import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import { ProductDto } from 'shared/dtos/tenant/product/product.dto';
import {Model, Connection} from 'mongoose';
import { ProductSchema, IProductDocument } from 'shared/schemas/tenant/product.schema';
import {AttributeSchema, IAttributeDocument} from "shared/schemas/tenant/attribute.schema";
import {IProductTagDocument, ProductTagSchema} from "shared/schemas/tenant/product-tag.schema";
import { ObjectID } from "mongodb";
import {
    ATTRIBUTE_MODEL,
    BRAND_MODEL,
    PRODUCT_MODEL,
    PRODUCT_TAG_MODEL
} from "shared/schemas/model.constant";
import {BrandSchema, IBrandDocument} from "shared/schemas/tenant/brand.schema";
import {Paginator} from "shared/paginator";
import {seoDefault} from "shared/utils/seo.utils";
import {ProductAggregation} from "../../aggregation/product.aggregation";
import {ProductConditionAggregation} from "shared/aggregation/product-condition.aggregation";
import {WithoutCategoryAggregation} from "../../aggregation/without-category.aggregation";

@Injectable()
export class ProductService {
    private productModel:Model<IProductDocument>;
    private attributeModel:Model<IAttributeDocument>;
    private productTagModel:Model<IProductTagDocument>;
    private brandModel:Model<IBrandDocument>;

	constructor(
        @Inject('TENANT_CONNECTION') private connection: Connection
	) {
        this.productModel = this.connection.model<IProductDocument>(PRODUCT_MODEL, ProductSchema);
        this.attributeModel = this.connection.model<IAttributeDocument>(ATTRIBUTE_MODEL, AttributeSchema);
        this.productTagModel = this.connection.model<IProductTagDocument>(PRODUCT_TAG_MODEL, ProductTagSchema);
        this.brandModel = this.connection.model<IBrandDocument>(BRAND_MODEL, BrandSchema);
	}

    async create(userId: ObjectID, createProductDto: ProductDto): Promise<any> {
	    const attributesDto = createProductDto.attributes || [];
	    const tagsDto = createProductDto.tags || [];
	    const brandsDto = createProductDto.brands || [];
	    let variantDto = createProductDto.variants || [];
	    delete createProductDto.attributes;
	    const attributes = [],
            tagPromises = [],
            brandPromises = [];

        await this.productModel.createCollection();
        await this.attributeModel.createCollection();
        await this.productTagModel.createCollection();
        await this.brandModel.createCollection();

        const session = await this.productModel.startSession();
        session.startTransaction();

        try {
            for (let i = 0; i < attributesDto.length; i++) {
                const attributeDto = attributesDto[i];
                const name = attributeDto.name;
                attributes.push(await this.attributeModel.findOneAndUpdate({ name }, { name }, {
                    new: true,
                    upsert: true,
                    session,
                }))
            }

            if (attributes.length) {
                createProductDto.attributes = [];
                attributes.forEach(attribute => {
                    const attributeDto = attributesDto.find(item => item.name === attribute.name);
                    createProductDto.attributes.push({ _id: attribute._id, name: attribute.name, values: attributeDto.values });
                });

                variantDto = variantDto.map(variant => {
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
                brandPromises.push(this.brandModel.findOneAndUpdate({ name: brand }, { name: brand }, {
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
                ...(variantDto && {variants: variantDto}),
                seo,
            });
            const product = await productModel.save({ session });
            await session.commitTransaction();
            session.endSession();
            return product;
        } catch (e) {
            await session.abortTransaction();
            session.endSession();
            throw e;
        }
    }

    async update(id: ObjectID, updateProductDto: ProductDto): Promise<IProductDocument> {
        const attributesDto = updateProductDto.attributes || [];
        const tagsDto = updateProductDto.tags || [];
        const brandsDto = updateProductDto.brands || [];
        let variantDto = updateProductDto.variants || [];
        delete updateProductDto.attributes;
        const attributes = [],
            tagPromises = [],
            brandPromises = [];

        await this.productModel.createCollection();
        await this.attributeModel.createCollection();
        await this.productTagModel.createCollection();
        await this.brandModel.createCollection();

        const product = await this.productModel.findById(id);

        if (!product) {
            throw new NotFoundException('Product not found.');
        }

        const session = await this.productModel.startSession();
        session.startTransaction();

        try {
            for (let i = 0; i < attributesDto.length; i++) {
                const attributeDto = attributesDto[i];
                const name = attributeDto.name;
                attributes.push(await this.attributeModel.findOneAndUpdate({ name }, { name }, {
                    new: true,
                    upsert: true,
                    session,
                }))
            }

            if (attributes.length) {
                updateProductDto.attributes = [];
                attributes.forEach(attribute => {
                    const attributeDto = attributesDto.find(item => item.name === attribute.name);
                    updateProductDto.attributes.push({ _id: attribute._id, name: attribute.name, values: attributeDto.values });
                });

                variantDto = variantDto.map(variant => {
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
                brandPromises.push(this.brandModel.findOneAndUpdate({ name: brand }, { name: brand }, {
                    upsert: true
                }))
            });

            if (brandPromises.length) {
                await Promise.all(brandPromises);
            }

            const dataUpdating = {
                ...updateProductDto,
                ...(variantDto && {variants: variantDto}),
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            const result = await this.productModel.findByIdAndUpdate(id, dataUpdating, { session, new: true });

            await session.commitTransaction();
            session.endSession();
            return result;
        } catch (e) {
            await session.abortTransaction();
            session.endSession();
            throw e;
        }
    }

    async getList(queryParams: object): Promise<any>{
        const paginator = new Paginator(queryParams);
        const options = paginator.getOptionQueryString();
        const builderOptions = (new ProductAggregation(queryParams)).build();

        const countPromise = this.productModel.aggregate([
            { $unwind: { path: '$variants', preserveNullAndEmptyArrays: true } },
            ...builderOptions,
            { $group: { _id: null, total: { $sum: 1 } } },
            { $project: { _id: 0 } },
        ]).exec();
        const docsPromise = this.productModel
            .aggregate([{
                $unwind: {path: "$variants", preserveNullAndEmptyArrays: true }
            }, ...builderOptions, {
                $skip: options.offset,
            }, {
                $limit: options.limit,
            }])
            .exec();

        const [totalResult, docs] = await Promise.all([countPromise, docsPromise]);
        const total = totalResult.length ? totalResult[0].total : 0;

        const mapperDocs = docs.map(product => {
           return {
                ...product,
                ...(product.variants && {variants: [product.variants]}),
           }
        });

        return paginator.buildResponse(total, mapperDocs);
    }

    async getByConditions(queryParams: object): Promise<any>{
        const paginator = new Paginator(queryParams);
        const options = paginator.getOptionQueryString();
        const builderOptions = (new ProductConditionAggregation(queryParams)).build();
        const withoutCategoryBuilder = (new WithoutCategoryAggregation(queryParams)).build();
        const countPromise = this.productModel.aggregate([
            withoutCategoryBuilder,
            { $unwind: { path: '$variants', preserveNullAndEmptyArrays: true } },
            ...builderOptions,
            { $group: { _id: null, total: { $sum: 1 } } },
            { $project: { _id: 0 } },
        ].filter(pipeline => pipeline)).exec();
        const docsPromise = this.productModel
            .aggregate([
                withoutCategoryBuilder,
            {
                $unwind: {path: "$variants", preserveNullAndEmptyArrays: true }
            }, ...builderOptions, {
                $skip: options.offset,
            }, {
                $limit: options.limit,
            }].filter(pipeline => pipeline))
            .exec();

        const [totalResult, docs] = await Promise.all([countPromise, docsPromise]);
        const total = totalResult.length ? totalResult[0].total : 0;
        const mapperDocs = docs.map(product => {
            return {
                ...product,
                ...(product.variants && {variants: [product.variants]}),
            }
        });

        return paginator.buildResponse(total, mapperDocs);
    }

    async getDetail(productId, queryParams: any): Promise<IProductDocument>{
        const includes = queryParams.includes || '';
        const lookups = includes.split(',');

        const query = this.productModel.findOne({ _id: productId });

        if (lookups.indexOf('categories') !== -1) {
            query.populate('categories');
        }
        if (lookups.indexOf('store') !== -1) {
            query.populate('variants.inventories.store')
                .populate('inventories.store');
        }

        return await query.exec();
    }
}
