import { Injectable, Inject } from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { DomainSchema, DomainDocument } from 'shared/schemas/global/domain.schema';
import { ObjectID } from 'mongodb';


@Injectable()
export class DomainService {

    constructor(
        @InjectModel('DomainModel') private DomainModel: Model<DomainDocument>,
    ){
    }

    async findDomainByName( domainName: string ): Promise<DomainDocument>{
        return await this.DomainModel.findOne({ domainName: domainName })
    }

    async findInternalDomainByShopId( shopId: string ): Promise<DomainDocument>
    {
        return await this.DomainModel.findOne({
            shop: new ObjectID(shopId),
            isInternal: true
        }).exec()
    }


}
