import { NestFactory } from '@nestjs/core';
import {Transport} from "@nestjs/microservices";
import {join} from "path";
import * as mongoose from "mongoose";
import {GRpcClientModule} from "./grpc-client.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(GRpcClientModule, {
    transport: Transport.GRPC,
    options: {
      url: process.env.CLIENT_SERVICE_URL,
      package: 'client',
      protoPath: join(__dirname, './_proto/client.proto'),
      loader: {
        enums: String,
        objects: true,
        arrays: true
      }
    }
  });

  await app.listen(() => {
    console.log('Connect gRPC server ' + process.env.CLIENT_SERVICE_URL);
    mongoose.set('debug', process.env.MONGODB_DEBUG);
  })
}
bootstrap();
