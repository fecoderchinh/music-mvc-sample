import { ApiProperty } from "@nestjs/swagger";

import {IMenuDocument} from "shared/schemas/tenant/menu.schema";
import {ObjectId} from "mongoose";
import {AbstractResponse} from "@emzmono/common/responses/abstract.response";
import {MenuItemResponse} from "@emzmono/tenants/menu/responses/menu-item.response";
import {CategoryResponse} from "@emzmono/tenants/category/responses/category.response";
import {MenuResponse} from "@emzmono/tenants/menu/responses/menu.response";

export class MenusResponse {

    constructor(object) {
        this.data = object.map(item => new MenuResponse(item));
    }
    @ApiProperty()
    readonly data: Array<any>;
}
