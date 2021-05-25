import { ObjectID } from "mongodb";
import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import { CreateCategoryDto } from 'shared/dtos/tenant/category/create.category.dto';
import { Model, Connection } from 'mongoose';
import { Request } from 'express';
import {CategorySchema, ICategoryDocument, ICategoryPaginator} from 'shared/schemas/tenant/category.schema';
import { Paginator } from 'shared/paginator';
import { CategoryCriteria } from "shared/criteria/category.criteria";

@Injectable()
export class CategoryService {

    private categoryModel:Model<ICategoryDocument>;

    constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
    ) {
        this.categoryModel = this.connection.model<ICategoryDocument>("CategoryModel", CategorySchema);
    }

    /**
     * Create a category
     *
     * @param userId
     * @param createCategoryDto
     */
    async create (userId: string, createCategoryDto: CreateCategoryDto): Promise<ICategoryDocument> {
        const categoryData = {
            ...createCategoryDto,
            user: new ObjectID(userId),
        };
        const category = new this.categoryModel(categoryData);

        return await category.save();
    }

    /**
     * Get list a category
     *
     * @param request
     */
    async getList(request: Request): Promise<ICategoryPaginator> {
        const paginator = new Paginator(request);
        const options = paginator.getOptionQueryString();
        const builderOptions = (new CategoryCriteria(request.query)).handle();
        const countPromise = this.categoryModel.countDocuments(...builderOptions).exec();
        const docsPromise = this.categoryModel.find(...builderOptions)
            .skip(options.offset)
            .limit(options.limit)
            .exec();
        const [total, docs] = await Promise.all([countPromise, docsPromise]);

        return paginator.buildResponse(total, docs);
    }

    async destroy(id: ObjectID): Promise<void> {
        const category = await this.categoryModel.findById(id);

        if (!category) {
            throw new NotFoundException();
        }

        await category.deleteOne();
    }
}
