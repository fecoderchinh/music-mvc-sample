import { Global, Module, Scope, NotFoundException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ShopService } from 'shared/services/shop.service';
import { ShopModule } from './global/shop/shop.module';
import { Connection, createConnection } from 'mongoose';

import * as mongoose from 'mongoose';

const connectionFactory = {
    
    provide: 'TENANT_CONNECTION',
    // scope: Scope.REQUEST,
    useFactory: async (req, shopService: ShopService) => {

        const urlObject = new URL(req.headers['x-tenant-id']);
        const hostName = urlObject.hostname;

        const shop = await shopService.getTenantIdByDomainName(hostName)
  
        if (!shop) {
            throw new NotFoundException(`Domain not found`);
        }
        const uri = `mongodb://localhost:27017/tenant-${shop.tenantUid}`;

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
    inject: [REQUEST, ShopService ],
};

@Global()
@Module({
    imports: [ ShopModule ],
    providers: [connectionFactory],
    exports: ['TENANT_CONNECTION'],
})
export class TenancyConnectionModule {}