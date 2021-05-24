import { ApiProperty } from "@nestjs/swagger";

export class ConditionResponse {
    constructor(object: any) {
        this.field = object.field ?? null;
        this.condition = object.condition ?? null;
        this.value = object.value ?? null;
    }

    @ApiProperty()
    readonly field: string;

    @ApiProperty()
    readonly condition: string;

    @ApiProperty()
    readonly value: string;
}
