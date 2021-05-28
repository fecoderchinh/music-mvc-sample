export const CONDITION_OPERATOR_AND = 'AND';
export const CONDITION_OPERATOR_OR = 'OR';

export const CONDITION_OPERATOR = [CONDITION_OPERATOR_AND, CONDITION_OPERATOR_OR];

export const CONDITION_EQUAL = 'EQUAL';
export const CONDITION_LIKE = 'LIKE';
export const CONDITION_LIKE_START = 'LIKE_START';
export const CONDITION_LIKE_END = 'LIKE_END';
export const CONDITION_NOT_EQUAL = 'NOT_EQUAL';

export const CONDITIONS = {
    [CONDITION_EQUAL]: { $eq: 'KEYWORD'},
    [CONDITION_LIKE]: {$regex: 'KEYWORD', $options: 'uis'},
    [CONDITION_LIKE_START]: {$regex: '^KEYWORD', '$options': 'uis'},
    [CONDITION_LIKE_END]: {$regex: 'KEYWORD$', $options: 'uis'},
    [CONDITION_NOT_EQUAL]: { $ne: 'KEYWORD'},
};