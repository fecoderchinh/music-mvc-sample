import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantFrontService {
  getHello(): string {
    return 'Hello World!';
  }
}
