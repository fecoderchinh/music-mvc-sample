import * as Joi from "joi";
import * as phoneNumber from "joi-phone-number";

export const customJoi = Joi.extend(phoneNumber);
