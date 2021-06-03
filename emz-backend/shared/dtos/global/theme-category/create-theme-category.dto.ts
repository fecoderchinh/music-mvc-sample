import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import Joi = require("joi");
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateThemeCategoryDto{
    @ApiProperty({
        type: String,
        default: "Thời trang"
    })
    @JoiSchema( Joi.string().required() )
    categoryName: string;


    @ApiProperty({
        type: String,
        default: "thoi-trang"
    })
    @JoiSchema( Joi.string().required() )
    categorySlug: string;

    @ApiProperty({
        type: String,
        default: "https://picsum.photos/200"
    })
    @JoiSchema( Joi.string().required() )
    thumbnail: string;
    
}
