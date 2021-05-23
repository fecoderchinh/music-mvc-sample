import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto{
    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @IsNotEmpty()
    @IsPhoneNumber("VN")
    phone: string

    @ApiProperty()
    @IsNotEmpty()
    password: string

}