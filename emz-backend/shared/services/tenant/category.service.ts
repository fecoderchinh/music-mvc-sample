import { ObjectID } from "mongodb";
import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import { CategoryDto } from 'shared/dtos/tenant/category/category.dto';
import { Model, Connection } from 'mongoose';
import {CategorySchema, ICategoryDocument, ICategoryPaginator} from 'shared/schemas/tenant/category.schema';
import { Paginator } from 'shared/paginator';
import {CategoryAggregation} from "../../aggregation/category.aggregation";
import {IProductDocument, ProductSchema} from "../../schemas/tenant/product.schema";
import {CATEGORY_MODEL, PRODUCT_MODEL} from "../../schemas/model.constant";
import {ADD_PRODUCT_AUTO} from "../../enums/category.enum";

@Injectable()
export class CategoryService {

    private categoryModel:Model<ICategoryDocument>;
    private productModel:Model<IProductDocument>;

    constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
    ) {
        this.categoryModel = this.connection.model<ICategoryDocument>(CATEGORY_MODEL, CategorySchema);
        this.productModel = this.connection.model<IProductDocument>(PRODUCT_MODEL, ProductSchema);
    }

    /**
     * Create a category
     *
     * @param userId
     * @param createCategoryDto
     */
    async create (userId: string, createCategoryDto: CategoryDto): Promise<ICategoryDocument> {

        const categoryData = {
            ...createCategoryDto,
            user: new ObjectID(userId),
            publishSchedule: createCategoryDto?.isPublished ? null : createCategoryDto?.publishSchedule,
        };
        const categoryModel = new this.categoryModel(categoryData);

        const category = await categoryModel.save();

        if (createCategoryDto.addProductType === ADD_PRODUCT_AUTO) {
            await this.productModel.updateMany({
                _id: {
                    $in: createCategoryDto.products,
                },
            }, {
                $addToSet: {
                    categories: category._id
                }
            });
        }

        return category;
    }

    /**
     * Update a category
     *
     * @param id
     * @param updateCategoryDto
     */
    async update (id: ObjectID, updateCategoryDto: CategoryDto): Promise<ICategoryDocument> {
        const category:ICategoryDocument = await this.categoryModel.findById(id);

        if (!category) {
            throw new NotFoundException();
        }

        const categoryData = {
            ...updateCategoryDto,
            publishSchedule: updateCategoryDto?.isPublished ? null : updateCategoryDto?.publishSchedule,
        };

        const result = await this.categoryModel.findByIdAndUpdate(id, categoryData, { new: true });

        if (updateCategoryDto.addProductType === ADD_PRODUCT_AUTO) {
            await this.productModel.updateMany({
                _id: {
                    $in: updateCategoryDto.products,
                },
            }, {
                $addToSet: {
                    categories: category._id
                }
            });
        }

        return result;
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
