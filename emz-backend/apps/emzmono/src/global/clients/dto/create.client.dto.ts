import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, MinLength } from "class-validator";

export class CreateClientDto{
    @ApiProperty({
        type: String,
        default: 'Nhien Phan'
    })
    @IsNotEmpty()
    @MinLength(8)
    fullName: string;

    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @IsNotEmpty()
    @IsPhoneNumber("VN")
    phone: string;


    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    
}