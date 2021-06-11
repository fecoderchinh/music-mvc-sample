import {Transport} from "@nestjs/microservices";
import {join} from "path";

export default () => ({
    port: process.env.TENANT_API_PORT || '3005',
    database: {
        uri: process.env.MONGODB_URI
    },
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    jwt_ttl: process.env.JWT_TTL || '10d',
    clientService: {
        transport: Transport.GRPC,
        options: {
        url: process.env.CLIENT_SERVICE_URL || '5001',
        package: 'client',
        protoPath: join(__dirname, './_proto/client.proto'),
        }
    },
});
