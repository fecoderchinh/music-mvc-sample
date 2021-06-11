import { Module } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import { ProductController } from './product.controller';
import { ProductService } from 'shared/services/tenant/product.service';
import {StoreService} from "@shared/services/tenant/store.service";
import {CategoryService} from "@shared/services/tenant/category.service";
import {ClientGRpcServices} from "../../grpc/client-grpc.services";
import {ClientProxyFactory} from "@nestjs/microservices";

@Module({
    imports: [],
    controllers: [
        ProductController
    ],
    providers: [
        ProductService,
        StoreService,
        CategoryService,
        {
            provide: 'CLIENT_GRPC_PROXY',
            useFactory: (configService: ConfigService) => {
                const config = configService.get('clientService');
                return ClientProxyFactory.create(config);
            },
            inject: [ConfigService],
        },
        ClientGRpcServices,
    ],
    exports: []
})
export class ProductModule {}
