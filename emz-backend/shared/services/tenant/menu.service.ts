import {ObjectID, ObjectId} from "mongodb";
import {Injectable, Inject, NotFoundException, Req} from '@nestjs/common';
import { Model, Connection } from 'mongoose';
import { Request } from 'express';
import {
    IMenuDocument,
    IMenuItemDocument,
    MenuItemSchema,
    MenuSchema
} from "../../schemas/tenant/menu.schema";
import {CreateMenuDto} from "../../dtos/tenant/menu/create.menu.dto";
import {depthDecorator, flatNestedData, nestedSetData} from "../../build-tree";
import {UpdateMenuDto} from "../../dtos/tenant/menu/update.menu.dto";

@Injectable()
export class MenuService {

    private menuModel:Model<IMenuDocument>;
    private menuItemModel:Model<IMenuItemDocument>;

    constructor(
        @Inject('TENANT_CONNECTION') private connection: Connection,
    ) {
        this.menuModel = this.connection.model<IMenuDocument>("MenuModel", MenuSchema);
        this.menuItemModel = this.connection.model<IMenuItemDocument>("MenuItemModel", MenuItemSchema);
    }

    /**
     * Create a menu
     *
     * @param userId
     * @param createMenuDto
     */
    async create (userId: string, createMenuDto: CreateMenuDto): Promise<IMenuDocument> {
        const menuItemsData:IMenuItemDocument[] = createMenuDto.menuItems;
        delete createMenuDto.menuItems;
        const menuData = {
            ...createMenuDto,
            user: new ObjectID(userId),
        };

        const menuModel = new this.menuModel(menuData);
        const menu = await menuModel.save();

        const data = flatNestedData(menuItemsData).map(item => {
            return {
                ...item,
                user: new ObjectId(userId),
                menuId: new ObjectID(menu.id),
            };
        });

        await this.menuItemModel.insertMany(data);

        return menu;
    }

    /**
     * Update a menu
     *
     * @param request
     * @param updateMenuDto
     */
    async update (request, updateMenuDto: UpdateMenuDto): Promise<IMenuDocument> {
        const menuItemsData:IMenuItemDocument[] = updateMenuDto.menuItems;
        delete updateMenuDto.menuItems;
        const menuId = request.params.menu_id;

        const menu = await this.menuModel.findById(menuId);
        Object.assign(menu, updateMenuDto);
        await menu.save();
        await this.menuItemModel.deleteMany({ menuId });

        const data = flatNestedData(menuItemsData).map(item => {
            return {
                ...item,
                user: new ObjectId(request.user.id),
                menuId: new ObjectId(menu.id),
            };
        });

        console.log('data', data);

        await this.menuItemModel.insertMany(data);

        return menu;
    }

    /**
     * Get a menu
     *
     * @param menuId
     */
    async getDetail (menuId: ObjectID): Promise<IMenuDocument> {
        const menus: IMenuDocument[] = await this.menuModel.aggregate([{
            $match: { "_id": new ObjectID(menuId) },
        }, {
            $limit: 1,
        }, {
            $lookup: {
                "from": "menu_items",
                localField: "_id",
                foreignField: "menuId",
                as: "menuItems"
            }
        }]) as IMenuDocument[];

        if (!menus.length) {
            throw new NotFoundException();
        }

        const menu = menus[0] as any;
        menu.menuItems = nestedSetData(menu.menuItems);

        return menu;
    }

    /**
     * Get a all menu
     *
     */
    async getAll (): Promise<IMenuDocument[]> {
        const menus: IMenuDocument[] = await this.menuModel.aggregate([{ '$lookup': {
                from: 'menu_items',
                let: { menuId: "$_id", },
                pipeline: [
                    { $match:
                            { $expr:
                                    { $and:
                                            [
                                                { $eq: [ "$menuId",  "$$menuId" ] },
                                                { $eq: [ "$depth", 1 ] }
                                            ]
                                    }
                            }
                    }
                ],
                as: 'menuItems'
            }
        }
        ]) as IMenuDocument[];

        return menus;
    }

    async destroy(menuId: ObjectID): Promise<void> {
        const menu = await this.menuModel.findById(menuId);

        if (!menu) {
            throw new NotFoundException();
        }

        await menu.deleteOne();

        const menuItem = new this.menuItemModel() as any;
        menuItem.delete({ menuId: new ObjectID(menuId) });
    }
}
