import { ApiProperty } from "@nestjs/swagger";

import {IMenuItemDocument} from "shared/schemas/tenant/menu.schema";

import {AbstractResponse} from "@emzmono/common/responses/abstract.response";

export class MenuItemResponse extends AbstractResponse {

    constructor(object, hiddenFields: Array<string> = []) {
        super();
        this.name = object.name;
        this.typeable = object.typeable;
        this.value = object.value;
        this.link = object.link;
        this.position = object.position;
        this.depth = object.depth;
        const children = object.children || [];
        this.children = children ? this.buildResponse(children) : [];
        this.handleHiddenFields(hiddenFields);
    }

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly typeable: string;

    @ApiProperty()
    readonly value: string;

    @ApiProperty()
    readonly link: string;

    @ApiProperty()
    readonly position: number;

    @ApiProperty()
    readonly status: number;

    readonly depth: number;

    @ApiProperty()
    readonly children: IMenuItemDocument[];

    @ApiProperty({})
    readonly createdAt: Date;

    private buildResponse(object) {
        return object.map(item => {
            if (item.children && item.children.length) {
                item.children = this.buildResponse(item.children);
            }
            return {
                name: item.name,
                typeable: item.typeable,
                value: item.value,
                link: item.link,
                position: item.position,
                children: item.children || [],
            };
        })
    }
}
