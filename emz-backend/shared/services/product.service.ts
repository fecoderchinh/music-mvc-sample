import { Injectable, Inject} from '@nestjs/common';
import { CreateProductDto } from 'shared/dtos/product/create.product.dto';
import { Model, Connection } from 'mongoose';
import { ProductSchema, ProductDocument } from 'shared/schemas/product.schema';


@Injectable()
export class ProductService {
   
    private productModel:Model<ProductDocument>;
    
	constructor( 
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
	){
        this.productModel = this.connection.model<ProductDocument>("ProductModel", ProductSchema );
	}

    async createproduct(createProductDto: CreateProductDto ): Promise<ProductDocument> {
        const productE = new this.productModel(createProductDto);
        return await productE.save();
    }


    async getAllProduct(): Promise<ProductDocument[]>{
        return await this.productModel.find().exec()
    }
}