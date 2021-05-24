import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema } from "nestjs-joi";
import * as Joi from "joi";
import * as phoneNumber  from "joi-phone-number";
const customJoi = Joi.extend(phoneNumber);

export class CreateClientDto{
    @ApiProperty({
        type: String,
        default: 'Nhien Phan'
    })
    @JoiSchema(customJoi.string().required().max(255).min(8))
    fullName: string;

    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @JoiSchema(customJoi.string().phoneNumber({ defaultCountry: 'VN', strict: true}).required().max(255))
    phone: string;


    @ApiProperty()
    @JoiSchema(customJoi.string().required().max(255).min(8))
    password: string;

}
