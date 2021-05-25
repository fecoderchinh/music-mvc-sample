import { IMetaPaginator, IPaginatorResponse } from "shared/paginator";

export class PaginatorResponse implements IPaginatorResponse {
    items: any[];
    meta: IMetaPaginator;

    constructor (data) {
        this.items = data.items;
        this.meta = data.meta;
    };
}
