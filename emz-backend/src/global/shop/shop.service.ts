import { Injectable, Inject } from '@nestjs/common';
import { getShopByUserDto } from './dto/get-shop-by-user.dto';
import { CreateShopDto } from './dto/create-shop.dto';
import {ObjectID} from "mongodb";
import { InjectConnection } from '@nestjs/mongoose';
import { ShopSchema, ShopDocument } from './schemas/shop.schema';
import { Model, Connection } from 'mongoose';
import { GLOBAL_CONNECTION_NAME, APP_SUB_DOMAIN } from 'src/common/constances/app.constance';
import { DomainSchema } from './schemas/domain.schema';

@Injectable()
export class ShopService {

    private ShopModel: Model<any>;
    private DomainModel: Model<any>;

    constructor(
        @InjectConnection( GLOBAL_CONNECTION_NAME ) private connection: Connection
    ){
        this.ShopModel = this.connection.model("ShopModel", ShopSchema );
        this.DomainModel = this.connection.model("DomainModel", DomainSchema );
    }

    async getShopByUserId( userId: string ): Promise<ShopDocument[]>{
        return await this.ShopModel.find({ user: new ObjectID(userId) })
            .populate("domains")
            .exec()
    }

    async createShop( userId: string, createShopDto: CreateShopDto ): Promise<any>{
      
        await this.DomainModel.createCollection();
        await this.ShopModel.createCollection();

        const session = await this.DomainModel.startSession();
        session.startTransaction();
        try{
            const opts = { session };
            
            // save domain to shop
            const domain = new this.DomainModel({
                domainName: createShopDto.shopDomain,
                isInternal: true
            })
            await domain.save(opts)

            // save shop
            const createShopData = {
                website: {
                    email: createShopDto.email,
                    ownerName: createShopDto.shopOwnerName,
                },
                shop: {
                    name: createShopDto.shopName,
                    phone1: createShopDto.phone,
                    address: createShopDto.shopAddress,
                    city: createShopDto.city,
                },
                user: new ObjectID(userId),
                domains: [new ObjectID(domain.id)]
            }
            const shop = new this.ShopModel( createShopData )
            await shop.save(opts)

            await session.commitTransaction();
            session.endSession();
            return shop
        }catch(e) {
            await session.abortTransaction();
            session.endSession();
            throw e;
        }
        

    }

  
}
