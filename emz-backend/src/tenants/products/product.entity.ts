import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

@Entity()
export class ProductEntity {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    productName: string;

}