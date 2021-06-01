import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Validate } from "class-validator";
import { IsThemeCatSlugAlreadyExist } from "shared/validator/IsThemeCatSlugAlreadyExist.validator";

export class UpdateThemeCategoryDto{
    @ApiProperty({
        type: String,
        default: "Thời trang"
    })
    @IsNotEmpty()
    categoryName: string;

    @ApiProperty({
        type: String,
        default: "thoi-trang"
    })
    @IsNotEmpty()
    @Validate( IsThemeCatSlugAlreadyExist)
    categorySlug: string;

    @ApiProperty({
        type: String,
        default: "https://picsum.photos/200"
    })
    @IsNotEmpty()
    thumbnail: string;
    
}
