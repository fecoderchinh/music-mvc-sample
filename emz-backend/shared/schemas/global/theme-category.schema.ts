import * as mongoose from 'mongoose';

export interface ThemeCategoryDocument extends mongoose.Document{
    readonly id: string;
    readonly CategoryName: string;
    readonly CategorySlug: string;
    readonly thumbnail: string;
}

export const ThemeCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    categorySlug: { type: String, required: true },
    thumbnail: { type: String, required: true }
}, { collection: 'theme-category' })