import { ApiProperty } from "@nestjs/swagger";
import { ShopResponse } from "./shop.response";

export class ShopsResponse{
    constructor( object: any ){
        this.items = object.map( i => new ShopResponse(i) );
    }

    @ApiProperty()
    readonly items: ShopResponse[]


}