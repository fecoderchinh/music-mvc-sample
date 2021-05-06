import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductSchema } from './schemas/product.schema';

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
