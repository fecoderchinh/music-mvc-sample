import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create.client.dto';
import { Connection as ConnectionMongosee, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ClientInterface, ClientSchema } from './schemas/client.schema';
import { GLOBAL_CONNECTION_NAME } from '@emzmono/common/constances/app.constance';

@Injectable()
export class ClientsService {
    
    constructor(
        @InjectModel( 'ClientModel' ) private ClientModel: Model<ClientInterface>
    ){
       
    }

    async findUserByPhone( phone: string ) : Promise<ClientInterface>{
        return await this.ClientModel.findOne({ phone: phone })
    }

    async createClient( createClientDto: CreateClientDto ): Promise<ClientInterface>{
        const create = new this.ClientModel(createClientDto)
        return await create.save()
    }



}
