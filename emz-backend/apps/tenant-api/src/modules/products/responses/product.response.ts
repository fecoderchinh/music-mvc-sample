import { ApiProperty } from "@nestjs/swagger";
import {ICategoryDocument, Seo} from "shared/schemas/tenant/category.schema";
import { SeoResponse } from "shared/responses/seo.response";
import {IAttributes, IInventory, IProductDocument, IVariant} from "shared/schemas/tenant/product.schema";
import {Decimal128} from "mongoose";
import {ObjectID} from "mongodb";
import {seoDefault} from "shared/utils/seo.utils";
import {ClientResponse} from "@emzmono/global/clients/responses/client.response";
import {CategoryResponse} from "../../category/responses/category.response";
import {StoreResponse} from "../../stores/responses/store.response";

export class ProductResponse {
    constructor(object: IProductDocument, {user = null, categories = null } = {}) {
        this.id = object._id;
        this.name = object.name;
        this.description = object.description ?? null;
        this.isPublished = object.isPublished;
        this.tags = object.tags || [];
        this.brands = object.brands || [];
        const categoriesMapper = categories || object.categories;
        this.categories = categoriesMapper.map(category => new CategoryResponse(category));
        this.systemCategories = object.systemCategories || [];
        this.buyPrice = object.buyPrice;
        this.virtualPrice = object.virtualPrice;
        this.price = object.price;
        this.sku = object.sku || null;
        this.barcode = object.barcode || null;
        this.quantity = object.quantity || null;
        this.weight = object.weight;
        this.sizePacked = object.sizePacked;
        this.user = new ClientResponse(user || object.user);
        this.inventories = this.buildInventoriesResponse(object.inventories || []);
        this.attributes = object.attributes;
        this.variants = this.buildVariantResponse(object.variants || []);
        this.seo = new SeoResponse(object.seo || seoDefault);
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
    readonly categories: ObjectID[]|CategoryResponse[];
    readonly systemCategories: ICategoryDocument[];
    readonly inventories: IInventory[];

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
    readonly attributes?: IAttributes[];

    @ApiProperty({
        required: false
    })
    readonly seo?: Seo;

    @ApiProperty({})
    readonly createdAt: Date;

    private buildInventoriesResponse(inventories) {
        return inventories.map(inventory => {
            inventory.store = new StoreResponse(inventory.store);
            return inventory;
        })
    }

    private buildVariantResponse(variants) {
        return variants.map(variant => {
            variant.inventories = this.buildInventoriesResponse(variant.inventories);
            return variant;
        });
    }
}
