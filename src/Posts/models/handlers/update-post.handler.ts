import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {PostUpdateInput} from "../../dto/post-update.input";
import {postRepository} from "../../repository/PostRepository";
import {createErrorsMessages} from "../../../Blogs/dto/FieldError";


export async function updatePostHandler (
    req: Request <{id: string}, {}, PostUpdateInput>,
    res: Response,
){
    try {

        const id: string = req.params.id;
        const post = postRepository.findById(id);


        if (!post) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorsMessages([{field: 'id', message: 'Post not found '}]),
                );
            return;
        }
        await postRepository.update(id, req.body.data.attributes)
        res.sendStatus(HttpStatus.NoContent);
    } catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
