import { Global, Module, Scope, NotFoundException, BadRequestException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Connection, createConnection } from 'mongoose';

import * as mongoose from 'mongoose';
import {ShopGRpcServices} from "./modules/shop-grpc.services";

const connectionFactory = {

    provide: 'TENANT_CONNECTION',
    // scope: Scope.REQUEST,
    useFactory: async (req, shopGrpcService:ShopGRpcServices) => {
        if(!req.headers['x-tenant-id']){
            throw new BadRequestException(`Tenant id not provide`);
        }

        const urlObject = new URL(req.headers['x-tenant-id']);
        const hostName = urlObject.hostname;

        const shop = await shopGrpcService.getByHostName(hostName);

        if (!shop) {
            throw new NotFoundException(`Domain not found`);
        }
        const uri = `mongodb://localhost:27017,localhost:27018,localhost:27019/tenant-${shop.tenantUid}?replicaSet=rs0`;

        // Get the underlying mongoose connections
        const connections: Connection[] = mongoose.connections;

        // Find existing connection
        const foundConn = connections.find((con: Connection) => {
            return con.name === `tenant-${shop.tenantUid}`;
        });

        // Check if connection exist and is ready to execute
        if (foundConn && foundConn.readyState === 1) {
            return foundConn;
        }

        // Create a new connection
        return await createConnection( uri )

    },
    inject: [REQUEST, ShopGRpcServices ],
};

@Global()
@Module({
    imports: [],
    providers: [connectionFactory, ShopGRpcServices],
    exports: ['TENANT_CONNECTION'],
})
export class TenancyConnectionModule {}
