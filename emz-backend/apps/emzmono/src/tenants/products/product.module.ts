import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from 'shared/services/tenant/product.service';
import {StoreService} from "@shared/services/tenant/store.service";
import {CategoryService} from "@shared/services/tenant/category.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CLIENT_MODEL} from "../../../../../shared/schemas/model.constant";
import {ClientSchema} from "../../../../../shared/schemas/global/client.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CLIENT_MODEL , schema: ClientSchema },
        ]),
    ],
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
