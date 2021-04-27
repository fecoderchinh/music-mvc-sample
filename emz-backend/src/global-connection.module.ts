import { Global, Module, Scope, FactoryProvider } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { createConnection, getConnectionManager } from 'typeorm'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'
import OrmConfig from 'src/ormconfig'

const connectionFactory: FactoryProvider = {
    provide: 'GLOBAL_CONNECTION',
    scope: Scope.REQUEST,
    useFactory: async (req) => {
 
        const connectionName = `connection_global`;
        const connectionManager = getConnectionManager();

        if (connectionManager.has(connectionName)) {
            const connection = connectionManager.get(connectionName);
            return Promise.resolve(connection.isConnected ? connection : await connection.connect())
        }
        const config: MongoConnectionOptions = {
            ...OrmConfig,
            entities: [...(OrmConfig as any).entities],
            name: connectionName,
            database: "emz",
            monitorCommands: true,
            loggerLevel: "info",
            logging: ["query"]
        }

        return await createConnection(config)
        
    },
    inject: [REQUEST]
};

@Global()
@Module({
  providers: [connectionFactory],
  exports: ['GLOBAL_CONNECTION']
})
export class GlobalConnectionModule {}