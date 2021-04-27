import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { ClientsController } from './clients.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from 'src/auth/constants'
import { JwtStrategy } from 'src/auth/jwt.strategy'
import { ShopModule } from '../shop/shop.module'


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '30d' },
    }),
    ShopModule
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
