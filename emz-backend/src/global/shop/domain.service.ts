import { Injectable, Inject } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { GLOBAL_CONNECTION_NAME } from 'src/common/constances/app.constance';
import { DomainSchema, DomainDocument } from './schemas/domain.schema';
import { ObjectID } from 'mongodb';


@Injectable()
export class DomainService {

    private DomainModel: Model<any>
    constructor(
        @InjectConnection( GLOBAL_CONNECTION_NAME ) private connection: Connection
    ){
        this.DomainModel = this.connection.model("DomainModel", DomainSchema )
    }

    async findDomainByName( domainName: string ): Promise<DomainDocument>{
        return await this.DomainModel.findOne({ domainName: domainName })
    }

    async findInternalDomainByShopId( shopId: string ): Promise<DomainDocument[]>
    {
        return await this.DomainModel.findOne({ 
            shop: new ObjectID(shopId),
            isInternal: true
        }).exec()
    }
    
 
}
