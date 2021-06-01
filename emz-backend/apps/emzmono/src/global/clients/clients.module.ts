import { Module } from '@nestjs/common'
import { ClientService } from 'shared/services/global/client.service'
import { ClientsController } from './clients.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '@emzmono/auth/jwt.strategy'
import { ShopModule } from '../shop/shop.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ClientSchema } from 'shared/schemas/global/client.schema'
import { ConfigService } from '@nestjs/config';
import { CLIENT_MODEL } from 'shared/schemas/model.constant'


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CLIENT_MODEL , schema: ClientSchema },
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
    ClientService,
    JwtStrategy
  ],
  controllers: [
    ClientsController,
  ],
  exports: [ClientService],
})

export class ClientsModule {}
