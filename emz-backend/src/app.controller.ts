import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import * as pcVN from 'pc-vn'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
