import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ThemeSchema } from "shared/schemas/global/theme.schema";
import { THEME_CATEGORY_MODEL, THEME_MODEL } from "shared/schemas/model.constant";
import { CategorySchema } from "shared/schemas/tenant/category.schema";
import { ThemeCategoryController } from "./theme-category.controller";
import { ThemeController } from "./theme.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: THEME_MODEL , schema: ThemeSchema },
            { name: THEME_CATEGORY_MODEL , schema: CategorySchema },
        ])
    ],
    providers: [

    ],
    exports: [

    ],
    controllers: [
        ThemeController,
        ThemeCategoryController
    ]
})
export class ThemeModule { }
