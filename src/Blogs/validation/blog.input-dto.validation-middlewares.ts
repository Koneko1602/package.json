import { body } from 'express-validator';

const nameValidation = body('name')
    .isString()
    .withMessage('name should be string')
    .trim()
    .isLength({ min: 1, max: 15 })
    .withMessage('Length of name is not correct');

const description = body('description')
    .isString()
    .withMessage('description should be string')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Length of description is not correct');

const websiteUrl = body('websiteUrl')
    .isString()
    .withMessage('URL should be string')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Length of URL is not correct')
    .isURL();
export const BlogInputDtoValidation = [
    nameValidation,
    description,
    websiteUrl,

];

