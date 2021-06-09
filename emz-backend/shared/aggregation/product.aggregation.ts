import { ObjectID } from "mongodb";
import {Types} from "mongoose";

import {Condition} from "../schemas/tenant/category.schema";

interface SearchProductDto {
    isPublished: boolean;
    tags: Array<string>;
    storeIds: Array<string>;
    categories: Array<ObjectID>;
    keyword: string;
    ids?: Array<string>;
    includes: string;
    conditions?: Condition[];
}

export class ProductAggregation {
    query: SearchProductDto;

    constructor(query: any) {
        this.query = query as SearchProductDto;
    }

    build() {
        let builder = {};
        const isPublished = this.query.isPublished || '';
        const tags = this.query.tags || [];
        const storeIds = this.query.storeIds || [];
        const categories = this.query.categories || [];
        const keyword = this.query.keyword || '';
        const includes = this.query.includes || '';
        const lookups = includes.split(',');

        if (isPublished !== '') {
            builder = { ...builder, isPublished: { $eq: isPublished} };
        }

        if (tags.length) {
            builder = { ...builder, tags: { $in: tags } };
        }

        if (storeIds.length) {
            builder = { ...builder, ...{ $or: [{
                inventories: {
                    $elemMatch: {
                        store: {
                            $in: storeIds.map(storeId => new ObjectID(storeId))
                        }
                    }
                }
            }, {
                "variants.inventories": {
                    $elemMatch: {
                        store: {
                            $in: storeIds.map(storeId => new ObjectID(storeId))
                        }
                    }
                }
            }
            ]}};
        }

        if (categories.length) {
            builder = { ...builder, categories: {
                $elemMatch: {
                    $in: categories.map(categoryId => Types.ObjectId.isValid(categoryId) ? new ObjectID(categoryId) : null)
                }
            }};
        }

        if (keyword !== '') {
            builder = { ...builder, $or: [
                {name: {$regex: keyword.toString(), $options: 'i' }},
                {description: {$regex: keyword.toString(), $options: 'i' }},
                {shortDescription: {$regex: keyword.toString(), $options: 'i' }},
            ]};
        }

        const lookupOption = [];

        // if (lookups.indexOf('categories') !== -1) {
        //     lookupOption.push({
        //         $lookup: {
        //             from: "categories",
        //             localField: "categories",
        //             foreignField: "_id",
        //             as: "categories",
        //         }
        //     });
        // }

        return [
            ...lookupOption,
            { $match: builder}
        ];
    }

}
