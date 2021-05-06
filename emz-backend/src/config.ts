import { GLOBAL_CONNECTION_NAME } from "./common/constances/app.constance";
import { MongooseModuleOptions } from "@nestjs/mongoose";

const connectionOption: MongooseModuleOptions = {
    uri: 'mongodb://localhost:27017/emz',
    connectionName: GLOBAL_CONNECTION_NAME
}

export default () => ({
    database: {
        uri: 'mongodb://localhost:27017/emz'
    }
});