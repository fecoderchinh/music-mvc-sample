import { Controller, Post, HttpCode, UseGuards, HttpStatus, Req, Body, BadRequestException } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { getShopByUserDto } from './dto/get-shop-by-user.dto';
import { DomainService } from './domain.service';
import { ApiOkResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseSuccess } from 'src/common/interfaces/success-response.interface';
import { ShopResponse } from './responses/shop.response';
import { Roles } from 'src/common/decorators/roles.decorator';
import { APP_SUB_DOMAIN } from 'src/common/constances/app.constance';

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
        createShopDto.shopDomain = createShopDto.shopDomain+APP_SUB_DOMAIN
        const shop = await this.domainService.findDomainByName(createShopDto.shopDomain)
        if(shop) throw new BadRequestException('Tên địa chỉ web shop đã được đăng ký')
        const createShop = await this.shopService.createShop(req.user.id, createShopDto)
        return new ResponseSuccess( new ShopResponse(createShop) )
    }


}
