import { ApiProperty } from "@nestjs/swagger";
import { ThemeDocument } from "shared/schemas/global/theme.schema";
import { ThemeResponse } from "./theme.response";


export class ThemesResponse{
    constructor( items: Array<ThemeDocument> ){
        this.items = items.map( i => new ThemeResponse(i) );
    }

    @ApiProperty()
    readonly items: Array<ThemeResponse>
}