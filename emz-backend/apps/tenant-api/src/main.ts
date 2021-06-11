import { NestFactory } from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import { TenantApiModule } from './tenant-api.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from "mongoose";
import {HttpExceptionFilter} from "@emzmono/common/filters/http-exception.filter";
import {HttpStatus, UnprocessableEntityException, ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(TenantApiModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        exceptionFactory: (errors) =>
            new UnprocessableEntityException(errors),
      }),
  );

  const config = new DocumentBuilder()
    .setTitle('Emz Tenant API')
    .setVersion('v1')
    .setDescription('')
    .setVersion('1.0')
    .addTag('emz')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  const configService = app.get(ConfigService);
  const port = configService.get('port');
  await app.listen(port, () => {
    console.log("Tenant API is starting localhost:" + port);
    mongoose.set('debug', process.env.MONGODB_DEBUG);
  });

}
bootstrap();
