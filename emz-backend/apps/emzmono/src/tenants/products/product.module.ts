import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from 'shared/services/product.service';
import { ProductSchema } from 'shared/schemas/product.schema';

@Module({
    imports: [
        // TenancyModule.forFeature([{ name: 'ProductModel', schema: ProductSchema }])
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ProductService
    ],
    exports: []
})
export class ProductModule {}
