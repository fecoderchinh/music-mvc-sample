import { IsMongoId, IsNotEmpty } from "class-validator";


export class getShopByUserDto{
    @IsMongoId()
    @IsNotEmpty()
    userId: string;
}