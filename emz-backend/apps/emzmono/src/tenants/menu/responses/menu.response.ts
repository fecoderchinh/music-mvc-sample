import { ApiProperty } from "@nestjs/swagger";

import {IMenuDocument} from "shared/schemas/tenant/menu.schema";
import {ObjectId} from "mongoose";
import {AbstractResponse} from "@emzmono/common/responses/abstract.response";
import {MenuItemResponse} from "@emzmono/tenants/menu/responses/menu-item.response";

export class MenuResponse extends AbstractResponse {

    constructor(object: IMenuDocument, hiddenFields: Array<string> = []) {
        super();
        this.id = object._id;
        this.name = object.name;
        this.user = object.user;
        this.alias = object.alias;
        this.position = object.position;
        this.createdAt = object.createdAt;
        const menuItems = object.menuItems || [];
        this.menuItems = menuItems.length ? menuItems.map(menuItem => new MenuItemResponse(menuItem)) : [];
        this.handleHiddenFields(hiddenFields);
    }
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly user: ObjectId;

    @ApiProperty()
    readonly alias: string;

    @ApiProperty()
    readonly position: string;

    @ApiProperty()
    readonly status: number;

    @ApiProperty()
    readonly menuItems: MenuItemResponse[];

    @ApiProperty({})
    readonly createdAt: Date;

}
