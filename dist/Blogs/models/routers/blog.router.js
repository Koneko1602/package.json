"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRouter = void 0;
const get_blog_list_handler_1 = require("../handlers/get-blog-list.handler");
const params_id_validation_middleware_1 = require("../../validation/params-id.validation-middleware");
const input_validation_result_middleware_1 = require("../../validation/input-validation-result.middleware");
const create_blog_handler_1 = require("../handlers/create-blog.handler");
const get_blog_handler_1 = require("../handlers/get-blog.handler");
const update_blog_handler_1 = require("../handlers/update-blog.handler");
const delete_blog_handler_1 = require("../handlers/delete-blog.handler");
const super_admin_guard_middleware_1 = require("../../../Authorization/super-admin.guard-middleware");
const express_1 = require("express");
exports.BlogRouter = (0, express_1.Router)({});
exports.BlogRouter
    .get('', get_blog_list_handler_1.getBlogListHandler)
    .get('/:id', params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, get_blog_handler_1.getBlogHandler)
    .post('', super_admin_guard_middleware_1.superAdminGuardMiddleware, input_validation_result_middleware_1.inputValidationResultMiddleware, create_blog_handler_1.createBlogHandler)
    .put('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, update_blog_handler_1.updateBlogHandler)
    .delete('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, delete_blog_handler_1.deleteBlogHandler);
