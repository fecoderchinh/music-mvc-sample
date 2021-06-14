import { Document, Schema }  from 'mongoose'
import { CONDITION_OPERATOR } from 'shared/enums/category.enum'
import { ADD_PRODUCT_TYPE } from 'shared/enums/category.enum'
import { IMetaPaginator } from "../../paginator";
import {CLIENT_MODEL, PRODUCT_MODEL} from "../model.constant";

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

export interface ICategoryPaginator {
    readonly items: ICategoryDocument[];
    readonly meta: IMetaPaginator;
}

export interface ICategoryDocument extends Document {
    name: string;
    readonly description: string;
    readonly isPublished: boolean;
    publishSchedule: Date;
    readonly publishedAt: Date;
    image: string;
    addProductType: string;
    conditionOperator: string;
    conditions: Condition[];
    readonly seo: Seo;
    readonly user: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

export const CategorySchema = new Schema<ICategoryDocument>({
    name: { type: String, required: true },
    description: String,
    isPublished: Boolean,
    publishSchedule: {
        type: Date,
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
        ref: CLIENT_MODEL,
        required: true
    }
},{
    collection: 'categories',
    timestamps: true,
});
