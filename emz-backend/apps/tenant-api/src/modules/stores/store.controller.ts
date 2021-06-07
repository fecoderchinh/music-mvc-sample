import { TenantHaders } from "@emzmono/common/constances/swagger.constance";
import { MongoIdValidationPipe } from "@emzmono/common/pipes/parse-mongo-id";
import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { LocationService } from "@shared/services/location.service";
import { StoreService } from "@shared/services/tenant/store.service";
import { StoreDocument } from "shared/schemas/tenant/store.schema";
import { CreateStoreDto } from "./dtos/create.store.dto";
import { StoreResponse } from "./responses/store.response";
import { StoresResponse } from "./responses/stores.response";

@ApiTags('stores')
@Controller('stores')
export class StoreController{
    constructor(
        private readonly storeService: StoreService,
        private readonly locationService: LocationService
    ){}


    @Post()
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async createStore(@Body() body: CreateStoreDto ): Promise<StoreResponse>{
        const ward = this.locationService.getWardByCode( body.ward );
        if(!ward) throw new BadRequestException( 'Phường/ xã không tìm thấy' )
        const data = {
            ...body,
            fullAddress: ward['full_name']
        };
        const created = await this.storeService.create(data);
        return new StoreResponse(created);
    }


    @Get()
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async getStores(): Promise<StoresResponse>{
        const stores: StoreDocument[] = await this.storeService.getAll();
        return new StoresResponse(stores);
    }


    @Get(':id')
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async getById( @Param( 'id', new MongoIdValidationPipe()) id: string ): Promise<StoreResponse>{
        const store: StoreDocument = await this.storeService.getById(id);
        return new StoreResponse(store);
    }

    @Put(':id')
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async update(
        @Param( 'id', new MongoIdValidationPipe()) id: string,
        @Body() body: CreateStoreDto ): Promise<StoreResponse>
    {
        const ward = this.locationService.getWardByCode( body.ward );
        if(!ward) throw new BadRequestException( 'Phường/ xã không tìm thấy' )
        const data = {
            ...body,
            fullAddress: ward['full_name']
        };
        const up = await this.storeService.update(id, data);
        return new StoreResponse(up);
    }

    @Delete(':id')
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async delete( @Param( 'id', new MongoIdValidationPipe()) id: string ): Promise<StoreResponse>{
        const store: StoreDocument = await this.storeService.remove(id);
        return new StoreResponse(store);
    }
}
