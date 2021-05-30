import { ApiProperty } from "@nestjs/swagger";
import { StoreDocument } from "shared/schemas/tenant/store.schema";

export class StoreResponse {
    constructor( object:  StoreDocument ) {
        this.id = object.id;
        this.addressTitle = object.addressTitle ?? null;
        this.phone = object.phone ?? null;
        this.email = object.email ?? null;
        this.address = object.address ?? null;
        this.country = object.country ?? null;
        this.city = object.city ?? null;
        this.district = object.district ?? null;
        this.ward = object.ward ?? null;
        this.fullAddress = object.fullAddress ?? null;
        this.isShippingAddress = object.isShippingAddress ?? null;
        this.isDefault = object.isDefault ?? null;

    }

    @ApiProperty()
    readonly id: String;

    @ApiProperty()
    readonly addressTitle: String;

    @ApiProperty()
    readonly phone: String;

    @ApiProperty()
    readonly email: String;

    @ApiProperty()
    readonly address: String;

    @ApiProperty()
    readonly country: String;

    @ApiProperty()
    readonly city: String;

    @ApiProperty()
    readonly district: String;

    @ApiProperty()
    readonly ward: String;

    @ApiProperty()
    readonly fullAddress: String;

    @ApiProperty()
    readonly isShippingAddress: Boolean;

    @ApiProperty()
    readonly isDefault: Boolean;
}
