import * as mongoose from 'mongoose'

export interface ProductDocument extends mongoose.Document {
    readonly productName: string;
}

export const ProductSchema = new mongoose.Schema<ProductDocument>({
    productName: { type: String, required: true },
}, {
    collection: 'products'
});
