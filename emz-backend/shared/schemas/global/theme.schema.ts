import * as mongoose from 'mongoose';
import { THEME_CATEGORY_MODEL } from '../model.constant';

const slug = require('mongoose-slug-updater');
mongoose.plugin( slug );

export interface ThemeDocument extends mongoose.Document{
    readonly id: string;
    readonly themeName: string;
    readonly themeSlug: string;
    readonly shortDescription: string;
    readonly description: string;
    readonly price: number;
    readonly salePrice: number;
    readonly themePath: string;
    readonly thumbnail: string;
}

const ThemeStyleSchema = new mongoose.Schema({
    styleName: { type: String, required: true },
    color: { type: String, required: true },
})

export const ThemeSchema = new mongoose.Schema({
    themeName: { type: String, required: true },
    themeSlug: { 
        type: String, 
        required: true, 
        slug: 'themeName', 
        unique: true,
        slugOn:{ 
            save: true, 
            update: false, 
            updateOne: false, 
            updateMany: false, 
            findOneAndUpdate: false 
        }
    },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    salePrice: { type: Number, required: true, default: 0 },
    themePath: { type: String, required: true },
    thumbnail: { type: String, required: true },
    styles: [ThemeStyleSchema],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: THEME_CATEGORY_MODEL
    },
}, { collection: 'themes' })