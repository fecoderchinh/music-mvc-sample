import { Module } from '@nestjs/common';
import { ShopService } from 'shared/services/global/shop.service';
import { ShopController } from './shop.controller';
import { DomainService } from 'shared/services/global/domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from 'shared/schemas/global/shop.schema';
import { DomainSchema } from 'shared/schemas/global/domain.schema';
import { DOMAIN_MODEL, SHOP_MODEL } from 'shared/schemas/model.constant';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SHOP_MODEL , schema: ShopSchema },
      { name: DOMAIN_MODEL, schema: DomainSchema }
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
