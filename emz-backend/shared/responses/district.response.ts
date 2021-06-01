import { ApiProperty } from "@nestjs/swagger";

export class DistrictResponse{
    constructor( items: Array<object> ){
        this.data = items.map( i  => {
            return {
                'id': i['code'],
                'name': i['name']
            }
        } )
    }
    @ApiProperty()
    readonly data: Array<object> ;

}