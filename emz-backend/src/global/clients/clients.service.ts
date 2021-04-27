import { Inject, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create.client.dto';
import { Connection as ConnectionMongosee, Model } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { ClientInterface, ClientSchema } from './schemas/client.schema';
import { GLOBAL_CONNECTION_NAME } from 'src/common/constances/app.constance';

@Injectable()
export class ClientsService {
    
    private ClientModel: Model<any>;

    constructor(
        @InjectConnection( GLOBAL_CONNECTION_NAME ) private connectionMongosee: ConnectionMongosee
    ){
        this.ClientModel = this.connectionMongosee.model("ClientModel", ClientSchema )
    }

    async findUserByPhone( phone: string ) : Promise<ClientInterface>{
        return await this.ClientModel.findOne({ phone: phone })
    }

    async createClient( createClientDto: CreateClientDto ): Promise<ClientInterface>{
        const create = new this.ClientModel(createClientDto)
        return await create.save()
    }



    // async findShopByDomainName( shopDomain ): Promise<any> {
    //     return await this.client.send('find_domain', { shopDomain: shopDomain } )
    //         .pipe(timeout(5000))
    //         .toPromise();
    // }

    

    // async findOne(id:string): Promise<any>{
    //     return await this.client.send('find_user_by_id', { id: id } )
    // }

    // async login(loginDto: LoginDto): Promise<any>{
    //     return await this.client.send('login', loginDto )
    // }

    // async createShop(createShopDto: CreateShopDto): Promise<any>{
    //     return await this.client.send('create_shop', createShopDto )
    //         .pipe(timeout(5000))
    //         .toPromise();
    // }

    // async getShopByUser(userId): Promise<any>{
    //     return await this.client.send('get_shop_by_user', { userId: userId } )
    //         .pipe(timeout(5000))
    //         .toPromise();
    // }



}
