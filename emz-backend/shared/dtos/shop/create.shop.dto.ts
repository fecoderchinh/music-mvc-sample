import { ApiProperty } from "@nestjs/swagger";
import {JoiSchema} from "nestjs-joi";
import * as Joi from "joi";
import * as phoneNumber  from "joi-phone-number";
const customJoi = Joi.extend(phoneNumber);

export class CreateShopDto{
    @ApiProperty({
        type: String,
        default: "sumishop"
    })
    @JoiSchema(customJoi.string().required().max(255).min(6))
    shopDomain: string;

    @ApiProperty({
        type: String,
        default: "Nhien Phan Van"
    })
    @JoiSchema(customJoi.string().required().max(255).min(6))
    shopOwnerName: string;

    @ApiProperty({
        type: String,
        default: "Sumishop Watch Pro"
    })
    @JoiSchema(customJoi.string().required().max(255).min(8))
    shopName: string;

    @ApiProperty({
        type: String,
        default: "phanvannhien@gmail.com"
    })
    @JoiSchema(customJoi.string().email().required().max(255))
    email: string;

    @ApiProperty({
        type: String,
        default: "1 Le Lai, Ben Thanh Q1"
    })
    @JoiSchema(customJoi.string().required().max(255).min(6))
    shopAddress: string;

    @ApiProperty({
        type: String,
        default: "01"
    })
    @JoiSchema(Joi.string().required())
    city: string;

    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @JoiSchema(customJoi.string().phoneNumber({ defaultCountry: 'VN', strict: true}).required().max(255))
    phone: string;

}
