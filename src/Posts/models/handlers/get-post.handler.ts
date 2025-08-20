import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {postRepository} from "../../repository/PostRepository";
import {mapToPostViewModel} from "../routers/mappers/map-to-post-view-model.util";
import {createErrorsMessages} from "../../../Blogs/dto/FieldError";

export async function getPostHandler (req: Request, res: Response) {
    try{
        const id = req.params.id;
        const post = await postRepository.findById(id);
        if (!post) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorsMessages([{field: 'id', message: 'Post not found'}]),
                );
            return;
        }
        const postViewModel = mapToPostViewModel(post);
        res.status(HttpStatus.Ok).send(postViewModel);
    } catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
