import { NestFactory } from '@nestjs/core';
import { TenantFrontModule } from './tenant-front.module';

async function bootstrap() {
  const app = await NestFactory.create(TenantFrontModule);
  await app.listen(3000);
}
bootstrap();
