import { Controller, Get, Param } from '@nestjs/common';
import * as pcVN from 'pc-vn'

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'OK :)';
  }
  
  @Get('provinces')
  getCity(){
    return pcVN.getProvinces()
  }

  @Get('provinces/:code/districts')
  getDistrictsByProvinceCode(@Param('code') code: string){
    return pcVN.getDistrictsByProvinceCode(code)
  }

  @Get('districts/:code/wards')
  getWardsByDistrictCode(@Param('code') code: string){
    return pcVN.getWardsByDistrictCode(code)
  }
    
}
