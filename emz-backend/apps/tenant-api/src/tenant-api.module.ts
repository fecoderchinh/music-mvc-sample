import { Module } from '@nestjs/common';
import { TenantApiController } from './tenant-api.controller';
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "./config";
import {MongooseModule} from "@nestjs/mongoose";
import {JoiPipeModule} from "nestjs-joi";
import {JwtStrategy} from "@emzmono/auth/jwt.strategy";
import {APP_PIPE} from "@nestjs/core";
import {JoiPipe} from "@emzmono/common/pipes/joi.pipe";
import {TenancyConnectionModule} from "./tenancy.module";
import {ProductModule} from "./modules/products/product.module";
import {MenuModule} from "./modules/menu/menu.module";
import {StoreModule} from "./modules/stores/store.module";
import {CategoryModule} from "./modules/category/category.module";
import {TenantApiService} from "./tenant-api.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // Mongoose default connection
    MongooseModule.forRootAsync({
      useFactory: async (cfs: ConfigService) => await cfs.get('database'),
      inject: [ConfigService],
    }),
    JoiPipeModule,
    TenancyConnectionModule,

    // Tenant modules
    ProductModule,
    CategoryModule,
    MenuModule,
    StoreModule,

  ],
  providers: [
    JwtStrategy,
    {
      provide: APP_PIPE,
      useClass: JoiPipe,
    },
    TenantApiService,
  ],
  exports: [],
  controllers: [TenantApiController],
})
export class TenantApiModule {}
