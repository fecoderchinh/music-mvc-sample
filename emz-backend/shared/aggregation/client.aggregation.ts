import { ObjectID } from "mongodb";
interface SearchClientDto {
    ids?; Array;
}

export class ClientAggregation {
    query: SearchClientDto;

    constructor(query: any) {
        this.query = query as SearchClientDto;
    }

    build() {
        const builder = [];
        const ids = this.query.ids || [];

        if (ids.length) {
            builder.push({ _id: { $in: ids.map(id => new ObjectID(id)) }});
        }

        return builder;
    }
}
