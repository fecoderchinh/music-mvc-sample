export const extensionImage = (value, helpers) => {
    const allowExtension = ['png', 'jpg', 'jpeg', 'gif'];
    const splices = value.split('.');
    const extension = splices[splices.length - 1];
    if (allowExtension.indexOf(extension) === -1) {
        return helpers.message('Ảnh không đúng định dạng');
    }
    return value;
};