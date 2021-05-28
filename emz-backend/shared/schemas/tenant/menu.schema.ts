import {Document, ObjectId, Schema} from 'mongoose'
import {ACTIVATE} from "shared/enums/menu.enum";

export interface IMenuItemDocument extends Document {
    user: ObjectId;
    menuId: ObjectId;
    name: string;
    typeable: string;
    value: string;
    link: string;
    position: number;
    left: number;
    right: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IMenuDocument extends Document {
    user?: ObjectId;
    templateId?: ObjectId;
    name: string
    alias?: string;
    position: string;
    status: boolean;
    menuItems?: IMenuItemDocument[];
    createdAt: Date;
    updatedAt: Date;
}

export const MenuSchema = new Schema<IMenuDocument>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'ClientModel',
        required: true
    },
    templateId: {
        type: Schema.Types.ObjectId,
        // ref: 'ClientModel',
        // required: true
    },
    name: { type: String, required: true },
    alias: String,
    position: String,
    status: {
        type: Boolean,
        required: true,
        default: ACTIVATE,
    }
},{
    collection: 'menus',
    timestamps: true,
});

export const MenuItemSchema = new Schema<IMenuItemDocument>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'ClientModel',
        required: true
    },
    menuId: { required: true, type: Schema.Types.ObjectId },
    name: { type: String, require: true },
    typeable: { type: String, required: true },
    value: { type: String, required:true },
    link: String,
    left: { type: Number, required: true},
    right: { type: Number, required: true},
    depth: { type: Number, required: true},
    position: Number,
},{
    collection: 'menu_items',
    timestamps: true,
});
