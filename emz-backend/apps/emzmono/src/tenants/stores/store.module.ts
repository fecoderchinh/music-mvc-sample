import { StoreController } from "./store.controller";
import { Module } from '@nestjs/common';
import { JoiPipeModule } from "nestjs-joi";
import { StoreService } from "@shared/services/tenants/store.service";


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
        StoreService
    ],
    exports: []
})
export class StoreModule {}