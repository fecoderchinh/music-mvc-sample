import { ADD_PRODUCT_TYPE, CONDITION_OPERATOR, CONDITION_FIELDS, CONDITIONS } from '../enums/category.enum';

export const extensionImage = (value, helpers) => {
    const allowExtension = ['png', 'jpg', 'jpeg', 'gif'];
    const splices = value.split('.');
    const extension = splices[splices.length - 1];
    if (allowExtension.indexOf(extension) === -1) {
        return helpers.message('Ảnh không đúng định dạng');
    }
    return value;
};

export const addProductType = (value, helpers) => {
    if (ADD_PRODUCT_TYPE.indexOf(value) === -1) {
        return helpers.message('Cách thêm sản phẩm không hợp lệ');
    }
    return value;
};

export const conditionOperator = (value, helpers) => {
    if (CONDITION_OPERATOR.indexOf(value) === -1) {
        return helpers.message('Toán tử điều kiện không hợp lệ');
    }
    return value;
};

export const conditionField = (value, helpers) => {
    if (CONDITION_FIELDS.indexOf(value) === -1) {
        return helpers.message('Điều kiện tìm kiếm không hợp lệ');
    }
    return value;
};

export const allowCondition = (value, helpers) => {
    if (Object.keys(CONDITIONS).indexOf(value) === -1) {
        return helpers.message('Điều kiện không hợp lệ');
    }
    return value;
};
