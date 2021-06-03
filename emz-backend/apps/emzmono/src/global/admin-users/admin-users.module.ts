import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminUserSchema } from './schemas/admin-user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'AdminUser', schema: AdminUserSchema }]),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
          secret: configService.get('jwt_secret_key'),
          signOptions: {
              expiresIn: configService.get('jwt_ttl'),
          },
      }),
      inject: [ConfigService],
  }),
  ],
  controllers: [AdminUsersController],
  providers: [
    AdminUsersService 
  ],
  exports: [
    AdminUsersService
  ]
})
export class AdminUsersModule {}
