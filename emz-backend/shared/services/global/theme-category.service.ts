
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { THEME_CATEGORY_MODEL } from 'shared/schemas/model.constant';
import { ThemeCategoryDocument } from 'shared/schemas/global/theme-category.schema';
import { CreateThemeCategoryDto } from 'shared/dtos/global/theme-category/create-theme-category.dto';

@Injectable()
export class ThemeCategoryService {
    constructor(
        @InjectModel( THEME_CATEGORY_MODEL ) private themeCategoryModel: Model<ThemeCategoryDocument>,
    ){}


    async create( dto : CreateThemeCategoryDto ): Promise<ThemeCategoryDocument>{
        const document = new this.themeCategoryModel(dto);
        return await document.save();
    } 

    async findOneBySlug( slug: string ): Promise<ThemeCategoryDocument>{
        return await this.themeCategoryModel.findOne({ categorySlug: slug }).exec();
    } 

    async getAll(): Promise<ThemeCategoryDocument[]>{
        return await this.themeCategoryModel.find({}).exec();
    }

    async getByid(id: string): Promise<ThemeCategoryDocument>{
        return await this.themeCategoryModel.findById(id).exec();
    }

    async update(id: string, dto : CreateThemeCategoryDto): Promise<ThemeCategoryDocument>{
        return await this.themeCategoryModel.findByIdAndUpdate(id, dto ).exec();
    }

    async delete(id: string): Promise<any>{
        return await this.themeCategoryModel.findByIdAndDelete(id).exec();
    }
    
}