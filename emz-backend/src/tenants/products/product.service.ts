import { Injectable, Inject} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { Model, Connection } from 'mongoose';
import { ProductSchema, ProductDocument } from './schemas/product.schema';
import { InjectConnection } from '@nestjs/mongoose';
import { GLOBAL_CONNECTION_NAME } from 'src/common/constances/app.constance';

@Injectable()
export class ProductService {
   
    private ProductModel: Model<any>;
	constructor( 
        // @InjectConnection( GLOBAL_CONNECTION_NAME ) private connection: Connection,
        @InjectConnection( 'tenant_connection' ) private tenantConnection: Connection
		// @InjectConnection("tenant_connection") private connection: Connection
	){
        console.log(this.tenantConnection)
        this.ProductModel = this.tenantConnection.model("ProductModel", ProductSchema );
    
	}

    async createproduct(createProductDto: CreateProductDto ): Promise<ProductDocument> {
        const productE = new this.ProductModel(createProductDto);
        return await productE.save();
    }

}