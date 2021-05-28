export abstract class AbstractResponse {
    protected handleHiddenFields(hiddenFields) {
        hiddenFields.forEach(field => {
            delete this[field];
        });
    }
}
