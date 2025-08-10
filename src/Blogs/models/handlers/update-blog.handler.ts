import { Request, Response} from "express";

import { createErrorsMessages } from "../../dto/FieldError";

import {blogRepository} from "../../repository/BlogRepository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {BlogUpdateInput} from "../../dto/blog-update.input";


export async function updateBlogHandler (
    req: Request <{id: string}, {}, BlogUpdateInput>,
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
    await blogRepository.update(id, req.body.data.attributes)
    res.sendStatus(HttpStatus.NoContent);
} catch (e: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
}
}
