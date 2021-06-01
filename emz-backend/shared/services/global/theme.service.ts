
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { THEME_MODEL } from 'shared/schemas/model.constant';
import { ThemeDocument } from 'shared/schemas/global/theme.schema';

@Injectable()
export class ThemeService {
    constructor(
        @InjectModel( THEME_MODEL ) private themeModel: Model<ThemeDocument>,
    ){
    }
}