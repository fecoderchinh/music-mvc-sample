import { ObjectID } from "mongodb";
import { Injectable, Inject} from '@nestjs/common';
import { Model, Connection } from 'mongoose';

@Injectable()
export class StoreService {

    
    constructor(
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
    ) {
       
    }

    // async create (): Promise<CategoryDocument> {
    // }
}
