import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PackageController } from "./package.controller";

@Module({
    imports: [
        MongooseModule.forFeature([

        ])
    ],
    providers: [

    ],
    exports: [

    ],
    controllers: [
        PackageController
    ]
})
export class PackageModule { }
