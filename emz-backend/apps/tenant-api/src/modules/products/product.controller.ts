import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Get,
    UsePipes,
    Req,
    UseGuards,
    Query,
    Param, Put
} from '@nestjs/common';
import { ProductService } from 'shared/services/tenant/product.service';
import {ApiTags, ApiHeader, ApiBearerAuth} from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import { MixinExistStorePipe } from "@emzmono/common/pipes/mixin-exist-store.pipe";
import { MixinExistCategoryPipe } from "@emzmono/common/pipes/mixin-exist-category.pipe";
import { ValidationVariantPipe } from "@emzmono/common/pipes/validation-variant.pipe";
import {JwtAuthGuard} from "@emzmono/auth/jwt-auth.guard";
import {PaginatorResponse} from "@emzmono/common/responses/paginator.response";
import {ProductPaginatorResponse} from "./responses/product-paginator.response";
import {ClientGRpcServices} from "../../grpc/client-grpc.services";
import {ProductConditionDto} from "shared/dtos/tenant/product/product-condition.dto";
import {ObjectID} from "mongodb";
import {RouteParamPipe} from "@emzmono/common/pipes/route-param.pipe";
import {ResponseSuccess} from "@emzmono/common/interfaces/success-response.interface";
import {ProductResponse} from "./responses/product.response";
import {ProductDto} from "shared/dtos/tenant/product/product.dto";
import {CategoryService} from "@shared/services/tenant/category.service";
import {StoreService} from "@shared/services/tenant/store.service";


@ApiTags('products')
@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly categoryService: CategoryService,
                private readonly storeService: StoreService,
                private readonly clientGRpcServices: ClientGRpcServices
    ) {

    }

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
    async store(@Body() body: ProductDto, @Req() request): Promise<ResponseSuccess>{
        const product = await this.productService.create(request.user.id, body);
        return new ResponseSuccess(new ProductResponse(product));
    }

    @Get()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async index(@Req() request): Promise<PaginatorResponse>{
        const result = await this.productService.getList(request.query);
        const userIds = [];
        let categoryIds = [], storeIds = [];
        const { items } = result;

        items.forEach(product => {
            userIds.push(product.user.toString());
            categoryIds.push(...product.categories.map(category => category.toString()));
            const attributes = product.attributes || [];

            const inventories = attributes.length ? product.variants[0].inventories : product.inventories;
            inventories.forEach(inventory => {
                storeIds.push(inventory.store);
            });
        });

        const includes = request.query.includes || '';
        const pieceIncludes = includes.split(',');
        let users = [], categories = [], stories = [];

        if (pieceIncludes.indexOf('user') !== -1) {
            const usersResponse = await this.clientGRpcServices.getList({ ids: [...new Set(userIds)] }) as any;
            users = usersResponse.items || [];
        }

        if (pieceIncludes.indexOf('categories') !== -1) {
            categoryIds = [...new Set(categoryIds)];
            const categoriesResponse = await this.categoryService.getList({ ids: categoryIds, limit: categoryIds.length }) as any;
            categories = categoriesResponse.items || [];
        }

        if (pieceIncludes.indexOf('store') !== -1) {
            storeIds = [...new Set(storeIds.map(storeId => storeId.toString()))];
            stories = await this.storeService.getList({ ids: storeIds }) as any;
        }

        return new PaginatorResponse(new ProductPaginatorResponse(result, {users, categories, stories}));
    }

    @Get('search-conditions')
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async search(@Req() request, @Query() productConditionDto: ProductConditionDto): Promise<PaginatorResponse>{
        const result = await this.productService.getByConditions(productConditionDto);
        const userIds = [];
        let storeIds = [];
        const { items } = result;

        items.forEach(product => {
            userIds.push(product.user.toString());
        });

        const includes = request.query.includes || '';
        const pieceIncludes = includes.split(',');
        let users = [], stories = [];

        if (pieceIncludes.indexOf('user') !== -1) {
            const usersResponse = await this.clientGRpcServices.getList({ ids: [...new Set(userIds)] }) as any;
            users = usersResponse.items || [];
        }

        if (pieceIncludes.indexOf('store') !== -1) {
            storeIds = [...new Set(storeIds.map(storeId => storeId.toString()))];
            stories = await this.storeService.getList({ ids: storeIds }) as any;
        }

        return new PaginatorResponse(new ProductPaginatorResponse(result, {users: users, categories: [], stories}));
    }

    @Get(':id')
    @UsePipes(RouteParamPipe)
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.OK)
    async show(@Req() request, @Param('id') id:ObjectID): Promise<ResponseSuccess>{
        const product = await this.productService.getDetail(id, request.query);
        let user = null;
        const userId = product.user.toString();

        const includes = request.query.includes || '';
        const pieceIncludes = includes.split(',');

        if (pieceIncludes.indexOf('user') !== -1) {
            const userResponse = await this.clientGRpcServices.getList({ ids: [userId] }) as any;
            user = userResponse.items && userResponse.items.length ?  userResponse.items[0] : null;
        }

        return new ResponseSuccess(new ProductResponse(product, {user}));
    }

    @Put(':id')
    @UsePipes(RouteParamPipe)
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @UsePipes(
        MixinExistStorePipe(),
        MixinExistCategoryPipe(),
        ValidationVariantPipe
    )
    @HttpCode(HttpStatus.OK)
    async update(@Body() body: ProductDto, @Req() request): Promise<ResponseSuccess>{
        const product = await this.productService.update(request.params.id, body);
        return new ResponseSuccess(new ProductResponse(product));
    }
}
