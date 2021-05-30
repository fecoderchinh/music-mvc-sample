import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import * as pcVN from 'pc-vn'
import { CityResponse } from 'shared/responses/city.response';
import { DistrictResponse } from 'shared/responses/district.response';
import { WardResponse } from 'shared/responses/ward.response';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor() {}
  
  @Get('provinces')
  getCity(){
    return new CityResponse(pcVN.getProvinces())
  }

  @Get('provinces/:code/districts')
  getDistrictsByProvinceCode(@Param('code') code: string){
    return new DistrictResponse(pcVN.getDistrictsByProvinceCode(code))
  }

  @Get('districts/:code/wards')
  getWardsByDistrictCode(@Param('code') code: string){
    return new WardResponse(pcVN.getWardsByDistrictCode(code))
  }
    
}
