import { Document, Schema } from 'mongoose'

export interface IAttributeDocument extends Document {
    readonly name: string;
}

export const AttributeSchema = new Schema({
    name: { type: String, required: true },
}, {
    collection: 'attributes',
    timestamps: true,
});
