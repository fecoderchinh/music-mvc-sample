import * as mongoose from 'mongoose';
import { THEME_CATEGORY_MODEL } from '../model.constant';
import { ThemeCategoryDocument } from './theme-category.schema';

export interface IThemeStyle{
    styleName: String,
    color: String
}

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
    readonly styles: IThemeStyle[];
    readonly category: ThemeCategoryDocument;
}

export const ThemeSchema = new mongoose.Schema({
    themeName: { type: String, required: true },
    themeSlug: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    salePrice: { type: Number, required: true, default: 0 },
    themePath: { type: String, required: true },
    thumbnail: { type: String, required: true },
    styles: [{
        styleName: String,
        color: String
    }],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: THEME_CATEGORY_MODEL
    },
}, { collection: 'themes' })