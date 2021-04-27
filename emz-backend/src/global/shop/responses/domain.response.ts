import { ApiProperty } from "@nestjs/swagger";

export class DomainResponse{
  
    constructor( object: any ){
        this.id = object.id || object._id;
        this.domainName = object.domainName;
        this.isInternal = object.isInternal;
        this.createdAt = object.createdAt;
    }
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly domainName: string;

    @ApiProperty()
    readonly isInternal: string;

    @ApiProperty()
    readonly createdAt: Date
 
}