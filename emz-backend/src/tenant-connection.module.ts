import { Global, Module, Scope, FactoryProvider } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { createConnection, getConnectionManager } from 'typeorm'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'
import OrmTenantConfig from 'src/tenant-ormconfig'

const connectionFactory: FactoryProvider = {
    provide: 'CONNECTION',
    scope: Scope.REQUEST,
    useFactory: async (req) => {
        const tenantId: string = req.headers['x-tenant-id']
        if (tenantId) {
            const connectionName = `connection_${tenantId}`;
            const connectionManager = getConnectionManager();

            if (connectionManager.has(connectionName)) {
                const connection = connectionManager.get(connectionName);
                return Promise.resolve(connection.isConnected ? connection : await connection.connect())
            }

            const config: MongoConnectionOptions = {
                ...OrmTenantConfig,
                entities: [...(OrmTenantConfig as any).entities],
                name: connectionName,
                database: tenantId,
                monitorCommands: true,
                loggerLevel: "info",
                logging: ["query"]
            }

            return await createConnection(config)
        }
    },
    inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['CONNECTION']
})
export class TenancyConnectionModule {}