import { StoreController } from "./store.controller";
import { Module } from '@nestjs/common';
import { JoiPipeModule } from "nestjs-joi";
import { StoreService } from "@shared/services/tenant/store.service";
import {LocationService} from "@shared/services/location.service";


@Module({
    imports: [
        JoiPipeModule.forRoot({
            pipeOpts: {
                usePipeValidationException: false,
            },
        }),
    ],
    controllers: [
        StoreController
    ],
    providers: [
        StoreService,
        LocationService
    ],
    exports: []
})
export class StoreModule {}
