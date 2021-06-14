import {Condition} from "../schemas/tenant/category.schema";
import {
    CONDITION_PRODUCT_BRAND_FIELD,
    CONDITION_PRODUCT_CATEGORY_FIELD,
    CONDITION_PRODUCT_NAME_FIELD,
    CONDITION_PRODUCT_PRICE_FIELD,
    CONDITION_PRODUCT_QUANTITY_FIELD,
    CONDITION_PRODUCT_TAG_FIELD, CONDITIONS,
    LOGICAL_OPERATORS,
    MATCH_OPERATORS
} from "../enums/category.enum";

import { ObjectID } from "mongodb";
import {ObjectId} from "mongoose";

interface ProductConditionDto {
    conditions: Condition[];
    conditionOperator: string;
}

export class ProductConditionAggregation {
    query: ProductConditionDto;

    constructor(query: any) {
        this.query = query as ProductConditionDto;
    }

    build() {
        const builder = [];
        const lookupBuilder = [];
        const conditions = this.query.conditions || [];

        conditions.forEach(condition => {
            switch (condition.field) {
                case CONDITION_PRODUCT_NAME_FIELD:
                    builder.push({ name: this.getCondition(condition) });
                    break;
                case CONDITION_PRODUCT_PRICE_FIELD:
                    builder.push({ buyPrice: this.getCondition(condition) });
                    break;
                case CONDITION_PRODUCT_BRAND_FIELD:
                    builder.push({brands: {
                        $elemMatch: {
                            ...this.getCondition(condition)
                        }}
                    });
                    break;
                case CONDITION_PRODUCT_CATEGORY_FIELD:
                    lookupBuilder.push({ $lookup: {
                        from: "categories",
                        let: { categoryIds: "$categories", },
                        pipeline: [
                            {
                                $match: {
                                    $expr: { $in: [ "$_id",  "$$categoryIds" ] },
                                }
                            }
                        ],
                        as: 'categories'
                    }});
                    builder.push({categories: {
                        $elemMatch: {
                            ...this.getCondition(condition)
                        }
                    }});
                    break;
                case CONDITION_PRODUCT_TAG_FIELD:
                    builder.push({ tags: {
                        $elemMatch: {
                            ...this.getCondition(condition)
                        }
                    }});
                    break;
                case CONDITION_PRODUCT_QUANTITY_FIELD:
                    builder.push({ quantity: this.getCondition(condition) });
                    break;
            }
        });

        const logicalQueryOperator = LOGICAL_OPERATORS[this.query.conditionOperator];

        return [
            ...lookupBuilder,
            { $match: {
                [logicalQueryOperator]: [...builder]
            }}
        ];
    }

    private getCondition(condition) {
        let operator = JSON.stringify(CONDITIONS[condition.condition]);
        operator = operator.replace('KEYWORD', condition.value);

        const operatorParse = JSON.parse(operator);

        const value = operatorParse[MATCH_OPERATORS[condition.condition]];

        switch (condition.field) {
            case CONDITION_PRODUCT_QUANTITY_FIELD:
            case CONDITION_PRODUCT_PRICE_FIELD:
                operatorParse[MATCH_OPERATORS[condition.condition]] = Number(value);
                break;
            default:
                operatorParse[MATCH_OPERATORS[condition.condition]] = new RegExp(value);
        }

        return operatorParse;
    }
}
