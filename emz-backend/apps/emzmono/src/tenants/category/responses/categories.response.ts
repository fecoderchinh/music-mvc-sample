import {CategoryResponse} from "@emzmono/tenants/category/responses/category.response";
import {ApiProperty} from "@nestjs/swagger";
import {ResponseSuccess} from "@emzmono/common/interfaces/success-response.interface";

export class CategoriesResponse extends ResponseSuccess {
    constructor(object: any) {
        super(object);
        this.data = object.map(item => new CategoryResponse(item));
    }
}
