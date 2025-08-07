import { Request, Response} from "express";
import { db } from "../../../db/memory.db";

export function getPostListHandler(req: Request, res: Response) {
    res.send(db.Post);
}