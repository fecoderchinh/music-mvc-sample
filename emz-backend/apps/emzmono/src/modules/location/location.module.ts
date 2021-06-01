import { Global, Module } from '@nestjs/common';
import { LocationService } from '@shared/services/location.service';
import { LocationController } from "./location.controller";

@Global()
@Module({
    imports: [

    ],
    controllers: [
        LocationController
    ],
    providers: [
        LocationService
    ],
    exports: [
        LocationService
    ]
})
export class LocationModule {}