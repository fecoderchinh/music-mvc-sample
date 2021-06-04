interface SearchCategoryDto {
    isPublished: boolean;
    addProductType: string;
    keyword; string;
    ids?; Array;
}

export class CategoryCriteria {
    query: SearchCategoryDto;

    constructor(query: any) {
        this.query = query as SearchCategoryDto;
    }

    handle() {
        const builder = [];
        const isPublished = this.query.isPublished || '';
        const addProductType = this.query.addProductType || '';
        const keyword = this.query.keyword || '';
        const ids = this.query.ids || [];

        if (isPublished !== '') {
            builder.push({ isPublished: { $eq: isPublished} })
        }

        if (addProductType !== '') {
            builder.push({ addProductType: { $eq: addProductType.toString() } });
        }

        if (keyword !== '') {
            builder.push({ name: { $regex: keyword.toString(), $options: 'i' }});
        }

        if (ids.length) {
            builder.push({ _id: { $in: ids }});
        }

        return builder;
    }
}
