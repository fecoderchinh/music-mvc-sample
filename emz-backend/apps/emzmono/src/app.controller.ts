import { Controller, Get, Param } from '@nestjs/common';
import * as pcVN from 'pc-vn'
import { CityResponse } from 'shared/responses/city.response';
import { DistrictResponse } from 'shared/responses/district.response';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'OK :)';
  }
  
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
    return pcVN.getWardsByDistrictCode(code)
  }
    
}
