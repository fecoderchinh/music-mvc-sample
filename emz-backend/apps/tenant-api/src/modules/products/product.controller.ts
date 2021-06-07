import {Controller, Post, Body, HttpCode, HttpStatus, Get, UsePipes, Req, UseGuards} from '@nestjs/common';
import { ProductService } from 'shared/services/tenant/product.service';
import { CreateProductDto } from 'shared/dtos/tenant/product/create.product.dto';
import {ApiTags, ApiHeader, ApiBearerAuth} from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import { IProductDocument } from 'shared/schemas/tenant/product.schema';
import { MixinExistStorePipe } from "@emzmono/common/pipes/mixin-exist-store.pipe";
import { MixinExistCategoryPipe } from "@emzmono/common/pipes/mixin-exist-category.pipe";
import { ValidationVariantPipe } from "@emzmono/common/pipes/validation-variant.pipe";
import {JwtAuthGuard} from "@emzmono/auth/jwt-auth.guard";
import {PaginatorResponse} from "@emzmono/common/responses/paginator.response";
import {ProductPaginatorResponse} from "./responses/product-paginator.response";


@ApiTags('products')
@Controller('products')
export class ProductController {

    constructor( private readonly productService: ProductService ) {}

    @Post()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @UsePipes(
        MixinExistStorePipe(),
        MixinExistCategoryPipe(),
        ValidationVariantPipe
    )
    @HttpCode( HttpStatus.OK )
    async store(@Body() body: CreateProductDto, @Req() request): Promise<IProductDocument>{
        return await this.productService.create(request.user.id, body);
    }


    @Get()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK )
    async index(@Req() request): Promise<PaginatorResponse>{
        const result = await this.productService.getList(request.query);
        console.log('result', result);
        return new PaginatorResponse(new ProductPaginatorResponse(result));
    }

}
