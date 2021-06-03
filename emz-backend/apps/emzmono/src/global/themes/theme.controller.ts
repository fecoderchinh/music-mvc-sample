import { MongoIdValidationPipe } from "@emzmono/common/pipes/parse-mongo-id";
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ThemeService } from "@shared/services/global/theme.service";
import { CreateThemeDto } from "shared/dtos/global/theme/create-theme.dto";
import { UpdateThemeDto } from "shared/dtos/global/theme/update-theme.dto";
import { ThemeDocument } from "shared/schemas/global/theme.schema";
import { ThemeResponse } from "./responses/theme.response";
import { ThemesResponse } from "./responses/themes.response";

@ApiTags('theme')
@Controller('theme')
export class ThemeController {
    constructor(
        private readonly themeService: ThemeService,
    ){}

    @ApiResponse({
        type: ThemeResponse
    })
    @Post()
    async create( @Body() body: CreateThemeDto ): Promise<ThemeResponse>{
        const data = await this.themeService.create(body);
        return new ThemeResponse(data);
    }

    @ApiResponse({
        type: [ThemesResponse]
    })
    @Get()
    async getAll(): Promise<ThemesResponse>{
        const data = await this.themeService.getAll();
        return new ThemesResponse(data);
    }

    @ApiResponse({
        type: ThemeResponse
    })
    @Get(':id')
    async getById( @Param('id', new MongoIdValidationPipe() ) id: string ): Promise<ThemeResponse>{
        const data = await this.themeService.getByid(id);
        return new ThemeResponse(data);
    }

    @ApiResponse({
        type: ThemeResponse
    })
    @Put(':id')
    async update( 
        @Param('id', new MongoIdValidationPipe() ) id: string, 
        @Body() body: UpdateThemeDto 
    ): Promise<ThemeResponse>{
        const found = await this.themeService.getByid(id);
        if(!found) throw new BadRequestException('Id not found');
        const data = await this.themeService.update(id, body);
        return new ThemeResponse(data);
    }


    @ApiResponse({
        type: ThemeResponse
    })
    @Delete(':id')
    async delete( 
        @Param('id', new MongoIdValidationPipe() ) id: string
    ): Promise<ThemeResponse>{
        const data:ThemeDocument = await this.themeService.delete(id);
        return new ThemeResponse(data);
    }

}