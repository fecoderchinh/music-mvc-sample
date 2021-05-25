import {ArgumentMetadata, NotFoundException, PipeTransform} from "@nestjs/common";
import { Types } from "mongoose";

export class RouteParamPipe implements PipeTransform {
    async transform(value, metadata: ArgumentMetadata) {
        if (metadata.type === 'param') {
            const pieces = metadata.data.split('_');
            const dataId = pieces[pieces.length - 1];

            if (dataId === 'id' && !Types.ObjectId.isValid(value)) {
                throw new NotFoundException();
            }
        }

        return value;
    }
}
