import { ApiProperty } from "@nestjs/swagger";
import { StoreDocument } from "shared/schemas/tenant/store.schema";
import { StoreResponse } from "./store.response";

export class StoresResponse{
    constructor( stores: Array<StoreDocument> ){
        this.items = stores.map( i => new StoreResponse(i) );
    }

    @ApiProperty()
    readonly items: Array<StoreResponse>
}