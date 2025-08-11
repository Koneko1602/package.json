import {Router} from "express";
import {getPostListHandler} from "../handlers/get-post-list.handler";
import {idValidation} from "../../../Blogs/validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../../Blogs/validation/input-validation-result.middleware";
import {getPostHandler} from "../handlers/get-post.handler";
import {superAdminGuardMiddleware} from "../../../Authorization/super-admin.guard-middleware";
import {createPostHandler} from "../handlers/create-post.handler";
import {updatePostHandler} from "../handlers/update-post.handler";
import {deletePostHandler} from "../handlers/delete-post.handler";

export const PostRouter = Router ({});

PostRouter
    .get('', getPostListHandler)

    .get(
        '/:id',
        idValidation,
        inputValidationResultMiddleware,
        getPostHandler,

    )

    .post(
        '',
        superAdminGuardMiddleware,
        inputValidationResultMiddleware,
        createPostHandler,



    )

    .put(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        updatePostHandler,

    )

    .delete('/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        deletePostHandler,

    );