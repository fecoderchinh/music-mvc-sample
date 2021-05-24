import {Controller, Post, Body, HttpCode, HttpStatus, Get, Req, UseGuards, UsePipes} from '@nestjs/common';
import { CategoryService } from 'shared/services/category.service';
import { CreateCategoryDto } from 'shared/dtos/category/create.category.dto';
import {ApiTags, ApiHeader, ApiBearerAuth} from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import {JwtAuthGuard} from "@emzmono/auth/jwt-auth.guard";
import {ResponseSuccess} from "@emzmono/common/interfaces/success-response.interface";
import {CategoryResponse} from "./responses/category.response";
import {IResponse} from "@emzmono/common/interfaces/response.interface";

@ApiTags('category')
@Controller('categories')
export class CategoryController {
    constructor( private readonly categoryService: CategoryService ){}

    @Post()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK )
    async create(@Req() req, @Body() body: CreateCategoryDto): Promise<IResponse> {
        const category = await this.categoryService.create(req.user.id, body);
        return new ResponseSuccess(new CategoryResponse(category));
    }
}
