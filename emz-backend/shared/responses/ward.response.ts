import { ApiProperty } from "@nestjs/swagger";

export class WardResponse{
    constructor( items: Array<object> ){
     
        this.data = items.map( i  => {
            return {
                ...i,
                'id': i['code']
            }
        } )
    }
    @ApiProperty()
    readonly data: Array<object> ;

}