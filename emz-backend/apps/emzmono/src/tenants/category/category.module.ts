import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from 'shared/services/tenant/category.service';
import {JoiPipeModule} from "nestjs-joi";

@Module({
    imports: [
        JoiPipeModule.forRoot({
        pipeOpts: {
            usePipeValidationException: false,
        },
    }),],
    controllers: [
        CategoryController
    ],
    providers: [
        CategoryService
    ],
    exports: []
})
export class CategoryModule {}
