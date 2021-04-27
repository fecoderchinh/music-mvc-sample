import { Injectable, Inject} from '@nestjs/common';
import { Connection, MongoRepository, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductService {
    private productRepository: Repository<ProductEntity>
	constructor( 
		@Inject('CONNECTION') connection: Connection
	){
       
	    this.productRepository = connection.getRepository(ProductEntity)
	}

    async createproduct(createProductDto: CreateProductDto ): Promise<ProductEntity> {
        const productE = new ProductEntity()
        productE.productName = createProductDto.productName
        return await this.productRepository.save(productE)
    }

}