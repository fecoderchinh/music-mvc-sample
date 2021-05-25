import * as mongoose from 'mongoose';

export interface ClientInterface extends mongoose.Document {
    readonly fullName: string;
    readonly phone: string;
    readonly password: string;
    readonly email: string;
    readonly avatar: string;
    readonly createdAt: Date;
}

export const ClientSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    password: String,
    email: String,
    avatar: String,
},{
    collection: 'clients',
    timestamps: true,
});

/* statics */

ClientSchema.statics.findByPhone = function(phone){
    return this.find({ phone: phone });
}

/* Viturals */
