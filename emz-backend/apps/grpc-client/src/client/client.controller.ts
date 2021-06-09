import {Controller} from '@nestjs/common';
import {
  GrpcMethod,
} from '@nestjs/microservices';
import {QueryDto} from "./dto/query.dto";
import {ClientService} from "shared/services/global/client.service";

@Controller()
export class ClientController {
  constructor(private clientService: ClientService) {}

  @GrpcMethod('ClientService', 'getList')
  async index(query) {
    const clients = await this.clientService.getList(query);
    return { items: clients };
  }
}
