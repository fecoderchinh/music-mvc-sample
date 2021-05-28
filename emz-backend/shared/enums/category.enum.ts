export const PUBLISHED = true;
export const UNPUBLISHED = false;

export const ADD_PRODUCT_MANUAL = 'MANUAL';
export const ADD_PRODUCT_AUTO = 'AUTO';

export const ADD_PRODUCT_TYPE = [ADD_PRODUCT_MANUAL, ADD_PRODUCT_AUTO];

export const CONDITION_OPERATOR_AND = 'AND';
export const CONDITION_OPERATOR_OR = 'OR';

export const CONDITION_OPERATOR = [CONDITION_OPERATOR_AND, CONDITION_OPERATOR_OR];
export const CONDITION_PRODUCT_NAME_FIELD = 'product_name';
export const CONDITION_PRODUCT_PRICE_FIELD = 'product_price';
export const CONDITION_PRODUCT_BRANCH_FIELD = 'product_branch';
export const CONDITION_PRODUCT_CATEGORY_FIELD = 'product_category';
export const CONDITION_PRODUCT_TAG_FIELD = 'product_tag';
export const CONDITION_PRODUCT_QUANTITY_FIELD = 'product_quantity';
export const CONDITION_FIELDS = [
    CONDITION_PRODUCT_NAME_FIELD,
    CONDITION_PRODUCT_PRICE_FIELD,
    CONDITION_PRODUCT_BRANCH_FIELD,
    CONDITION_PRODUCT_CATEGORY_FIELD,
    CONDITION_PRODUCT_TAG_FIELD,
    CONDITION_PRODUCT_QUANTITY_FIELD,
];

export const CONDITION_EQUAL = 'EQUAL';
export const CONDITION_LIKE = 'LIKE';
export const CONDITION_LIKE_START = 'LIKE_START';
export const CONDITION_LIKE_END = 'LIKE_END';
export const CONDITION_NOT_EQUAL = 'NOT_EQUAL';
export const CONDITION_GREATER = 'GREATER';
export const CONDITION_LESS = 'LESS';
export const CONDITIONS = {
    [CONDITION_EQUAL]: { $eq: 'KEYWORD'},
    [CONDITION_LIKE]: {$regex: 'KEYWORD', $options: 'uis'},
    [CONDITION_LIKE_START]: {$regex: '^KEYWORD', $options: 'uis'},
    [CONDITION_LIKE_END]: {$regex: 'KEYWORD$', $options: 'uis'},
    [CONDITION_NOT_EQUAL]: { $ne: 'KEYWORD'},
    [CONDITION_GREATER]: { $gt: 'KEYWORD'},
    [CONDITION_LESS]: { $lt: 'KEYWORD'},
};
