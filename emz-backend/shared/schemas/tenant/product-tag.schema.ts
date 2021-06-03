import { Document, Schema } from 'mongoose'

export interface IProductTagDocument extends Document {
    readonly name: string;
}

export const ProductTagSchema = new Schema({
    name: { type: String, required: true },
}, {
    collection: 'product_tags',
    timestamps: true,
});
