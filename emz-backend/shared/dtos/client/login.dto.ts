import { ApiProperty } from "@nestjs/swagger";
import {JoiSchema} from "nestjs-joi";
import * as Joi from "joi";
import * as phoneNumber  from "joi-phone-number";
const customJoi = Joi.extend(phoneNumber);

export class LoginDto{
    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @JoiSchema(customJoi.string().phoneNumber({ defaultCountry: 'VN', strict: true}).required().max(255))
    phone: string;

    @ApiProperty()
    @JoiSchema(customJoi.string().required().max(255))
    password: string;
}
