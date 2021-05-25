import { Module } from '@nestjs/common';
import { ShopService } from 'shared/services/global/shop.service';
import { ShopController } from './shop.controller';
import { DomainService } from 'shared/services/global/domain.service';
import { DomainController } from './domain.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from 'shared/schemas/global/shop.schema';
import { DomainSchema } from 'shared/schemas/global/domain.schema';

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
