import { Request, Response} from "express";
import { db } from "../../../db/memory.db";
import {PostInputModel} from "../PostModel";
import {createErrorsMessages} from "../../../Blogs/dto/FieldError";
import {ValidationInputPost} from "../../validation/ValidationInputPost";



export function updatePostHandler (
    req: Request <{id: string}, {}, PostInputModel>,
    res: Response,
){


    const id: string  = req.params.id;
    const index = db.Post.findIndex((v) => v.id === id);
    if (index=== -1){
        res
            .status(404)
            .send(
                createErrorsMessages([{field: 'id', message: 'Blog not found'}]),
            );
        return;
    }

    const blog = db.Blog.find((b) => b.id === req.body.blogId);
    if (!blog) {
         res.status(400).send(
            createErrorsMessages([
                { field: "blogId", message: "Blog with this ID does not exist" },
            ])
        );
         return;
    }
    const errors = ValidationInputPost(req.body);
    if (errors.length > 0){

        res.status(400).send(createErrorsMessages(errors));
        return;
    }
    const post = db.Post[index];
        post.blogId = req.body.blogId,
        post.title = req.body.title,
        post.shortDescription = req.body.shortDescription,
        post.content = req.body.content



    res.sendStatus(204); // нет контента, успешно

}

