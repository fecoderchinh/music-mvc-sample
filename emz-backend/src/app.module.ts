import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule } from './global/clients/clients.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './auth/jwt.strategy';
import { ShopModule } from './global/shop/shop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { ProductModule } from './tenants/products/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config';
import { TenancyConnectionModule } from './tenancy.module';


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
    
    TenancyConnectionModule,

    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
    // Global modules
    ClientsModule,
    ShopModule,
    // Tenant modules
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    JwtStrategy
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
