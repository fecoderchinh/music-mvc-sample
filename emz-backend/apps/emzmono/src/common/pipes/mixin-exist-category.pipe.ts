import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    Inject,
    Scope,
    mixin,
    Type, forwardRef, UnprocessableEntityException
} from '@nestjs/common';
import { ObjectID } from "mongodb";
import { CategoryService } from "shared/services/tenant/category.service";
import { REQUEST } from "@nestjs/core";

export function MixinExistCategoryPipe(): Type<PipeTransform> {
    @Injectable({ scope: Scope.REQUEST })
    class ExistCategoryPipe implements PipeTransform {
        constructor(
            @Inject(forwardRef(() => CategoryService)) private categoryService: CategoryService,
            @Inject(REQUEST) private request?: any,
        ) {

        }

        async transform(value: any, metadata: ArgumentMetadata) {
            const errors = [];

            const categoriesDto = value.categories || [];

            if (categoriesDto.length) {
                const categoryIdsDto = [];
                categoriesDto.forEach(categoryId => {
                    categoryIdsDto.push(new ObjectID(categoryId));
                });
                const categories = await this.categoryService.getList({ limit: 0, ids: categoryIdsDto }) as any;
                const categoryIds = categories.map(store => store._id.toString());

                categoryIdsDto.forEach((categoryId, index) => {
                    if (! categoryIds.includes(categoryId.toString())) {
                        errors.push({[`categories.${index}`] : 'Danh mục không tồn tại.'})
                    }
                });

                if (errors.length) {
                    throw new UnprocessableEntityException({ errors });
                }

                this.request.categories = categories;
            }

            return value;
        }
    }

    return mixin(ExistCategoryPipe);
}


