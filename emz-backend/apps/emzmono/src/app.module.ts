import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './global/clients/clients.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { ShopModule } from './global/shop/shop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductModule } from './tenants/products/product.module';
import { CategoryModule } from "./tenants/category/category.module";
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config';
import { TenancyConnectionModule } from './tenancy.module';
import {JoiPipeModule} from "nestjs-joi";
import {APP_PIPE} from "@nestjs/core";
import {JoiPipe} from "@emzmono/common/pipes/joi.pipe";
import {MenuModule} from "@emzmono/tenants/menu/menu.module";


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

    // Global modules
    ClientsModule,
    ShopModule,
    // Tenant modules
    ProductModule,
    CategoryModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [
    JwtStrategy,
    {
        provide: APP_PIPE,
        useClass: JoiPipe,
    },
  ],
  exports: [
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
