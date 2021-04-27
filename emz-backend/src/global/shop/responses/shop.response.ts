import { ApiProperty } from "@nestjs/swagger";
import { DomainResponse } from "./domain.response";

export class ShopResponse{
  
    constructor( object: any ){
        this.id = object.id || object._id
        this.shop = object.shop
        this.website = object.website
        this.tracking = object.tracking
        this.info = object.info
        this.setting = object.setting
        this.user = object.user
        this.createdAt = object.createdAt
        this.domains = object.domains.map( i => new DomainResponse(i) )
    }
    @ApiProperty()
    readonly id: string

    @ApiProperty()
    readonly shop: {
        name: string,
        phone1: string,
        phone2: string,
        address: string,
        city: string,
        district: string,
        ward: string
    }

    @ApiProperty()
    readonly website: {
        name: string,
        email: string,
        keywords: string,
        description: string,
        ownerName: string,
    }

    @ApiProperty()
    readonly tracking: {
        headerScript: string,
        bodyScript: string,
        footerScript: string
    }

    @ApiProperty()
    readonly info: {
        term: string,
        condition: string,
        refun: string,
    }

    @ApiProperty()
    readonly setting: {
        hiddenProductOutOfStock: boolean,
        notifyComment: boolean,
        saveOrderShipped: boolean
    }

    @ApiProperty()
    readonly user: string

    @ApiProperty()
    readonly domains: DomainResponse[]

    @ApiProperty()
    readonly createdAt: Date
 
}