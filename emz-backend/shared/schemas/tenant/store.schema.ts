import * as mongoose from 'mongoose'

export interface StoreDocument extends mongoose.Document {
    readonly addressTitle: String;
    readonly phone: String;
    readonly email: String;
    readonly address: String;
    readonly country: String;
    readonly city: String;
    readonly district: String;
    readonly province: String;
    readonly ward: String;
    readonly isShippingAddress: Boolean;
    readonly isDefault: Boolean;
}

export const StoreSchema = new mongoose.Schema({
    addressTitle: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    province: { type: String, required: true },
    ward: { type: String, required: true },
    isShippingAddress: { type: Boolean, default: false },
    isDefault: { type: Boolean, default: false },
}, {
    collection: 'stores'
});