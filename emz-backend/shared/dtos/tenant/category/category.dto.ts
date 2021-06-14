import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema } from "nestjs-joi";
import * as Joi from 'joi';
import {Condition, Seo} from 'shared/schemas/tenant/category.schema';
import {
    extensionImage, validMongoId,
} from 'shared/rules/common';
import { validConditionByField } from "shared/rules/category";

import {JoiSchemaOptions} from "nestjs-joi";
import {
    ADD_PRODUCT_AUTO,
    ADD_PRODUCT_TYPE,
    CONDITION_FIELDS,
    CONDITION_OPERATOR,
    CONDITIONS
} from "shared/enums/category.enum";

const requiredIfAutoCondition = {
    is: ADD_PRODUCT_AUTO,
    then: Joi.required(),
    otherwise: Joi.optional(),
};

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CategoryDto {
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
    @JoiSchema(Joi.date().min('now').optional())
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
    @JoiSchema(Joi.string().required().valid(...ADD_PRODUCT_TYPE))
    addProductType: string;

    @ApiProperty({
        type: String,
        default: "AND"
    })
    @JoiSchema(Joi.string().required().valid(...CONDITION_OPERATOR).when('addProductType', requiredIfAutoCondition))
    conditionOperator?: string;

    @JoiSchema(Joi.array().items(Joi.object().required().keys({
        field: Joi.string().required().valid(...CONDITION_FIELDS),
        condition: Joi.string().required().valid(...Object.keys(CONDITIONS)),
        value: Joi.string().required(),
    }).custom(validConditionByField)).when('addProductType', requiredIfAutoCondition))
    conditions?: Condition[];

    @JoiSchema(Joi.array().items(Joi.string().required().custom(validMongoId))
        .custom(validConditionByField)
        .when('addProductType', requiredIfAutoCondition))
    products?: Array<string>;

    @JoiSchema(Joi.object().keys({
        metaTitle: Joi.string().max(255).optional(),
        metaDescription: Joi.string().optional(),
        slug: Joi.string().max(255).optional(),
    }).optional())
    seo?: Seo
}
