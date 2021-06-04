import { ApiProperty } from "@nestjs/swagger";

export class SeoResponse {
    constructor( object: any) {
        this.metaTitle = object.metaTitle;
        this.metaDescription = object.metaDescription;
        this.slug = object.slug;
    }

    @ApiProperty()
    readonly metaTitle: string;

    @ApiProperty()
    readonly metaDescription: string;

    @ApiProperty()
    readonly slug: string;
}
