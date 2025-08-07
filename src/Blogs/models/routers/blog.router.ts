
import {getBlogListHandler} from "../handlers/get-blog-list.handler";
import {idValidation} from "../../validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../validation/input-validation-result.middleware";
import {createBlogHandler} from "../handlers/create-blog.handler";
import {getBlogHandler} from "../handlers/get-blog.handler";
import {updateBlogHandler} from "../handlers/update-blog.handler";
import {deleteBlogHandler} from "../handlers/delete-blog.handler";
import {superAdminGuardMiddleware} from "../../../Authorization/super-admin.guard-middleware";
import {Router} from "express";


export const BlogRouter = Router ({});

BlogRouter
    .get('', getBlogListHandler)

    .get(
        '/:id',
        idValidation,
        inputValidationResultMiddleware,
        getBlogHandler,

    )

    .post(
        '',
        superAdminGuardMiddleware,
        inputValidationResultMiddleware,
        createBlogHandler,



    )

    .put(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        updateBlogHandler,

    )

    .delete('/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        deleteBlogHandler,

    );