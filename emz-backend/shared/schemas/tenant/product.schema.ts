import {Decimal128, Document, ObjectId, Schema} from 'mongoose'
import {ICategoryDocument} from "./category.schema";
import {ATTRIBUTE_MODEL, CATEGORY_MODEL, CLIENT_MODEL, STORE_MODEL} from "../model.constant";

export interface Seo {
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly slug: string;
}

export interface IImage {
    url: string;
    position: number;
}

export interface IInventory {
    store: ObjectId;
    quantity: number;
}

export interface IAttributes {
    _id?: ObjectId;
    name: string;
    values: Array<string>;
}

export interface IAttribute {
    _id?: ObjectId;
    name: string;
    value: string;
}

export interface IVariant {
    attributes: IAttribute[];
    buyPrice: Decimal128;
    virtualPrice: Decimal128;
    price: Decimal128;
    sku: string;
    barcode: string;
    inventories: IInventory[];
}

export interface IProductDocument extends Document {
    productName: string;
    name: string;
    description: string;
    shortDescription: string;
    manufacture: string;
    buyPrice: Decimal128;
    virtualPrice: Decimal128;
    price: Decimal128;
    sku: string;
    barcode: string;
    quantity: number;
    weight: string;
    sizePacked: string;
    isPublished: boolean;
    isAllowOutOfStock: boolean;
    isRequiredShipping: boolean;
    publishSchedule: Date;
    publishedAt: Date;
    images: IImage[];
    tags: Array<string>;
    brands: Array<string>;
    categories: ICategoryDocument[];
    systemCategories: ICategoryDocument[];
    seo: Seo[];
    attributes?: IAttributes[];
    variants?: IVariant[];
    inventories?: IInventory[];
    createdAt?: Date;
    user: ObjectId;
}

export const ProductSchema = new Schema<IProductDocument>({
    name: { type: String, required: true },
    description: String,
    shortDescription: String,
    manufacture: String,
    buyPrice: Number,
    virtualPrice: Number,
    price: Number,
    sku: String,
    barcode: String,
    quantity: Number,
    weight: String,
    sizePacked: String,
    isPublished: Boolean,
    isAllowOutOfStock: Boolean,
    isRequiredShipping: Boolean,
    publishSchedule: {
        type: Date,
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
    images: [{
        url: String,
        position: Number,
    }],
    tags: Array,
    brands: Array,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: CATEGORY_MODEL,
        required: true
    }],
    systemCategories: [{
        type: Schema.Types.ObjectId,
        ref: CATEGORY_MODEL,
        required: true
    }],
    seo: {
        metaTitle: String,
        metaDescription: String,
        slug: String,
    },
    attributes: [{
        id: { type: Schema.Types.ObjectId, ref: ATTRIBUTE_MODEL, },
        name: String,
        values: Array
    }],
    variants: [{
        attributes:[{
            id: { type: Schema.Types.ObjectId, ref: ATTRIBUTE_MODEL, },
            name: String,
            value: String
        }],
        buyPrice: Number,
        virtualPrice: Number,
        price: Number,
        sku: String,
        barcode: String,
        inventories: [{
            store: { type: Schema.Types.ObjectId, ref: STORE_MODEL, },
            quantity: Number,
        }]
    }],
    inventories: [{
        store: { type: Schema.Types.ObjectId, ref: STORE_MODEL, },
        quantity: Number,
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: CLIENT_MODEL,
        required: true
    },
}, {
    collection: 'products',
    timestamps: true,
});
