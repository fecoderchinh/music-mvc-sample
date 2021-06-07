import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "@emzmono/config";
import {ShopModule} from "./shop/shop.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      useFactory: async (cfs: ConfigService) => await cfs.get('database'),
      inject: [ConfigService],
    }),
    ShopModule,
  ],
  controllers: [],
  providers: [],
})
export class GrpcModule {}
