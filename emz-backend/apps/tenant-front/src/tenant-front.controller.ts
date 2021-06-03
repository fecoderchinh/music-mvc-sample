import { Controller, Get } from '@nestjs/common';
import { TenantFrontService } from './tenant-front.service';

@Controller()
export class TenantFrontController {
  constructor(private readonly tenantFrontService: TenantFrontService) {}

  @Get()
  getHello(): string {
    return this.tenantFrontService.getHello();
  }
}
