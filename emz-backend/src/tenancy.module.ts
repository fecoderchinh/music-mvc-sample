import { Global, Module, Scope, NotFoundException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ShopService } from './global/shop/shop.service';
import { ShopModule } from './global/shop/shop.module';
import { createConnection } from 'mongoose';

const connectionFactory = {
    
    provide: 'TENANT_CONNECTION',
    scope: Scope.REQUEST,
    useFactory: async (req, shopService: ShopService) => {

        const urlObject = new URL(req.headers['x-tenant-id']);
        const hostName = urlObject.hostname;

        const shop = await shopService.getTenantIdByDomainName(hostName)
  
        if (!shop) {
            throw new NotFoundException(`Domain not found`);
        }
        const uri = `mongodb://localhost:27017/tenant-${shop.tenantUid}`;

        return await createConnection( uri )
    
        // return await mongo.connect( uri )

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