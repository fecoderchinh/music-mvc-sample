import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsEmail, MinLength } from "class-validator";

export class CreateShopDto{
   
    @ApiProperty({
        type: String,
        default: "sumishop"
    })
    @IsNotEmpty()
    @MinLength(6)
    shopDomain: string;

    @ApiProperty({
        type: String,
        default: "Nhien Phan Van"
    })
    @IsNotEmpty()
    @MinLength(6)
    shopOwnerName: string;

    @ApiProperty({
        type: String,
        default: "Sumishop Watch Pro"
    })
    @IsNotEmpty()
    @MinLength(8)
    shopName: string;


    @ApiProperty({
        type: String,
        default: "phanvannhien@gmail.com"
    })
    @IsNotEmpty()
    @MinLength(6)
    @IsEmail()
    email: string;

    @ApiProperty({
        type: String,
        default: "1 Le Lai, Ben Thanh Q1"
    })
    @IsNotEmpty()
    @MinLength(6)
    shopAddress: string;

    @ApiProperty({
        type: String,
        default: "01"
    })
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        type: String,
        default: '0902181852'
    })
    @IsNotEmpty()
    @IsPhoneNumber("VN")
    phone: string;

}