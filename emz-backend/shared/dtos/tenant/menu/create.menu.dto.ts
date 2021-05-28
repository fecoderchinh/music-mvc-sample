import { ApiProperty } from "@nestjs/swagger";
import { JoiSchema } from "nestjs-joi";
import * as Joi from 'joi';
import {JoiSchemaOptions} from "nestjs-joi";
import {IMenuItemDocument} from "shared/schemas/tenant/menu.schema";

@JoiSchemaOptions({
    allowUnknown: false,
})
export class CreateMenuDto {
    @ApiProperty({
        type: String,
        default: "Menu main"
    })
    @JoiSchema(Joi.string().required().max(255))
    name: string;

    @ApiProperty({
        type: Number,
        default: "position"
    })
    @JoiSchema(Joi.number().required().default(0))
    position: string;

    @JoiSchema(Joi.array().items(Joi.object().keys({
        name: Joi.string().required().max(255),
        typeable: Joi.string().required(),
        value: Joi.string().required(),
        link: Joi.string().required(),
        position: Joi.number().required().default(0),
        children: Joi.array().required(),
    })))
    menuItems?: IMenuItemDocument[];
}
