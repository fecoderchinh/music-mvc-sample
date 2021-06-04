import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    Inject,
    Scope,
    mixin,
    Type, forwardRef, UnprocessableEntityException
} from '@nestjs/common';
import { ObjectID } from "mongodb";
import { StoreService } from "shared/services/tenant/store.service";
import { REQUEST } from "@nestjs/core";

export function MixinExistStorePipe(): Type<PipeTransform> {
    @Injectable({ scope: Scope.REQUEST })
    class MixinProductPipe implements PipeTransform {
        constructor(
            @Inject(forwardRef(() => StoreService)) private storeService: StoreService,
            @Inject(REQUEST) private request?: any,
        ) {

        }

        async transform(value: any, metadata: ArgumentMetadata) {
            const errors = [];
            const variants = value.variants || [];
            if (variants.length) {
                const storeIdsDto = [];
                variants.forEach(variant => {
                    variant.inventories.forEach(inventory => {
                        storeIdsDto.push(new ObjectID(inventory.storeId));
                    })
                });

                const stores = await this.storeService.getAll(storeIdsDto);
                const storeIds = stores.map(store => store._id.toString());

                storeIdsDto.forEach((storeId, index) => {
                   if (! storeIds.includes(storeId.toString())) {
                       errors.push({[`inventories.${index}.storeId`] : 'Cửa hàng không tồn tại.'})
                   }
                });

                if (errors.length) {
                    throw new UnprocessableEntityException({ errors });
                }

                this.request.stores = stores;
            }

            return value;
        }
    }

    return mixin(MixinProductPipe);
}


