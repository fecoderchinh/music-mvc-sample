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
    UsePipes, Put
} from '@nestjs/common';
import {ApiTags, ApiHeader, ApiBearerAuth} from '@nestjs/swagger';
import { TenantHaders } from '@emzmono/common/constances/swagger.constance';
import {JwtAuthGuard} from "@emzmono/auth/jwt-auth.guard";
import {ResponseSuccess} from "@emzmono/common/interfaces/success-response.interface";
import {IResponse} from "@emzmono/common/interfaces/response.interface";
import {CreateMenuDto} from "shared/dtos/tenant/menu/create.menu.dto";
import {MenuService} from "@shared/services/tenant/menu.service";
import {RouteParamPipe} from "@emzmono/common/pipes/route-param.pipe";
import {UpdateMenuDto} from "shared/dtos/tenant/menu/update.menu.dto";
import {MenuResponse} from "@emzmono/tenants/menu/responses/menu.response";
import {ObjectID} from "mongodb";
import {MenusResponse} from "@emzmono/tenants/menu/responses/menus.response";

@ApiTags('menu')
@Controller('menus')
export class MenuController {
    constructor(private readonly menuService: MenuService) {

    }

    @Get()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK)
    async index(): Promise<IResponse> {
        const menus = await this.menuService.getAll();
        return new ResponseSuccess(new MenusResponse(menus));
    }

    @Post()
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK)
    async create(@Req() req, @Body() body: CreateMenuDto): Promise<IResponse> {
        const menu = await this.menuService.create(req.user.id, body);
        return new ResponseSuccess(new MenuResponse(menu, ['menuItems']));
    }

    @UsePipes(RouteParamPipe)
    @Put(':menu_id')
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK)
    async update(@Req() req, @Body() body: UpdateMenuDto): Promise<IResponse> {
        const menu = await this.menuService.update(req, body);
        return new ResponseSuccess(new MenuResponse(menu, ['menuItems']));
    }

    @UsePipes(RouteParamPipe)
    @Get(':menu_id')
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode( HttpStatus.OK)
    async show(@Param('menu_id') menuId: ObjectID): Promise<IResponse> {
        const menu = await this.menuService.getDetail(menuId);
        return new ResponseSuccess(new MenuResponse(menu));
    }

    @UsePipes(RouteParamPipe)
    @Delete(':menu_id')
    @ApiBearerAuth()
    @ApiHeader(TenantHaders)
    @UseGuards(JwtAuthGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    async destroy(@Param('menu_id') menuId:ObjectID) : Promise<IResponse> {
        await this.menuService.destroy(menuId);
        return new ResponseSuccess({});
    }
}
