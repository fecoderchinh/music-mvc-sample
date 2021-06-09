import { Module } from '@nestjs/common';
import {ClientModule} from "./client/client.module";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configuration from "@emzmono/config";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      useFactory: async (cfs: ConfigService) => await cfs.get('database'),
      inject: [ConfigService],
    }),
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class GRpcClientModule {}
