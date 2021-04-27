import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';
// imports
import * as mongoose from 'mongoose';

// somewhere in your code
mongoose.set('debug', true);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ezm API Gateway')
    .setVersion('v1')
    .setDescription('')
    .setVersion('1.0')
    .addTag('emz')
    .addBearerAuth()
    .build()


  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)


  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()

  await app.listen(3000, () => {
    console.log("API is starting localhost: 3000")
  });
  
}
bootstrap();
