import { ApiProperty } from "@nestjs/swagger";
import { IMetaPaginator, IPaginatorResponse } from "shared/paginator";
import {ProductResponse} from "@emzmono/tenants/products/responses/product.response";

export class ProductPaginatorResponse implements IPaginatorResponse {
    constructor(object) {
        this.items = object.items.map(item => new ProductResponse(item));
        this.meta = object.meta;
    }

    @ApiProperty()
    readonly items: ProductResponse[];

    @ApiProperty()
    readonly meta: IMetaPaginator;
}
