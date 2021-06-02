import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from 'shared/services/tenant/product.service';
import {StoreService} from "@shared/services/tenant/store.service";
import {CategoryService} from "@shared/services/tenant/category.service";

@Module({
    imports: [],
    controllers: [
        ProductController
    ],
    providers: [
        ProductService,
        StoreService,
        CategoryService,
    ],
    exports: []
})
export class ProductModule {}
