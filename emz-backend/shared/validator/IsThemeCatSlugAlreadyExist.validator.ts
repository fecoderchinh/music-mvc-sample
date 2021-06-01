import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {BadRequestException, Injectable} from '@nestjs/common';
import { ThemeCategoryService } from '@shared/services/global/theme-category.service';

@ValidatorConstraint({ name: 'isThemeCatSlugAlreadyExist', async: true })
@Injectable()
export class IsThemeCatSlugAlreadyExist implements ValidatorConstraintInterface {
    constructor(protected readonly themeCategoryService: ThemeCategoryService) {}

    async validate(text: string) {
        const found = await this.themeCategoryService.findOneBySlug(text);
        if( found ) throw new BadRequestException('Slug đã tồn tại');
        return true;
    }

    defaultMessage(args: ValidationArguments) {
        return `Slug đã tồn tại`;
    }
    
}