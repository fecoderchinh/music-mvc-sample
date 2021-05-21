import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UploadFileDto {
    @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
    images: any[];  
}