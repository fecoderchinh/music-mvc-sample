import { Injectable } from '@nestjs/common';

@Injectable()
export class TenantApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
