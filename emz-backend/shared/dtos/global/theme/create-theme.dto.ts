import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema, JoiSchemaOptions } from "nestjs-joi";
import * as Joi from 'joi';
import { IThemeStyle } from "shared/schemas/global/theme.schema";
import { Types } from "mongoose";

class IThemeStyleProp{
    @ApiProperty()
    styleName: String;
    @ApiProperty()
    color: String
}

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateThemeDto{
    @ApiProperty({
        type: String,
        default: "Thời trang"
    })
    @JoiSchema( Joi.string().required() )
    themeName: string;

    @ApiProperty({
        type: String,
        default: "thoi-trang"
    })
    @JoiSchema( Joi.string().required() )
    themeSlug: string;

    @ApiProperty({
        type: String
    })
    @JoiSchema( Joi.string().required() )
    shortDescription: string;
 
    @ApiProperty({
        type: String
    })
    @JoiSchema( Joi.string().required() )
    description: string;

    @ApiProperty({
        type: Number
    })
    @JoiSchema( Joi.number().required() )
    price: number;

    @ApiProperty({
        type: Number
    })
    @JoiSchema( Joi.number().required() )
    salePrice: number;

    @ApiProperty({
        type: String
    })
    @JoiSchema( Joi.string().required() )
    themePath: string;

    @ApiProperty({
        type: String,
        default: "https://picsum.photos/1200/600"
    })
    @JoiSchema( Joi.string().required() )
    thumbnail: string;

    @ApiProperty({
        type: [ IThemeStyleProp ]
    })
    @JoiSchema( Joi.array().items(Joi.object().keys({
        styleName: Joi.string().required(),
        color: Joi.string().regex(/^#[A-Fa-f0-9]{6}/)
    })).optional().allow(null))
    styles: IThemeStyle[];

    @ApiProperty()
    @JoiSchema( Joi.string().custom( (value, helpers) => {
        if( !Types.ObjectId.isValid(value) ){
            return helpers.error('any.invalid');
        }
        return value;
    }))
    category: string;

}
