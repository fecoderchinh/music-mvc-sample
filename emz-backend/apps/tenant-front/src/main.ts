import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

var { Liquid } = require('liquidjs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,

  );

  var engine = new Liquid({
    root: [
      'views/themes/default',
      'views/themes/default/partials',
      'views/themes/default/components',
      'views/themes/default/pages',
    ],
    extname: '.liquid'
  });
  
  app.useStaticAssets(join(__dirname,  '../../../views/themes/default/public'));
  app.setBaseViewsDir(join(__dirname,  '../../../views/themes/default'));


  app.engine('liquid', engine.express()); 
  app.setViewEngine('liquid');

  await app.listen(8001, () => { console.log('Tenant front is starting localhost:8001') });
  
}


bootstrap();
