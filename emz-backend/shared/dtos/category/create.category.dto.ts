import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema } from "nestjs-joi";
import * as Joi from 'joi';
import { Condition, Seo } from 'shared/schemas/category.schema';
import {
    extensionImage,
    addProductType,
    conditionOperator,
    conditionField,
    allowCondition,
} from 'shared/rules/common';

import {JoiSchemaOptions} from "nestjs-joi";
import {ADD_PRODUCT_AUTO} from "../../enums/category.enum";
@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateCategoryDto {
    @ApiProperty({
        type: String,
        default: "Category"
    })
    @JoiSchema(Joi.string().required().max(255))
    name: string;

    @ApiProperty({
        type: String,
        default: "Description"
    })
    @JoiSchema(Joi.string().required())
    description?: string;

    @ApiProperty({
        type: Boolean,
        default: false
    })
    @JoiSchema(Joi.boolean().invalid(false).required())
    isPublished: boolean;

    @ApiProperty({
        type: Date,
        default: '2021-01-01'
    })
    @JoiSchema(Joi.date().min('now'))
    publishSchedule?: Date;

    @ApiProperty({
        type: String,
        default: "image.png"
    })
    @JoiSchema(Joi.string().optional().custom(extensionImage))
    image?: string;

    @ApiProperty({
        type: String,
        default: "MANUAL"
    })
    @JoiSchema(Joi.string().required().custom(addProductType))
    addProductType: string;

    @ApiProperty({
        type: String,
        default: "AND"
    })
    @JoiSchema(Joi.string().required().custom(conditionOperator).when('addProductType', {
        is: ADD_PRODUCT_AUTO,
        then: Joi.required(),
        otherwise: Joi.optional(),
    }))
    conditionOperator?: string;
    @JoiSchema(Joi.array().items(Joi.object().keys({
        field: Joi.string().required().custom(conditionField),
        condition: Joi.string().required().custom(allowCondition),
        value: Joi.string().required(),
    })).when('addProductType', {
        is: ADD_PRODUCT_AUTO,
        then: Joi.required(),
        otherwise: Joi.optional(),
    }))
    conditions?: Condition[];

    @JoiSchema(Joi.object().keys({
        metaTitle: Joi.string().max(255).optional(),
        metaDescription: Joi.string().optional(),
        slug: Joi.string().max(255).optional(),
    }).optional())
    seo?: Seo
}
