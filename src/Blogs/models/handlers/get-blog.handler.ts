import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import { createErrorsMessages } from "../../dto/FieldError";
import { mapToBlogViewModel} from "../routers/mappers/map-to-blog-view-model.util";
import {blogRepository} from "../../repository/BlogRepository";

export async function getBlogHandler (req: Request, res: Response) {
    try{
        const id = req.params.id;
        const blog = await blogRepository.findById(id);
        if (!blog) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorsMessages([{field: 'id', message: 'Blog not found'}]),
                );
            return;
        }
        const blogViewModel = mapToBlogViewModel(blog);
        res.status(HttpStatus.Ok).send(blogViewModel);
    } catch (e: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
    }
}
