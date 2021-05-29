import { TenantHaders } from "@emzmono/common/constances/swagger.constance";
import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiHeader, ApiTags } from "@nestjs/swagger";
import { StoreService } from "@shared/services/tenant/store.service";
import { StoreDocument } from "shared/schemas/tenant/store.schema";
import { CreateStoreDto } from "./dtos/create.store.dto";
import { StoreResponse } from "./responses/store.response";
import { StoresResponse } from "./responses/stores.response";

@ApiTags('store')
@Controller('store')
export class StoreController{
    constructor( private readonly storeService: StoreService ){}


    @Post()
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async createStore(@Body() body: CreateStoreDto ): Promise<StoreDocument>{
        return await this.storeService.create(body)
    }


    @Get()
    @ApiHeader(TenantHaders)
    @HttpCode( HttpStatus.OK )
    async getStores(): Promise<StoresResponse>{
        const stores: StoreDocument[] = await this.storeService.getAll();
        return new StoresResponse(stores);
    }
}