import { Injectable, Inject} from '@nestjs/common';
import { CreateProductDto } from 'shared/dtos/tenant/product/create.product.dto';
import { Model, Connection } from 'mongoose';
import { ProductSchema, ProductDocument } from 'shared/schemas/tenant/product.schema';
import {AttributeSchema, IAttributeDocument} from "shared/schemas/tenant/attribute.schema";
import {IProductTagDocument, ProductTagSchema} from "shared/schemas/tenant/product-tag.schema";
import {ATTRIBUTE_MODEL, BRAND_MODEL, PRODUCT_MODEL, PRODUCT_TAG_MODEL} from "shared/schemas/model.constant";
import {BrandSchema, IBrandDocument} from "shared/schemas/tenant/brand.schema";

@Injectable()
export class ProductService {
    private productModel:Model<ProductDocument>;
    private attributeModel:Model<IAttributeDocument>;
    private productTagModel:Model<IProductTagDocument>;
    private brandModel:Model<IBrandDocument>;

	constructor(
        @Inject('TENANT_CONNECTION') private connection: Connection,
	){
        this.productModel = this.connection.model<ProductDocument>(PRODUCT_MODEL, ProductSchema);
        this.attributeModel = this.connection.model<IAttributeDocument>(ATTRIBUTE_MODEL, AttributeSchema);
        this.productTagModel = this.connection.model<IProductTagDocument>(PRODUCT_TAG_MODEL, ProductTagSchema);
        this.brandModel = this.connection.model<IBrandDocument>(BRAND_MODEL, BrandSchema);
	}

    async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
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

            if (tagPromises.length) {
                await Promise.all(brandPromises);
            }

            const productModel = new this.productModel({
                ...createProductDto,
                ...(variantData && {variants: variantData})
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


    async getAllProduct(): Promise<ProductDocument[]>{
        return await this.productModel.find().exec()
    }

}
