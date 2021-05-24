import * as Joi from 'joi';
import {ObjectSchema} from "joi";

export const createCatSchema:ObjectSchema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
});