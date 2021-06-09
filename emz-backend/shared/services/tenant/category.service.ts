import { ObjectID } from "mongodb";
import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import { CreateCategoryDto } from 'shared/dtos/tenant/category/create.category.dto';
import { Model, Connection } from 'mongoose';
import {CategorySchema, ICategoryDocument, ICategoryPaginator} from 'shared/schemas/tenant/category.schema';
import { Paginator } from 'shared/paginator';
import {CategoryAggregation} from "../../aggregation/category.aggregation";

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
            publishSchedule: createCategoryDto?.isPublished ? null : createCategoryDto?.publishSchedule,
        };
        const category = new this.categoryModel(categoryData);

        return await category.save();
    }

    /**
     * Get list a category
     *
     * @param queryParams
     */
    async getList(queryParams): Promise<ICategoryPaginator| ICategoryDocument[]> {
        const builderOptions = (new CategoryAggregation(queryParams)).build();
        const query = this.categoryModel.find(...builderOptions);

        if (Number(queryParams.limit) === 0) {
            return await query.exec();
        }

        const paginator = new Paginator(queryParams);
        const options = paginator.getOptionQueryString();

        const countPromise = this.categoryModel.countDocuments(...builderOptions).exec();
        const docsPromise = query.skip(options.offset)
            .limit(options.limit)
            .exec();
        const [total, docs] = await Promise.all([countPromise, docsPromise]);

        return paginator.buildResponse(total, docs);
    }

    async getDetail(id: ObjectID): Promise<ICategoryDocument> {
        const category:ICategoryDocument = await this.categoryModel.findById(id);

        if (!category) {
            throw new NotFoundException();
        }

        return category;
    }

    async destroy(id: ObjectID): Promise<void> {
        const category = await this.categoryModel.findById(id);

        if (!category) {
            throw new NotFoundException();
        }

        await category.deleteOne();
    }
}
