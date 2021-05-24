import { ApiProperty } from "@nestjs/swagger";
import { Condition, Seo } from "../../../../../../shared/schemas/category.schema";
import {SeoResponse} from "@emzmono/tenants/category/responses/seo.response";
import {ConditionResponse} from "@emzmono/tenants/category/responses/condition.response";

export class CategoryResponse {
    constructor(object: any) {
        this.id = object.id;
        this.name = object.name;
        this.description = object.description ?? null;
        this.isPublished = object.isPublished;
        this.addProductType = object.addProductType;
        this.conditionOperator = object.conditionOperator ?? null;
        this.conditions = object.conditions ? object.conditions.map(condition => new ConditionResponse(condition)) : null;
        this.seo = new SeoResponse(object.seo);
    }
    @ApiProperty()
    readonly id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly isPublished: string;

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
}
