import { Injectable, Inject } from '@nestjs/common';
import { getShopByUserDto } from 'shared/dtos/shop/get-shop-by-user.dto';
import { CreateShopDto } from 'shared/dtos/shop/create-shop.dto';
import {ObjectID} from "mongodb";
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ShopSchema, ShopDocument } from 'shared/schemas/shop.schema';
import { Model, Connection } from 'mongoose';
import { GLOBAL_CONNECTION_NAME, APP_SUB_DOMAIN } from '@emzmono/common/constances/app.constance';
import { DomainSchema, DomainDocument } from 'shared/schemas/domain.schema';

@Injectable()
export class ShopService {

    constructor(
        @InjectModel('DomainModel') private DomainModel: Model<DomainDocument>,
        @InjectModel('ShopModel') private ShopModel: Model<any>,
    ){
    
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
                domainName: createShopDto.shopDomain + APP_SUB_DOMAIN ,
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
                tenantUid: createShopDto.shopDomain,
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

    async getTenantIdByDomainName( domainName: string ){
        return await this.ShopModel.findOne().populate({
            path: 'domains',
            match: { domainName: domainName },
            select: 'domainName'
        }).exec();
    }

  
}
