import { join } from "path";
import { MongoConnectionOptions } from "typeorm/driver/mongodb/MongoConnectionOptions";

const OrmConfig: MongoConnectionOptions = {
    type: 'mongodb',
    host: process.env.MONGODB_HOST,
    port: Number(process.env.MONGODB_PORT),
    database: process.env.MONGODB_DATABASE,
    entities: [
        join(__dirname, './global/**/**/*.entity{.ts,.js}')
    ],
    migrations: [
    ],
    logging: ["query", "error"]
};

export default OrmConfig