import { Request, Response} from "express";
import { BlogInputModel } from "../BlogModel";
import { createErrorsMessages } from "../../dto/FieldError";
import { db } from "../../../db/memory.db";
import {ValidationInputModel} from "../../validation/ValidationInputModel";


export function updateBlogHandler (
    req: Request <{id: string}, {}, BlogInputModel>,
    res: Response,
){


    const id: string  = req.params.id;
    const index = db.Blog.findIndex((v) => v.id === id);
    if (index=== -1){
        res
            .status(404)
            .send(
                createErrorsMessages([{field: 'id', message: 'Blog not found'}]),
            );
    return;
    }

    const errors = ValidationInputModel(req.body);
    if (errors.length > 0){

        res.status(400).send(createErrorsMessages(errors));
        return;
    }
    const blog = db.Blog[index];

        blog.name = req.body.name;
        blog.description = req.body.description;
        blog.websiteUrl = req.body.websiteUrl;

    res.sendStatus(204); // нет контента, успешно

}

