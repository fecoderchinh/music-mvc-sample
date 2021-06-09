import {Inject, Injectable, OnModuleInit} from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import {ClientInterface} from "shared/schemas/global/client.schema";

interface IClientGRpcService {
    getList(query): any;
}


@Injectable()
export class ClientGRpcServices implements OnModuleInit {
    constructor(@Inject('CLIENT_GRPC_PROXY') private client: ClientGrpc) {}

    private clientService: IClientGRpcService;

    onModuleInit() {
        this.clientService = this.client.getService<IClientGRpcService>('ClientService');
    }

    getList(query): Promise<ClientInterface> {
        return this.clientService.getList(query).toPromise();
    }
}
