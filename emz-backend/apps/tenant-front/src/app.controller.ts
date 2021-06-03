import { Controller, Get, HttpService, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    
  ) {}

  @Get()
  @Render('index')
  async index(): Promise<any> {
    
    return { title: 'This is home page!' };
  }

  @Get('/about')
  @Render('pages/about')
  about() {
    return { title: 'This is about' };
  }

  @Get('/search')
  @Render('pages/search')
  search() {
    return { title: 'This is search' };
  }

  @Get('/categories')
  @Render('pages/categories')
  categories() {
    return { title: 'This is categories' };
  }

  @Get('/notify')
  @Render('pages/notify')
  notify() {
    return { title: 'This is notify' };
  }

  @Get('/product')
  @Render('pages/product')
  product() {
    return { title: 'This is product' };
  }

  @Get('/blogs')
  @Render('pages/blogs')
  blogs() {
    return { title: 'This is blog list' };
  }

  @Get('/blog')
  @Render('pages/blog')
  blog() {
    return { title: 'This is blog' };
  }

  @Get('/cart')
  @Render('pages/cart')
  cart() {
    return { title: 'This is cart' };
  }

  @Get('/account')
  @Render('pages/account')
  account() {
    return { title: 'This is account' };
  }

  @Get('/checkout')
  @Render('pages/checkout')
  checkout() {
    return { title: 'This is checkout' };
  }

  @Get('/proceed')
  @Render('pages/proceed')
  proceed() {
    return { title: 'This is proceed' };
  }
}
