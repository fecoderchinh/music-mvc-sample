import { Module } from '@nestjs/common';
import { TenantFrontController } from './tenant-front.controller';
import { TenantFrontService } from './tenant-front.service';

@Module({
  imports: [],
  controllers: [TenantFrontController],
  providers: [TenantFrontService],
})
export class TenantFrontModule {}
