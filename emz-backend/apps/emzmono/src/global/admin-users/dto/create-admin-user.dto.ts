import { ApiProperty } from '@nestjs/swagger';
import Joi = require('joi');
import { JoiSchema } from 'nestjs-joi';

export class CreateAdminUserDto {
    @ApiProperty({
        default: 'admin@admmin.com'
    })
    @JoiSchema( Joi.string().required().email() )
    email: string;

    @ApiProperty({
        default: '123456',
        type: String
    })
    @JoiSchema( Joi.string().required().min(6) )
    password: string;
}
