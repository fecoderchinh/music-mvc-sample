import { ApiProperty } from "@nestjs/swagger";

export class ClientResponse{

    constructor( object: any ){
        this.id         = object.id;
        this.fullName   = object.fullName;
        this.phone      = object.phone;
        this.email      = object.email ?? '';
        this.avatar     = object.avatar ?? '';
    }
    @ApiProperty()
    readonly id: string

    @ApiProperty()
    readonly fullName: string

    @ApiProperty()
    readonly phone: string

    @ApiProperty({
        required: false
    })
    readonly email: string

    @ApiProperty({
        required: false
    })
    readonly avatar: string
}
