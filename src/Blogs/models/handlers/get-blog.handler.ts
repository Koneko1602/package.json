import { Request, Response} from "express";
import { db } from "../../../db/memory.db";
import { createErrorsMessages } from "../../dto/FieldError";

export function getBlogHandler (req: Request, res: Response) {

        const id: string  = req.params.id;
        const blog = db.Blog.find((d) => d.id === id);
        if (!blog) {
            res
                .status(404)
                .send(
                    createErrorsMessages([{field: 'id', message: 'Blog not found'}]),
                );
            return;
        }
        res.status(200).send(blog);
    }
