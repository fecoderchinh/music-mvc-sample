import { ApiProperty } from "@nestjs/swagger";
import { IMetaPaginator, IPaginatorResponse } from "shared/paginator";
import {ProductResponse} from "./product.response";

export class ProductPaginatorResponse implements IPaginatorResponse {
    constructor(object, {users = [], categories = [], stories = []}) {
        this.items = object.items.map(product => {
            const user = users.length ? users.find(user => user._id == product.user) : null;
            const categoriesMapper = this.getCategoriesMapper(product, categories);

            if (stories.length) {
                if ((product.attributes || []).length) {
                    product.variants[0].inventories = this.getInventoriesMapper(product.variants[0].inventories, stories);
                } else {
                    product.inventories = this.getInventoriesMapper(product.inventories, stories);
                }
            }

            return new ProductResponse(product, {user, categories: categoriesMapper});
        });
        this.meta = object.meta;
    }

    @ApiProperty()
    readonly items: ProductResponse[];

    @ApiProperty()
    readonly meta: IMetaPaginator;

    private getCategoriesMapper(product, categories) {
        const categoriesMapper = product.categories.map(category => category.toString());
        return categories.length ?
            categories.filter(category => categoriesMapper.includes(category._id.toString())) :
            null;
    }

    private getInventoriesMapper(inventories, stories) {
        return inventories.map(inventory => {
            inventory.store = stories.find(store => store._id.equals(inventory.store));
            return inventory;
        })
    }
}
