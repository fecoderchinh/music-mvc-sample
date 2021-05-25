import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Get,
    Req,
    UseGuards,
    Delete,
    Param,
    UsePipes
} from '@nestjs/common';
import { CategoryService } from 'shared/services/tenant/category.service';
import { CreateCategoryDto } from 'shared/dtos/tenant/category/create.category.dto';
import {ApiTags, ApiHeader, ApiBearerAuth} from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import {JwtAuthGuard} from "@emzmono/auth/jwt-auth.guard";
import {ResponseSuccess} from "@emzmono/common/interfaces/success-response.interface";
import {CategoryResponse} from "./responses/category.response";
import {IResponse} from "@emzmono/common/interfaces/response.interface";
import { IPaginatorResponse } from "shared/paginator";
import { PaginatorResponse } from "@emzmono/common/responses/paginator.response";
import { ObjectID } from "mongodb";
import {CategoryPaginatorResponse} from "@emzmono/tenants/category/responses/category-paginator.response";
import {RouteParamPipe} from "@emzmono/common/pipes/route-param.pipe";

@ApiTags('category')
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {

    }

    @Post()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK )
    async create(@Req() req, @Body() body: CreateCategoryDto): Promise<IResponse> {
        const category = await this.categoryService.create(req.user.id, body);
        return new ResponseSuccess(new CategoryResponse(category));
    }

    @Get()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async index(@Req() request) : Promise<IPaginatorResponse> {
        const result = await this.categoryService.getList(request);

        return new PaginatorResponse(new CategoryPaginatorResponse(result));
    }

    @UsePipes(RouteParamPipe)
    @Delete(':id')
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('id') id:ObjectID) : Promise<IResponse> {
        await this.categoryService.destroy(id);
        return new ResponseSuccess({});
    }
}
