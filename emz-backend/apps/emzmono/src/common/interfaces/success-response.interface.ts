import { IResponse } from "./response.interface";

export class ResponseSuccess implements IResponse{
    constructor (data: any) {
        this.data = data;
    };
    data: any[];
}