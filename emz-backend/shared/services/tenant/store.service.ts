import { ObjectID } from "mongodb";
import { Injectable, Inject} from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { StoreDocument, StoreSchema } from "shared/schemas/tenant/store.schema";
import {CreateStoreDto} from "apps/tenant-api/src/modules/stores/dtos/create.store.dto";

@Injectable()
export class StoreService {
    private storeModel:Model<StoreDocument>;

	constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
	){
        this.storeModel = this.connection.model<StoreDocument>("StoreModel", StoreSchema );
	}

    async create(createDto: CreateStoreDto ): Promise<StoreDocument> {
        const item = new this.storeModel(createDto);
        return await item.save();
    }

    async update(id: string, createDto: CreateStoreDto ): Promise<StoreDocument> {
        return await this.storeModel.findByIdAndUpdate(id, createDto);
    }

    async getAll(ids= []): Promise<StoreDocument[]>{
	    let options = {};

	    if (ids.length) {
            options = {
                _id: {
                    $in: ids
                }
            };
        }
        const stores = await this.storeModel.find(options).exec();

	    return stores;
    }

    async getById(id: string): Promise<StoreDocument>{
        return await this.storeModel.findById(id).exec();
    }


    async remove(id: string): Promise<StoreDocument>{
        return await this.storeModel.findByIdAndDelete(id)
    }
}
