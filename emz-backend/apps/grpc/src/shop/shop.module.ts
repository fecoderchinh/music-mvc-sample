import { Module } from '@nestjs/common';
import {ShopService} from "@shared/services/global/shop.service";
import {MongooseModule} from "@nestjs/mongoose";
import {ShopController} from "./shop.controller";
import {DOMAIN_MODEL, SHOP_MODEL} from "shared/schemas/model.constant";
import {ShopSchema} from "shared/schemas/global/shop.schema";
import {DomainSchema} from "shared/schemas/global/domain.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SHOP_MODEL , schema: ShopSchema },
      { name: DOMAIN_MODEL, schema: DomainSchema }
    ])
  ],
  providers: [
    ShopService,
  ],
  controllers: [ShopController],
})
export class ShopModule {}
