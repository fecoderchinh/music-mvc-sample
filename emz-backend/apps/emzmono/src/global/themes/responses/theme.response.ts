import { ApiProperty } from "@nestjs/swagger";
import { ThemeCategoryDocument } from "shared/schemas/global/theme-category.schema";
import { IThemeStyle, ThemeDocument } from "shared/schemas/global/theme.schema";
import { ThemeCategoryResponse } from "./theme-category.response";

export class ThemeResponse {
    constructor( object: ThemeDocument ) {
        this.id = object.id;
        this.themeName = object.themeName;
        this.themeSlug = object.themeSlug;
        this.thumbnail = object.thumbnail;
        this.shortDescription = object.shortDescription;
        this.description = object.description;
        this.price = object.price;
        this.salePrice = object.salePrice;
        this.themePath = object.themePath;
        this.styles = object.styles;
        this.category = new ThemeCategoryResponse(object.category);
    }

    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly themeName: string;

    @ApiProperty()
    readonly themeSlug: string;

    @ApiProperty()
    readonly thumbnail: string;

    @ApiProperty()
    readonly shortDescription: string;

    @ApiProperty()
    readonly description: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly salePrice: number;

    @ApiProperty()
    readonly themePath: string;

    @ApiProperty()
    readonly styles: IThemeStyle[];

    @ApiProperty()
    readonly category: ThemeCategoryResponse;
}
