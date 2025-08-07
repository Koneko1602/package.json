import {Router} from "express";
import {getPostListHandler} from "../ModelHendlers/get-post-list.handler";
import {idValidation} from "../../../Blogs/validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../../Blogs/validation/input-validation-result.middleware";
import {getPostHandler} from "../ModelHendlers/get-post.handler";
import {superAdminGuardMiddleware} from "../../../Authorization/super-admin.guard-middleware";
import {createPostHandler} from "../ModelHendlers/create-post.handler";
import {updatePostHandler} from "../ModelHendlers/update-post.handler";
import {deletePostHandler} from "../ModelHendlers/delete-post.handler";

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