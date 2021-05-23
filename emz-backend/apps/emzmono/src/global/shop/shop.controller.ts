import { Controller, Post, HttpCode, UseGuards, HttpStatus, Req, Body, BadRequestException } from '@nestjs/common';
import { ShopService } from 'shared/services/shop.service';
import { CreateShopDto } from 'shared/dtos/shop/create.shop.dto';
import { DomainService } from 'shared/services/domain.service';
import { ApiOkResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '@emzmono/auth/jwt-auth.guard';
import { ResponseSuccess } from '@emzmono/common/interfaces/success-response.interface';
import { ShopResponse } from './responses/shop.response';
import { Roles } from '@emzmono/common/decorators/roles.decorator';
import { APP_SUB_DOMAIN } from '@emzmono/common/constances/app.constance';

@ApiTags('shop')
@Controller('shop')
export class ShopController {
    constructor( 
        private shopService: ShopService,
        private domainService: DomainService,

    ){}

    @ApiOkResponse({
        type: ShopResponse
    })
    @ApiBearerAuth()
    @Post('create-shop')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    async createShop( @Req() req, @Body() createShopDto: CreateShopDto ): Promise<any>{
        const subDomain = createShopDto.shopDomain+APP_SUB_DOMAIN;
        const shop = await this.domainService.findDomainByName(subDomain);
        if(shop) throw new BadRequestException('Tên địa chỉ web shop đã được đăng ký');
        const createShop = await this.shopService.createShop(req.user.id, createShopDto);
        return new ResponseSuccess( new ShopResponse(createShop) );
    }


}
