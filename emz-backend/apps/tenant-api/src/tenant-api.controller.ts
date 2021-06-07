import { Controller, Get } from '@nestjs/common';
import { TenantApiService } from './tenant-api.service';

@Controller()
export class TenantApiController {
  constructor(private readonly tenantApiService: TenantApiService) {}

  @Get()
  getHello(): string {
    return this.tenantApiService.getHello();
  }
}
