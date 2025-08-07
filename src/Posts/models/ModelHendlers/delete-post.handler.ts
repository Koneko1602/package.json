import { Request, Response} from "express";
import { db } from "../../../db/memory.db";
import {createErrorsMessages} from "../../../Blogs/dto/FieldError";

export function deletePostHandler(req: Request, res: Response) {
    const  id  = req.params.id;
    const index = db.Post.findIndex((v) => v.id === id);


    if (index !== -1) {
        db.Post.splice(index, 1); // Удаляет элемент из массива
        res.status(204).send();
    } else {

        res.status(404).send( createErrorsMessages([{ field: 'id', message: 'Post not found'}]));

    }
}

