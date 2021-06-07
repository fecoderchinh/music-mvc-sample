import {Controller} from '@nestjs/common';
import {
  GrpcMethod,
} from '@nestjs/microservices';
import {ShopService} from "@shared/services/global/shop.service";
import {QueryDto} from "./dto/query.dto";

@Controller()
export class ShopController {
  constructor(private shopService: ShopService) {}

  @GrpcMethod('ShopService', 'findByHostname')
  async get(query: QueryDto) {
    const shop = await this.shopService.getTenantIdByDomainName(query.hostname);
    return shop;
  }
}
