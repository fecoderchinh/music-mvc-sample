import {
    CONDITION_EQUAL, CONDITION_EQUAL_NUM,
    CONDITION_GREATER,
    CONDITION_LESS,
    CONDITION_LIKE,
    CONDITION_LIKE_END,
    CONDITION_LIKE_START,
    CONDITION_NOT_EQUAL,
    CONDITION_PRODUCT_BRAND_FIELD,
    CONDITION_PRODUCT_CATEGORY_FIELD,
    CONDITION_PRODUCT_NAME_FIELD,
    CONDITION_PRODUCT_PRICE_FIELD,
    CONDITION_PRODUCT_QUANTITY_FIELD,
    CONDITION_PRODUCT_TAG_FIELD
} from "../enums/category.enum";

export const validConditionByField = (obj, helpers) => {
    const { field, condition } = obj;

    switch (field) {
        case CONDITION_PRODUCT_NAME_FIELD:
            if ([CONDITION_EQUAL, CONDITION_LIKE, CONDITION_LIKE_START, CONDITION_LIKE_END, CONDITION_NOT_EQUAL].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm tên sản phẩm không phù hợp');
            }
            break;
        case CONDITION_PRODUCT_PRICE_FIELD:
            if ([CONDITION_EQUAL_NUM, CONDITION_GREATER, CONDITION_LESS].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm branch không phù hợp');
            }
            break;
        case CONDITION_PRODUCT_BRAND_FIELD:
            if ([CONDITION_EQUAL, CONDITION_LIKE, CONDITION_LIKE_START, CONDITION_LIKE_END, CONDITION_NOT_EQUAL].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm branch không phù hợp');
            }
            break;
        case CONDITION_PRODUCT_CATEGORY_FIELD:
            if ([CONDITION_EQUAL, CONDITION_LIKE, CONDITION_LIKE_START, CONDITION_LIKE_END, CONDITION_NOT_EQUAL].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm danh mục không phù hợp');
            }
            break;
        case CONDITION_PRODUCT_TAG_FIELD:
            if ([CONDITION_EQUAL, CONDITION_LIKE, CONDITION_LIKE_START, CONDITION_LIKE_END, CONDITION_NOT_EQUAL].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm tag không phù hợp');
            }
            break;
        case CONDITION_PRODUCT_QUANTITY_FIELD:
            if ([CONDITION_EQUAL_NUM, CONDITION_GREATER, CONDITION_LESS].indexOf(condition) === -1) {
                return helpers.message('Điều kiện tìm kiếm số lượng không phù hợp');
            }
            break;
    }

    return obj;
};
