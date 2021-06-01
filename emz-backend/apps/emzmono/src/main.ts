import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe, UnprocessableEntityException, HttpStatus } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import {useContainer, Validator} from "class-validator";

// enable debug mongosee
mongoose.set('debug', process.env.MONGODB_DEBUG);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Emz API')
    .setVersion('v1')
    .setDescription('')
    .setVersion('1.0')
    .addTag('emz')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
      new ValidationPipe({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
          exceptionFactory: (errors) =>
              new UnprocessableEntityException(errors),
      }),
  );
  app.enableCors();

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3000, () => {
    console.log("API is starting localhost:3000")
  });

}
bootstrap();
