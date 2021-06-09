import { JoiSchema } from "nestjs-joi";
import * as Joi from 'joi';
import { Condition } from 'shared/schemas/tenant/category.schema';

import { validConditionByField } from "shared/rules/category";

import {JoiSchemaOptions} from "nestjs-joi";
import {
    CONDITION_FIELDS,
    CONDITION_OPERATOR,
    CONDITIONS
} from "shared/enums/category.enum";

@JoiSchemaOptions({
    allowUnknown: false,
})
export class ProductConditionDto {
    @JoiSchema(Joi.string().required().valid(...CONDITION_OPERATOR))
    conditionOperator?: string;

    @JoiSchema(Joi.array().items(Joi.object().keys({
        field: Joi.string().required().valid(...CONDITION_FIELDS),
        condition: Joi.string().required().valid(...Object.keys(CONDITIONS)),
        value: Joi.string().required(),
    }).custom(validConditionByField)))
    conditions?: Condition[];
}
