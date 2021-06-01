import { ApiProperty } from "@nestjs/swagger";

export class SeoResponse {
    constructor( object: any) {
        this.metaTitle = object.metaTitle ?? null;
        this.metaDescription = object.metaDescription ?? null;
        this.slug = object.slug ?? null;
    }

    @ApiProperty()
    readonly metaTitle: string;

    @ApiProperty()
    readonly metaDescription: string;

    @ApiProperty()
    readonly slug: string;
}
