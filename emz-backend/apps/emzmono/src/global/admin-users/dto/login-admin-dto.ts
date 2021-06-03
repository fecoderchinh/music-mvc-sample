import { ApiProperty } from '@nestjs/swagger';
import { string } from "yargs";
import { JoiSchema } from "nestjs-joi";
import Joi = require("joi");

export class LoginAdminDto{
    
    @ApiProperty({
        default: 'admin@admmin.com'
    })
    @JoiSchema( Joi.string().required().email() )
    username: string;

    @ApiProperty({
        type: String,
        default: '123456'
    })
    @JoiSchema( Joi.string().required().min(6) )
    password: string;
}