import { join } from 'path';
import OrmConfig from './ormconfig';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const OrmTenantConfig: MongoConnectionOptions = {
    ...OrmConfig,
    entities: [
        join(__dirname, './tenants/**/*.entity{.ts,.js}'),
    ],
    migrations: [
      
    ],
    logging: ["query", "error"]
};

export default OrmTenantConfig