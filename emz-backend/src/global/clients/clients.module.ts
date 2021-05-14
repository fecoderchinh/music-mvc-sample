import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { ClientsController } from './clients.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from 'src/auth/jwt.strategy'
import { ShopModule } from '../shop/shop.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ClientSchema } from './schemas/client.schema'
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ClientModel', schema: ClientSchema },
    ]),
    PassportModule,
    JwtModule.registerAsync({
        useFactory: (configService: ConfigService) => ({
            secret: configService.get('jwt_secret_key'),
            signOptions: {
                expiresIn: configService.get('jwt_ttl'),
            },
        }),
        inject: [ConfigService],
    }),
    ShopModule,

  ],
  providers: [
    ClientsService, 
    JwtStrategy
  ],
  controllers: [
    ClientsController, 
  ],
  exports: [ClientsService],
})

export class ClientsModule {}
