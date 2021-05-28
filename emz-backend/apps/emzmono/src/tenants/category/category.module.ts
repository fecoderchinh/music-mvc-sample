import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from 'shared/services/tenant/category.service';

@Module({
    controllers: [
        CategoryController
    ],
    providers: [
        CategoryService
    ],
    exports: []
})
export class CategoryModule {}
