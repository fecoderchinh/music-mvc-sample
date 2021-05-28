import { ApiProperty } from "@nestjs/swagger";
import { ICategoryPaginator } from "shared/schemas/tenant/category.schema";
import { CategoryResponse } from "@emzmono/tenants/category/responses/category.response";
import { IMetaPaginator, IPaginatorResponse } from "shared/paginator";

export class CategoryPaginatorResponse implements IPaginatorResponse {
    constructor(object: ICategoryPaginator) {
        this.items = object.items.map(item => new CategoryResponse(item));
        this.meta = object.meta;
    }

    @ApiProperty()
    readonly items: CategoryResponse[];

    @ApiProperty()
    readonly meta: IMetaPaginator;
}
