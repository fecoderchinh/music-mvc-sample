import { BadRequestException, Body, Controller, Get, Post, UseGuards, HttpStatus, HttpCode, Req } from '@nestjs/common'
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/emzmono/src/auth/jwt-auth.guard';
import { CreateClientDto } from 'shared/dtos/global/client/create.client.dto';
import { ClientService } from 'shared/services/global/client.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'shared/dtos/global/client/login.dto';
import * as bcrypt from 'bcrypt';
import { ClientResponse } from './responses/client.response';
import { ResponseSuccess } from '@emzmono/common/interfaces/success-response.interface';
import { ShopsResponse } from '../shop/responses/shops.response';
import { ShopService } from 'shared/services/global/shop.service';
import { DomainService } from 'shared/services/global/domain.service';
const saltOrRounds = 10;

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
    constructor(
        private readonly clientService: ClientService,
        private readonly shopService: ShopService,
        private readonly domainService: DomainService,
        private readonly jwtService: JwtService,
    ){}

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse()
    async register( @Body() createClientDto: CreateClientDto ): Promise<any>{
        let user = null
        user = await this.clientService.findUserByPhone(createClientDto.phone)
        if(user) throw new BadRequestException('Số điện thoại đã được đăng ký')

        createClientDto.password = await bcrypt.hash(createClientDto.password, saltOrRounds )
        user = await this.clientService.createClient(createClientDto)
        const accessToken = this.jwtService.sign({ id: user.id, phone: user.phone })
        return {
            token: accessToken,
            user: user
        }

    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login( @Body() loginDto: LoginDto ): Promise<any>{
        const user = await this.clientService.findUserByPhone(loginDto.phone)
        if(!user) throw new BadRequestException('Số điện thoại chưa đăng ký')
        const isMatch = await bcrypt.compare(loginDto.password, user.password)
        if( isMatch ){
            const accessToken = this.jwtService.sign({ id: user.id, phone: user.phone })
            return {
                token: accessToken,
                user: new ClientResponse(user)
            }
        }
        throw new BadRequestException('Sai mật khẩu')
    }

    @Get('profile')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @ApiResponse({
        type: ClientResponse
    })
    async getProfile( @Req() req ): Promise<any>{
        const user = await this.clientService.findUserByPhone( req.user.phone )
        return {
            user: new ClientResponse(user)
        }
    }



    @ApiOkResponse({
        type: ShopsResponse
    })
    @ApiBearerAuth()
    @Get('get-shop')
    @HttpCode(HttpStatus.OK)
    @UseGuards(JwtAuthGuard)
    async getShopByUser( @Req() req ): Promise<any>{
        const shops = await this.shopService.getShopByUserId( req.user.id )

        return new ResponseSuccess( new ShopsResponse(shops) )
    }





}


