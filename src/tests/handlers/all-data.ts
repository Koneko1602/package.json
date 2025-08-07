import {db} from "../../db/memory.db";
import { Request, Response} from "express";

export function deleteAllDataHandler(req: Request, res: Response) {


    db.Blog.length = 0;
    db.Post.length = 0;
    res.sendStatus(204);
}