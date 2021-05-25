interface SearchCategoryDto {
    isPublished: boolean;
    addProductType: string;
    keyword; string
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

        console.log('this.query', this.query, addProductType);
        if (isPublished !== '') {
            builder.push({ isPublished: { $eq: isPublished} })
        }

        if (addProductType !== '') {
            builder.push({ addProductType: { $eq: addProductType.toString() } });
        }

        if (keyword !== '') {
            builder.push({ name: { $regex: keyword.toString(), $option: 'i' }});
        }

        return builder;
    }
}
