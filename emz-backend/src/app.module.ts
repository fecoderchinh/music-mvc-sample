import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './tenants/products/product.module';
import { TenancyConnectionModule } from './tenant-connection.module';
import { ClientsModule } from './global/clients/clients.module';
import { GlobalConnectionModule } from './global-connection.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { JwtStrategy } from './auth/jwt.strategy';
import { ShopModule } from './global/shop/shop.module';
import { ShopService } from './global/shop/shop.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/emz',{
      connectionName: 'emz_connection',
    }),
    TenancyConnectionModule,
    GlobalConnectionModule,
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
