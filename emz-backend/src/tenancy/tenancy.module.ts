import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenancyConnectionConfigService } from './tenancy.service';

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useClass: TenancyConnectionConfigService,
        }),
    ],
    exports:[
        
    ]
})
export class TenancyMongoConnectionModule {}