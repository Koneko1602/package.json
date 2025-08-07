"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationInputPost = void 0;
const ValidationInputPost = (data) => {
    const errors = [];
    if (!data.title ||
        typeof data.title !== 'string' ||
        data.title.trim().length < 1 ||
        data.title.trim().length > 30) {
        errors.push({ field: 'title', message: 'Invalid string' });
    }
    if (!data.shortDescription ||
        typeof data.shortDescription !== 'string' ||
        data.shortDescription.trim().length < 1 ||
        data.shortDescription.trim().length > 100) {
        errors.push({ field: 'shortDescription', message: 'Invalid shortDescription' });
    }
    if (!data.content ||
        typeof data.content !== 'string' ||
        data.content.trim().length < 1 ||
        data.content.trim().length > 1000) {
        errors.push({ field: 'content', message: 'Invalid content' });
    }
    return errors;
};
exports.ValidationInputPost = ValidationInputPost;
