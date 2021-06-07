import {Injectable, OnModuleInit} from "@nestjs/common";
import {Client, ClientGrpc, Transport} from "@nestjs/microservices";
import { join } from "path";
import {ShopDocument} from "shared/schemas/global/shop.schema";

interface IShopGRpcService {
    findByHostname(query): any;
}

@Injectable()
export class ShopGRpcServices implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
            url: process.env.SHOP_SERVICE_URL,
            package: 'shop',
            protoPath: join(__dirname, './_proto/shop.proto'),
        },
    },)
    client: ClientGrpc;

    private shopService: IShopGRpcService;

    onModuleInit() {
        this.shopService = this.client.getService<IShopGRpcService>('ShopService');
    }

    getByHostName(hostname): Promise<ShopDocument> {
        return this.shopService.findByHostname({ hostname }).toPromise();
    }
}
