"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationInputModel = void 0;
const ValidationInputModel = (data) => {
    const errors = [];
    if (!data.name ||
        typeof data.name !== 'string' ||
        data.name.trim().length < 1 ||
        data.name.trim().length > 15) {
        errors.push({ field: 'name', message: 'Invalid name' });
    }
    if (!data.description ||
        typeof data.description !== 'string' ||
        data.description.trim().length < 1 ||
        data.description.trim().length > 500) {
        errors.push({ field: 'description', message: 'Invalid description' });
    }
    const urlPattern = new RegExp("^https://([a-zA-Z0-9_-]+\\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$");
    if (!data.websiteUrl ||
        typeof data.websiteUrl !== 'string' ||
        data.websiteUrl.trim().length < 1 ||
        data.websiteUrl.trim().length > 100 ||
        !urlPattern.test(data.websiteUrl)) {
        errors.push({ field: 'websiteUrl', message: 'Invalid websiteUrl' });
    }
    return errors;
};
exports.ValidationInputModel = ValidationInputModel;
