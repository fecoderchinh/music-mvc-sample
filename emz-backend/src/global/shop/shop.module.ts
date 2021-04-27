import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    
  ],
  providers: [
    ShopService,
    DomainService
  ],
  exports: [
    ShopService,
    DomainService
  ],
  controllers: [
    ShopController,
    DomainController
  ]
})
export class ShopModule {}
