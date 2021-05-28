import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateStoreDto {
    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    addressTitle: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    phone: string;

    @ApiProperty({ type: String, required: false })
    @JoiSchema(Joi.string().email())
    email: String;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    address: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    country: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    city: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    district: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    province: string;

    @ApiProperty({ type: String })
    @JoiSchema(Joi.string().required())
    ward: string;

    @ApiProperty({ type: Boolean, default: false })
    @JoiSchema(Joi.boolean().required())
    isShippingAddress: Boolean;

    @ApiProperty({ type: Boolean, default: false })
    @JoiSchema(Joi.boolean().required())
    isDefault: Boolean;
}
