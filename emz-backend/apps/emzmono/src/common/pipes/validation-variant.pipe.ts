import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    BadRequestException
} from '@nestjs/common';

@Injectable()
export class ValidationVariantPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const attributes = value.attributes || [];

        if (attributes.length === 0) {
            return value;
        }

        let totalVariant = 1;

        attributes.forEach(attribute => {
            totalVariant *= attribute.values.length;
        });

        if (totalVariant != value.variants.length) {
            throw new BadRequestException("Số lượng sản phẩm tuỳ biến không hợp lệ!");
        }

        return value;
    }
}

