import { ObjectID } from "mongodb";

interface ProductConditionDto {
    withoutCategory: string;
}

export class WithoutCategoryAggregation {
    query: ProductConditionDto;

    constructor(query: any) {
        this.query = query as ProductConditionDto;
    }

    build() {
        const withoutCategory = this.query.withoutCategory || '';

        if (withoutCategory === '') {
            return null;
        }

        return {
            $match: {
                categories: {
                    $ne: new ObjectID(withoutCategory)
                }
            }
        }
    }
}
