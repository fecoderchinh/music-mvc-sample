import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configSwagger = new DocumentBuilder()
    .setTitle('Upload API')
    .setDescription('The Upload API description')
    .setVersion('1.0')
    .addTag('skynet')
    .addBearerAuth()
    .build();

  app.enableCors();

  const documentSwagger = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, documentSwagger);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(6000);

}
bootstrap();
