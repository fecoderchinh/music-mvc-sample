import { Global, Module, Scope, FactoryProvider } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose'

const connectionFactory: FactoryProvider = {
    provide: 'TENANT_CONNECTION',
    scope: Scope.REQUEST,
    useFactory: async (req) => {
        const tenantId: string = req.headers['x-tenant-id']
        if (tenantId) {
           
            return MongooseModule.forRoot('mongodb://localhost:27017/' + tenantId )
        }
    },
    inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['TENANT_CONNECTION']
})
export class TenancyConnectionModule {}