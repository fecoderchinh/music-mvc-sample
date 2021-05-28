import { ObjectID } from "mongodb";
import { Injectable, Inject} from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { StoreDocument, StoreSchema } from "shared/schemas/tenants/store.schema";
import { CreateStoreDto } from "@emzmono/tenants/stores/dtos/create.store.dto";

@Injectable()
export class StoreService {
    private storeModel:Model<StoreDocument>;

	constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
	){
        this.storeModel = this.connection.model<StoreDocument>("StoreModel", StoreSchema );
	}

    async createproduct(createDto: CreateStoreDto ): Promise<StoreDocument> {
        const item = new this.storeModel(createDto);
        return await item.save();
    }


    async getAllProduct(): Promise<StoreDocument[]>{
        return await this.storeModel.find().exec()
    }
}
