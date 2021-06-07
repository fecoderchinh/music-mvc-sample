import { NestFactory } from '@nestjs/core';
import { GrpcModule } from './grpc.module';
import { Transport } from "@nestjs/microservices";
import { join } from 'path';
import * as mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(GrpcModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.SHOP_SERVICE_URL,
      package: 'shop',
      protoPath: join(__dirname, './_proto/shop.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true
      }
    }
  });

  await app.listen(() => {
    console.log('Connect gRPC server ' + process.env.SHOP_SERVICE_URL);
    mongoose.set('debug', process.env.MONGODB_DEBUG);
  })
}
bootstrap();
