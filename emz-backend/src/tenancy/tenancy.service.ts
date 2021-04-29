import { Inject, Injectable, Scope } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class TenancyConnectionConfigService implements MongooseOptionsFactory {
    constructor(
        @Inject(REQUEST) private readonly request: Request) {
            
    }

    createMongooseOptions(): MongooseModuleOptions {
        const tenantId: string = this.request.headers['x-tenant-id']
        console.log(tenantId)
        return {
            connectionName: 'tenant_connection',
            uri: 'mongodb://localhost:27017/' + tenantId
        };
    }
}