import { ApiProperty } from "@nestjs/swagger";
import {ICategoryDocument, Condition, Seo} from "shared/schemas/tenant/category.schema";
import { SeoResponse } from "shared/responses/seo.response";
import {IProductDocument, IVariant} from "shared/schemas/tenant/product.schema";

import {Decimal128} from "mongoose";
import {seoDefault} from "shared/utils/seo.utils";
import {ClientResponse} from "@emzmono/global/clients/responses/client.response";
import {CategoryResponse} from "../../category/responses/category.response";

export class ProductResponse {
    constructor(object: IProductDocument) {
        this.id = object._id;
        this.name = object.name;
        this.description = object.description ?? null;
        this.isPublished = object.isPublished;
        this.tags = object.tags || [];
        this.brands = object.brands || [];
        const categories = object.categories || [];
        this.categories = categories.map(category => new CategoryResponse(category));
        this.systemCategories = object.systemCategories || [];
        this.buyPrice = object.buyPrice;
        this.virtualPrice = object.virtualPrice;
        this.price = object.price;
        this.sku = object.sku || null;
        this.barcode = object.barcode || null;
        this.quantity = object.quantity || null;
        this.weight = object.weight;
        this.sizePacked = object.sizePacked;
        this.user = new ClientResponse(object.user);
        this.variants = object.variants || [];
        const seo = object.seo || seoDefault;
        this.seo = new SeoResponse(seo);
        this.createdAt = object.createdAt;
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
    readonly tags: Array<string>;
    readonly brands: Array<string>;
    readonly categories: CategoryResponse[];
    readonly systemCategories: ICategoryDocument[];

    @ApiProperty({
        required: false
    })
    readonly buyPrice: Decimal128;
    readonly virtualPrice: Decimal128;
    readonly price: Decimal128;
    readonly sku: string;
    readonly barcode: string;
    readonly quantity: number;
    readonly weight: string;
    readonly sizePacked: string;
    readonly user: any;

    @ApiProperty({
        required: false
    })
    readonly variants?: IVariant[];

    @ApiProperty({
        required: false
    })
    readonly seo?: Seo;

    @ApiProperty({})
    readonly createdAt: Date;
}
