import { MongoIdValidationPipe } from "@emzmono/common/pipes/parse-mongo-id";
import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ThemeCategoryService } from "@shared/services/global/theme-category.service";
import { CreateThemeCategoryDto } from "shared/dtos/global/theme-category/create-theme-category.dto";
import { UpdateThemeCategoryDto } from "shared/dtos/global/theme-category/update-theme-category.dto";
import { ThemeCategoryDocument } from "shared/schemas/global/theme-category.schema";
import { ThemeCategoriesResponse } from "./responses/theme-categories.response";
import { ThemeCategoryResponse } from "./responses/theme-category.response";


@ApiTags('theme-category')
@Controller('theme-category')
export class ThemeCategoryController {
    constructor(
        private readonly themCategoryService: ThemeCategoryService,
    ){}

    @ApiResponse({
        type: ThemeCategoryResponse
    })
    @Post()
    async create( @Body() body: CreateThemeCategoryDto ): Promise<ThemeCategoryResponse>{
        const data = await this.themCategoryService.create(body);
        return new ThemeCategoryResponse(data);
    }

    @ApiResponse({
        type: [ThemeCategoriesResponse]
    })
    @Get()
    async getAll(): Promise<ThemeCategoriesResponse>{
        const data = await this.themCategoryService.getAll();
        return new ThemeCategoriesResponse(data);
    }

    @ApiResponse({
        type: ThemeCategoryResponse
    })
    @Get(':id')
    async getById( @Param('id', new MongoIdValidationPipe() ) id: string ): Promise<ThemeCategoryResponse>{
        const data = await this.themCategoryService.getByid(id);
        return new ThemeCategoryResponse(data);
    }

    @ApiResponse({
        type: ThemeCategoryResponse
    })
    @Put(':id')
    async update( 
        @Param('id', new MongoIdValidationPipe() ) id: string, 
        @Body() body: UpdateThemeCategoryDto 
    ): Promise<ThemeCategoryResponse>{
        const found = await this.themCategoryService.getByid(id);
        if(!found) throw new BadRequestException('Id not found');
        const data = await this.themCategoryService.update(id, body);
        return new ThemeCategoryResponse(data);
    }


    @ApiResponse({
        type: ThemeCategoryResponse
    })
    @Delete(':id')
    async delete( 
        @Param('id', new MongoIdValidationPipe() ) id: string
    ): Promise<ThemeCategoryResponse>{
        const data:ThemeCategoryDocument = await this.themCategoryService.delete(id);
        return new ThemeCategoryResponse(data);
    }


}