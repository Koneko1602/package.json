import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import { createErrorsMessages } from "../../dto/FieldError";
import {blogRepository} from "../../repository/BlogRepository";
import {toBlogDto} from "../../dto/toDTO";

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

        res.status(HttpStatus.Ok).send(toBlogDto(blog));
    } catch (e: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
    }
}
