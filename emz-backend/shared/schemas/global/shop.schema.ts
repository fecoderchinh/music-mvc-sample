import * as mongoose from 'mongoose'
import { DomainDocument } from './domain.schema';

export interface ShopDocument extends Document {
    readonly shop: {
        name: string,
        phone1: string,
        phone2: string,
        address: string,
        city: string,
        district: string,
        ward: string
    }

    readonly website: {
        name: string,
        email: string,
        keywords: string,
        description: string,
        ownerName: string,
    }

    readonly tracking: {
        headerScript: string,
        bodyScript: string,
        footerScript: string
    }

    readonly info: {
        term: string,
        condition: string,
        refun: string,
    }

    readonly setting: {
        hiddenProductOutOfStock: boolean,
        notifyComment: boolean,
        saveOrderShipped: boolean
    }

    readonly user: string;
    readonly tenantUid: string;
    readonly domains: DomainDocument[];
    readonly createdAt: Date;
}


export const ShopSchema = new mongoose.Schema({
    website: {
        name: String,
        email: { type: String, required: true },
        keywords: String,
        description: String,
        ownerName: { type: String, required: true },
    },
    shop: {
        name: { type: String, required: true },
        phone1: String,
        phone2: String,
        address: String,
        city: String,
        district: String,
        ward: String
    },

    tracking: {
        headerScript: String,
        bodyScript: String,
        footerScript: String
    },

    info: {
        term: String,
        condition: String,
        refun: String,
    },

    setting: {
        hiddenProductOutOfStock: Boolean,
        notifyComment: Boolean,
        saveOrderShipped: Boolean
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClientModel',
        required: true
    },

    domains: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DomainModel',
        required: true
    }],

    tenantUid: {
        type: String,
        required: true
    }

},{
    collection: 'shops',
    timestamps: true,
});

/* statics */


/* Viturals */
