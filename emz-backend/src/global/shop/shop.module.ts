import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { DomainService } from './domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';
import { DomainSchema } from './schemas/domain.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ShopModel', schema: ShopSchema },
      { name: 'DomainModel', schema: DomainSchema }
    ])
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
