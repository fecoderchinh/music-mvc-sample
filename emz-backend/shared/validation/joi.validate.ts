import * as Joi from "joi";

const extention = joi => ({
    base: joi.string(),
    name: 'dbId',
    language: {
        mongoid: 'needs to be a valid object id',
    },
    rules: [{
        name: 'mongoid',
        validate(params, value, state, options) {
            if (!Mongoose.Types.ObjectId.isValid(value)) {
                return this.createError(
                    'dbId.mongoid',
                    { v: value },
                    state,
                    options
                );
            }
            return value;
        },
    }],
});


import * as phoneNumber from "joi-phone-number";
const customJoi = Joi.extend(phoneNumber);