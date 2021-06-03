import { Document, Schema } from 'mongoose'

export interface IBrandDocument extends Document {
    readonly name: string;
}

export const BrandSchema = new Schema({
    name: { type: String, required: true },
}, {
    collection: 'brands',
    timestamps: true,
});
