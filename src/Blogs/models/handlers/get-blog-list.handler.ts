import { Request, Response} from "express";
import { db } from "../../../db/memory.db";

export function getBlogListHandler(req: Request, res: Response) {
    res.send(db.Blog);
}