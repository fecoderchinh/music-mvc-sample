import { ObjectID } from "mongodb";
import { Injectable, Inject} from '@nestjs/common';
import { CreateCategoryDto } from 'shared/dtos/category/create.category.dto';
import { Model, Connection } from 'mongoose';
import { CategorySchema, CategoryDocument } from 'shared/schemas/category.schema';

@Injectable()
export class CategoryService {

    private categoryModel:Model<CategoryDocument>;

    constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
    ) {
        this.categoryModel = this.connection.model<CategoryDocument>("CategoryModel", CategorySchema);
    }

    async create (userId: string,createCategoryDto: CreateCategoryDto): Promise<CategoryDocument> {
        const categoryData = {
            ...createCategoryDto,
            user: new ObjectID(userId),
        };
        const category = new this.categoryModel(categoryData);

        return await category.save();
    }
}
