import { Request, Response} from "express";
import { db } from "../../../db/memory.db";
import {createErrorsMessages} from "../../../Blogs/dto/FieldError";


export function getPostHandler (req: Request, res: Response) {

    const id: string  = req.params.id;
    const post = db.Post.find((d) => d.id === id);
    if (!post) {
        res
            .status(404)
            .send(
                createErrorsMessages([{field: 'id', message: 'Post not found'}]),
            );
        return;
    }
    res.status(200).send(post);
}
