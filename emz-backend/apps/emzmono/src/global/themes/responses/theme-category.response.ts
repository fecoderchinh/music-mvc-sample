import { ApiProperty } from "@nestjs/swagger";
import { ThemeCategoryDocument } from "shared/schemas/global/theme-category.schema";

export class ThemeCategoryResponse {
    constructor( object: ThemeCategoryDocument ) {
        this.id = object.id;
        this.categoryName = object.categoryName;
        this.categorySlug = object.categorySlug;
        this.thumbnail = object.thumbnail;
    }

    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly categoryName: string;

    @ApiProperty()
    readonly categorySlug: string;

    @ApiProperty()
    readonly thumbnail: string;
}
