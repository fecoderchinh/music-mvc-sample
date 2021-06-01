import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ThemeCategoryService } from "@shared/services/global/theme-category.service";
import { ThemeService } from "@shared/services/global/theme.service";
import { ThemeCategorySchema } from "shared/schemas/global/theme-category.schema";
import { ThemeSchema } from "shared/schemas/global/theme.schema";
import { THEME_CATEGORY_MODEL, THEME_MODEL } from "shared/schemas/model.constant";
import { IsThemeCatSlugAlreadyExist } from "shared/validator/IsThemeCatSlugAlreadyExist.validator";
import { ThemeCategoryController } from "./theme-category.controller";
import { ThemeController } from "./theme.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: THEME_MODEL , schema: ThemeSchema },
            { name: THEME_CATEGORY_MODEL , schema: ThemeCategorySchema },
        ])
    ],
    providers: [
        IsThemeCatSlugAlreadyExist, 
        ThemeCategoryService
    ],
    exports: [

    ],
    controllers: [
        ThemeController,
        ThemeCategoryController
    ]
})
export class ThemeModule { }
