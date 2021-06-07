import { ApiProperty } from "@nestjs/swagger";
import {MenuResponse} from "./menu.response";


export class MenusResponse {

    constructor(object) {
        this.data = object.map(item => new MenuResponse(item));
    }
    @ApiProperty()
    readonly data: Array<any>;
}
