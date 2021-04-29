import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './tenants/products/product.module';
import { ClientsModule } from './global/clients/clients.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './auth/jwt.strategy';
import { ShopModule } from './global/shop/shop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TenancyConnectionModule } from './tenant-connection.module';
import { TenancyMongoConnectionModule } from './tenancy/tenancy.module';
import { REQUEST } from '@nestjs/core';
import { TenancyConnectionConfigService } from './tenancy/tenancy.service';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/emz',{
      connectionName: 'emz_connection',
    }),

    // MongooseModule.forRootAsync({
    //   useClass: TenancyConnectionConfigService,
    // }),
    
    // MongooseModule.forRootAsync({
    //   imports: [],
    //   useFactory: async (request) => ({
    //     connectionName: "tenant_connection",
    //     uri: 'mongodb://localhost:27017/' + request.headers['x-tenant-id']
    //   }),
    //   inject: [REQUEST],
    // }),

    // TenancyMongoConnectionModule,
  
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30d' },
    }),
    ProductModule,
    ClientsModule,
    ShopModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy
  ],
  exports: [
  ],
})
export class AppModule {}
