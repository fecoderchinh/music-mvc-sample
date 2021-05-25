import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'shared/dtos/global/client/create.client.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientInterface } from 'shared/schemas/global/client.schema';

@Injectable()
export class ClientService {

    constructor(@InjectModel( 'ClientModel' ) private ClientModel: Model<ClientInterface>) {

    }

    async findUserByPhone( phone: string ) : Promise<ClientInterface>{
        return await this.ClientModel.findOne({ phone: phone })
    }

    async createClient( createClientDto: CreateClientDto ): Promise<ClientInterface>{
        const create = new this.ClientModel(createClientDto)
        return await create.save()
    }
}
