import { Injectable, Inject} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { Model, Connection } from 'mongoose';
import { ProductSchema, ProductDocument } from './schemas/product.schema';


@Injectable()
export class ProductService {
   
    private productModel:Model<any>;
    
	constructor( 
        @Inject( 'TENANT_CONNECTION' ) private connection: Connection,
	){
        this.productModel = this.connection.model("ProductModel", ProductSchema );
	}

    async createproduct(createProductDto: CreateProductDto ): Promise<ProductDocument> {
        console.log(createProductDto)
        const productE = new this.productModel(createProductDto);
        return await productE.save();
    }


    async getAllProduct(): Promise<any>{
        return await this.productModel.find().exec()
    }
}