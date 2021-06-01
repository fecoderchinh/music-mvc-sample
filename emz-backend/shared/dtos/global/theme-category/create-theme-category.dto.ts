import { ApiProperty } from "@nestjs/swagger";
import {JoiSchema} from "nestjs-joi";
import * as Joi from "joi";
import * as phoneNumber  from "joi-phone-number";
const customJoi = Joi.extend(phoneNumber);

export class CreateThemeCategoryDto{
    @ApiProperty({
        type: String,
        default: "Thời trang"
    })
    @JoiSchema(customJoi.string().required().max(255).min(6))
    themCategoryName: string;

    
}
