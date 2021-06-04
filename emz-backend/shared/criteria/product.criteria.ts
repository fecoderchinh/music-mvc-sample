import { ObjectID } from "mongodb";

interface SearchProductDto {
    isPublished: boolean;
    tags: Array<string>;
    storeIds: Array<string>;
    categories: Array<string>;
    keyword; string;
    ids?; Array;
}

export class ProductCriteria {
    query: SearchProductDto;

    constructor(query: any) {
        this.query = query as SearchProductDto;
    }

    handle() {
        let builder = {};
        const isPublished = this.query.isPublished || '';
        const tags = this.query.tags || [];
        const storeIds = this.query.storeIds || [];
        const categories = this.query.categories || [];
        const keyword = this.query.keyword || '';

        if (isPublished !== '') {
            builder = { ...builder, isPublished: { $eq: isPublished} };
        }

        if (tags.length) {
            builder = { ...builder, tags: { $in: tags } };
        }

        if (storeIds.length) {
            builder = { ...builder, inventories: {
                $elemMatch: {
                    storeId: {
                        $eq: storeId => new ObjectID(storeId)
                    }
                }
            }};
        }

        if (categories.length) {
            builder = { ...builder, inventories: {
                $elemMatch: {
                    categories: {
                        $in: categories.map(categoryId => new ObjectID(categoryId))
                    }
                }
            }};
        }

        if (keyword !== '') {
            builder = { ...builder, name: { $regex: keyword.toString(), $options: 'i' }};
        }

        return builder;
    }
}
