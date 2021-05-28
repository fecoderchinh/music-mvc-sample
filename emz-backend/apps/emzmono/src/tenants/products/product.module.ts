import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from 'shared/services/tenant/product.service';

@Module({
    imports: [],
    controllers: [
        ProductController
    ],
    providers: [
        ProductService
    ],
    exports: []
})
export class ProductModule {}
