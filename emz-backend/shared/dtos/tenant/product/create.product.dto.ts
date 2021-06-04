import { ApiProperty } from '@nestjs/swagger';
import {JoiSchema, JoiSchemaOptions} from "nestjs-joi";
import * as Joi from "joi";
import {Decimal128} from "mongoose";
import {IAttributes, IImage, IInventory, IVariant, Seo} from "../../../schemas/tenant/product.schema";
import {extensionImage, validMongoId} from "../../../rules/common";

const requiredIfNotVariant = {
    switch: [
        { is: Joi.array().min(0), then: Joi.required() },
        { is: null, then: Joi.required() },
    ],
    otherwise: Joi.optional()
};

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateProductDto{
    @ApiProperty()
    @JoiSchema(Joi.string().required().max(255))
    name: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    description: string;

    @ApiProperty()
    @JoiSchema(Joi.string().optional().max(255))
    shortDescription: string;

    @ApiProperty()
    @JoiSchema(Joi.string().optional().max(255))
    manufacture: string;

    @ApiProperty()
    @JoiSchema(Joi.number().integer().min(0).when('attributes', requiredIfNotVariant))
    buyPrice: Decimal128;

    @ApiProperty()
    @JoiSchema(Joi.number().integer().min(0).when('attributes', requiredIfNotVariant))
    virtualPrice: Decimal128;

    @ApiProperty()
    @JoiSchema(Joi.number().integer().min(0).when('attributes', requiredIfNotVariant))
    price: Decimal128;

    @ApiProperty()
    @JoiSchema(Joi.string().max(255).when('attributes', requiredIfNotVariant))
    sku: string;

    @ApiProperty()
    @JoiSchema(Joi.string().max(255).when('attributes', requiredIfNotVariant))
    barcode: string;

    @ApiProperty()
    @JoiSchema(Joi.number().integer().min(1).when('attributes', requiredIfNotVariant))
    quantity: number;

    @ApiProperty()
    @JoiSchema(Joi.string().max(255).when('attributes', requiredIfNotVariant))
    weight: string;

    @ApiProperty()
    @JoiSchema(Joi.string().max(255).when('attributes', requiredIfNotVariant))
    sizePacked: string;

    @JoiSchema(Joi.boolean().invalid(false).required())
    isPublished: boolean;

    @ApiProperty({
        type: Date,
        default: '2021-01-01'
    })
    @JoiSchema(Joi.date().min('now').optional())
    publishSchedule?: Date;

    @JoiSchema(Joi.array().optional().items(Joi.object().keys({
        url: Joi.string().custom(extensionImage),
        position: Joi.number().integer().required().min(0),
    })))
    images?: IImage[];

    @JoiSchema(Joi.array().optional())
    tags?: Array<string>;

    @JoiSchema(Joi.array().optional())
    brands?: Array<string>;

    @JoiSchema(Joi.array().required().items(Joi.string().custom(validMongoId)))
    categories?: Array<string>;

    @JoiSchema(Joi.array().required().items(Joi.object().required().keys({
        storeId: Joi.string().required().custom(validMongoId),
        quantity: Joi.number().integer().min(0).required(),
    })).when('attributes', requiredIfNotVariant))
    inventories: IInventory[];

    // @JoiSchema(Joi.array().required().valid(validMongoId))
    systemCategories?: Array<string>;

    @JoiSchema(Joi.object().keys({
        metaTitle: Joi.string().max(255).optional(),
        metaDescription: Joi.string().optional(),
        slug: Joi.string().max(255).optional(),
    }).optional())
    seo?: Seo;

    @JoiSchema(Joi.array().allow(null).optional().items(Joi.object().keys({
        name: Joi.string().max(255),
        values: Joi.array().min(1),
    })))
    attributes?: IAttributes[];

    @JoiSchema(Joi.array().optional().when('attributes', {
        switch: [
            { is: null, then: Joi.array().min(0).optional() },
            { is: Joi.array().length(0), then: Joi.array().optional() },
            { is: Joi.array().min(1), then: Joi.array().min(1).required() },
        ],
        otherwise: Joi.optional()
    }).items(Joi.object().keys({
        attributes: Joi.array().required().items(Joi.object().required().keys({
            name: Joi.string().max(255).required(),
            value: Joi.string().required(),
        })),
        buyPrice: Joi.number().integer().min(0).required(),
        virtualPrice: Joi.number().integer().min(0).required(),
        price: Joi.number().integer().optional().min(0).required(),
        sku: Joi.string().max(255).required(),
        barcode: Joi.string().max(255).required(),
        inventories: Joi.array().required().items(Joi.object().required().keys({
            storeId: Joi.string().custom(validMongoId),
            quantity: Joi.number().integer().min(0),
        }))
    })))
    variants?: IVariant[];
}
