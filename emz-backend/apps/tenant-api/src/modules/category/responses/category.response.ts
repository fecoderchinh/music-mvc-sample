import { ApiProperty } from "@nestjs/swagger";
import {ICategoryDocument, Condition, Seo} from "shared/schemas/tenant/category.schema";
import {ConditionResponse} from "./condition.response";
import { SeoResponse } from "shared/responses/seo.response";
import {seoDefault} from "shared/utils/seo.utils";

export class CategoryResponse {
    constructor(object: ICategoryDocument) {
        this.id = object._id;
        this.name = object.name ?? null;
        this.description = object.description ?? null;
        this.isPublished = object.isPublished ?? null;
        this.addProductType = object.addProductType ?? null;
        this.conditionOperator = object.conditionOperator ?? null;
        this.conditions = object.conditions ? object.conditions.map(condition => new ConditionResponse(condition)) : null;
        const seo = object.seo || seoDefault;
        this.seo = new SeoResponse(seo);
        this.createdAt = object.createdAt ?? null;
    }
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly isPublished: boolean;

    @ApiProperty({
        required: false
    })
    readonly description: string;

    @ApiProperty({
        required: false
    })
    readonly addProductType: string;

    @ApiProperty({
        required: false
    })
    readonly conditionOperator: string;

    @ApiProperty({
        required: false
    })
    readonly conditions?: Condition[];

    @ApiProperty({
        required: false
    })
    readonly seo?: Seo;

    @ApiProperty({})
    readonly createdAt: Date;
}
