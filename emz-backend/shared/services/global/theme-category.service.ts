
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { THEME_CATEGORY_MODEL } from 'shared/schemas/model.constant';
import { ThemeCategoryDocument } from 'shared/schemas/global/theme-category.schema';

@Injectable()
export class ThemeCategoryService {
    constructor(
        @InjectModel( THEME_CATEGORY_MODEL ) private themeCategoryModel: Model<ThemeCategoryDocument>,
    ){
  
    }
}