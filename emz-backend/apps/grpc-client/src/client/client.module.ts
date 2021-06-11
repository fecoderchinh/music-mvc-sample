import { Module } from '@nestjs/common';
import {ShopService} from "@shared/services/global/shop.service";
import {MongooseModule} from "@nestjs/mongoose";
import {CLIENT_MODEL} from "shared/schemas/model.constant";
import {ClientSchema} from "shared/schemas/global/client.schema";
import {ClientController} from "./client.controller";
import {ClientService} from "@shared/services/global/client.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CLIENT_MODEL , schema: ClientSchema },
    ])
  ],
  providers: [
    ClientService,
  ],
  controllers: [ClientController],
})
export class ClientModule {}
