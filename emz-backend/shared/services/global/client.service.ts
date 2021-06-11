import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'shared/dtos/global/client/create.client.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientInterface } from 'shared/schemas/global/client.schema';
import {ClientAggregation} from "../../aggregation/client.aggregation";

@Injectable()
export class ClientService {

    constructor(@InjectModel( 'ClientModel' ) private clientModel: Model<ClientInterface>) {
    }

    async findUserByPhone( phone: string ) : Promise<ClientInterface>{
        return await this.clientModel.findOne({ phone: phone });
    }

    async createClient( createClientDto: CreateClientDto ): Promise<ClientInterface>{
        const create = new this.clientModel(createClientDto);
        return await create.save()
    }

    async getList(query) {
        const builderOptions = (new ClientAggregation(query)).build();
        const users = await this.clientModel.find(...builderOptions).exec();
        return users;
    }
}
