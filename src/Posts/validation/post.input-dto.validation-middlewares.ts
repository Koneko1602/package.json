import { body } from 'express-validator';

const titleValidation = body('title')
    .isString()
    .withMessage('title should be string')
    .trim()
    .isLength({ min: 0, max: 30 })
    .withMessage('Length of name is not correct');

const shortDescription = body('shortDescription')
    .isString()
    .withMessage('shortDescription should be string')
    .trim()
    .isLength({ min: 0, max: 100 })
    .withMessage('Length of shortDescription is not correct');

const content = body('content')
    .isString()
    .withMessage('content should be string')
    .trim()
    .isLength({ min: 0, max: 1000 })
    .withMessage('Length of content is not correct');

const blogId = body('blogId')
    .isString()
    .withMessage('blogId should be string')
    .trim()
    .matches(/^[0-9a-fA-F]{24}$/)
    .withMessage('blogId must be a valid MongoDB ObjectId');


export const PostInputDtoValidation = [
    titleValidation,
    shortDescription,
    content,
    blogId,

];

