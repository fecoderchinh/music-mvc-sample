import {Controller, Post, Body, HttpCode, HttpStatus, Get, UsePipes, Req} from '@nestjs/common';
import { ProductService } from 'shared/services/tenant/product.service';
import { CreateProductDto } from 'shared/dtos/tenant/product/create.product.dto';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import { ProductDocument } from 'shared/schemas/tenant/product.schema';
import { MixinExistStorePipe } from "@emzmono/common/pipes/mixin-exist-store.pipe";
import { MixinExistCategoryPipe } from "@emzmono/common/pipes/mixin-exist-category.pipe";


@ApiTags('products')
@Controller('products')
export class ProductController {

    constructor( private readonly productService: ProductService ){}


    @Post()
    @ApiHeader(TenantHaders)
    @UsePipes(
        MixinExistStorePipe(),
        MixinExistCategoryPipe()
    )
    @HttpCode( HttpStatus.OK )
    async store(@Body() body: CreateProductDto, @Req() request): Promise<ProductDocument>{
        return await this.productService.create(body);
    }


    @Get('shops')
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async getProducts(): Promise<any>{
        return await this.productService.getAllProduct()
    }

}
