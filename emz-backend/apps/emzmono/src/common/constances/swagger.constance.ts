import { ApiHeaderOptions } from "@nestjs/swagger";

export const TenantHaders: ApiHeaderOptions = {
    name: 'x-tenant-id',
    description: 'Tenant ID Header',
}