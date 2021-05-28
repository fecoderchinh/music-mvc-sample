import { Module } from '@nestjs/common';
import {MenuController} from "@emzmono/tenants/menu/menu.controller";
import {MenuService} from "@shared/services/tenant/menu.service";

@Module({
    controllers: [
        MenuController
    ],
    providers: [
        MenuService
    ],
    exports: []
})
export class MenuModule {}
