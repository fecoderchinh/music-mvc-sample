import { IMetaPaginator, IPaginatorResponse } from "shared/paginator";

export class PaginatorSuccessResponse implements IPaginatorResponse {
    items: any[];
    meta: IMetaPaginator;

    constructor (data) {
        this.items = data.items;
        this.meta = data.meta;
    };
}
