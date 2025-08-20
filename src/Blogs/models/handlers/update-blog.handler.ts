import { Request, Response} from "express";

import { createErrorsMessages } from "../../dto/FieldError";

import {blogRepository} from "../../repository/BlogRepository";
import {HttpStatus} from "../../../core/types/http-statuses";

import {BlogInputModel} from "../BlogModel";


export async function updateBlogHandler (
    req: Request <{id: string}, {}, BlogInputModel>,
    res: Response,
){
    try {

        const id: string = req.params.id;
        const blog = blogRepository.findById(id);


        if (!blog) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorsMessages([{field: 'id', message: 'Blog not found '}]),
                );
            return;
        }
        await blogRepository.update(id, req.body )
        res.sendStatus(HttpStatus.NoContent);
    } catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}