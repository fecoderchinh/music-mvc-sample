import { Document, Schema }  from 'mongoose'
import {ADD_PRODUCT_TYPE, CONDITION_OPERATOR} from 'shared/enums/category.enum'

export interface Condition {
    readonly field: string;
    readonly condition: string;
    readonly value: string;
}

export interface Seo {
    readonly metaTitle: string;
    readonly metaDescription: string;
    readonly slug: string;
}

export interface CategoryDocument extends Document {
    readonly name: string;
    readonly description: string;
    readonly isPublished: boolean;
    readonly publishSchedule: Date;
    readonly publishedAt: Date;
    readonly image: string;
    readonly addProductType: string;
    readonly conditionOperator: string;
    readonly conditions: Condition[];
    readonly seo: Seo;
    readonly user: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export const CategorySchema = new Schema<CategoryDocument>({
    name: { type: String, required: true },
    description: String,
    isPublished: Boolean,
    publishSchedule: {
        type: Date,
        default: Date.now()
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
    image: String,
    addProductType: {
        type: String,
        enum: ADD_PRODUCT_TYPE,
        required: true,
    },
    conditionOperator: {
        type: String,
        enum: CONDITION_OPERATOR,
    },
    conditions: [{
        field: String,
        condition: String,
        value: String,
    }],
    seo: {
        metaTitle: String,
        metaDescription: String,
        slug: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'ClientModel',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
},{
    collection: 'categories'
});
