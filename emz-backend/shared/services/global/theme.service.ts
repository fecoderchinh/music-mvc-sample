
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { THEME_MODEL } from 'shared/schemas/model.constant';
import { ThemeDocument } from 'shared/schemas/global/theme.schema';
import { CreateThemeDto } from 'shared/dtos/global/theme/create-theme.dto';
import { UpdateThemeDto } from 'shared/dtos/global/theme/update-theme.dto';

@Injectable()
export class ThemeService {
    constructor(
        @InjectModel( THEME_MODEL ) private themeModel: Model<ThemeDocument>,
    ){
    }

    async create( dto : CreateThemeDto ): Promise<ThemeDocument>{
        const document = new this.themeModel(dto);
        return await document.save();
    } 

    async findOneBySlug( slug: string ): Promise<ThemeDocument>{
        return await this.themeModel.findOne({ categorySlug: slug }).exec();
    } 

    async getAll(): Promise<ThemeDocument[]>{
        return await this.themeModel.find({}).exec();
    }

    async getByid(id: string): Promise<ThemeDocument>{
        return await this.themeModel.findById(id).exec();
    }

    async update(id: string, dto: object): Promise<ThemeDocument>{
        return await this.themeModel.findByIdAndUpdate(id, dto );
    }

    async delete(id: string): Promise<any>{
        return await this.themeModel.findByIdAndDelete(id).exec();
    }
}