import {ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';
import {BadRequestException, Injectable} from '@nestjs/common';
import { ThemeService } from '@shared/services/global/theme.service';

@ValidatorConstraint({ name: 'isThemeSlugAlreadyExist', async: true })
@Injectable()
export class IsThemeSlugAlreadyExist implements ValidatorConstraintInterface {
    constructor(protected readonly themeService: ThemeService) {}

    async validate(text: string) {
        const found = await this.themeService.findOneBySlug(text);
        if( found ) throw new BadRequestException('Slug đã tồn tại');
        return true;
    }

    defaultMessage(args: ValidationArguments) {
        return `Slug đã tồn tại`;
    }
    
}