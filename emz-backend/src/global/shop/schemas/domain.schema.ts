import * as mongoose from 'mongoose'

export interface DomainDocument extends mongoose.Document {
    readonly domainName: string;
    readonly isInternal: boolean;
    readonly createdAt: Date;
}

export const DomainSchema = new mongoose.Schema({
    domainName: { type: String, required: true },
    isInternal: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
}, {
    collection: 'domains'
});