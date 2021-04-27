import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { ApiTags, ApiHeader } from '@nestjs/swagger';
import { TenantHaders } from 'src/common/constances/swagger.constance';


@ApiTags('product')
@Controller('product')
export class ProductController {

    constructor( private readonly productService: ProductService ){}


    @Post('create-product')
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async createProduct(@Body() body: CreateProductDto ): Promise<ProductEntity>{
        return await this.productService.createproduct(body)
    }

}
