"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = require("express");
const get_post_list_handler_1 = require("../ModelHendlers/get-post-list.handler");
const params_id_validation_middleware_1 = require("../../../Blogs/validation/params-id.validation-middleware");
const input_validation_result_middleware_1 = require("../../../Blogs/validation/input-validation-result.middleware");
const get_post_handler_1 = require("../ModelHendlers/get-post.handler");
const super_admin_guard_middleware_1 = require("../../../Authorization/super-admin.guard-middleware");
const create_post_handler_1 = require("../ModelHendlers/create-post.handler");
const update_post_handler_1 = require("../ModelHendlers/update-post.handler");
const delete_post_handler_1 = require("../ModelHendlers/delete-post.handler");
exports.PostRouter = (0, express_1.Router)({});
exports.PostRouter
    .get('', get_post_list_handler_1.getPostListHandler)
    .get('/:id', params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, get_post_handler_1.getPostHandler)
    .post('', super_admin_guard_middleware_1.superAdminGuardMiddleware, input_validation_result_middleware_1.inputValidationResultMiddleware, create_post_handler_1.createPostHandler)
    .put('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, update_post_handler_1.updatePostHandler)
    .delete('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_middleware_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, delete_post_handler_1.deletePostHandler);
