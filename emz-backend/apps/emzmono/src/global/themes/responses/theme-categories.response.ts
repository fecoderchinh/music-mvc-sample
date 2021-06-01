import { ApiProperty } from "@nestjs/swagger";
import { ThemeCategoryDocument } from "shared/schemas/global/theme-category.schema";
import { ThemeCategoryResponse } from "./theme-category.response";


export class ThemeCategoriesResponse{
    constructor( stores: Array<ThemeCategoryDocument> ){
        this.items = stores.map( i => new ThemeCategoryResponse(i) );
    }

    @ApiProperty()
    readonly items: Array<ThemeCategoryResponse>
}