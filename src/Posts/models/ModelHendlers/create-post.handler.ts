import { Request, Response } from "express";
import { createErrorsMessages } from "../../../Blogs/dto/FieldError";
import { db } from "../../../db/memory.db";
import { PostInputModel, PostViewModel } from "../PostModel";
import { ValidationInputPost } from "../../validation/ValidationInputPost";


export function createPostHandler(
    req: Request<{}, {}, PostInputModel>,
    res: Response,
) {
    const errors = ValidationInputPost(req.body);

    if (errors.length > 0) {
        res.status(400).send(createErrorsMessages(errors));
        return;
    }

    //  Проверка существования блога
    const blog = db.Blog.find((b) => b.id === req.body.blogId);
    if (!blog) {
        res.status(400).send(
            createErrorsMessages([
                { field: "blogId", message: "Blog with this ID does not exist" },
            ])
        );
        return;
    }

    const newPost: PostViewModel = {
        id: db.Post.length
            ? (Number(db.Post[db.Post.length - 1].id) + 1).toString()
            : "1",
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: blog.id,
        blogName: blog.name,
    };

    db.Post.push(newPost);
    res.status(201).send(newPost);
}