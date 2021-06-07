import { NestFactory } from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import { TenantApiModule } from './tenant-api.module';
import * as mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.create(TenantApiModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  await app.listen(port, () => {
    console.log("Tenant API is starting localhost:" + port);
    mongoose.set('debug', process.env.MONGODB_DEBUG);
  });

}
bootstrap();
