import { Request, Response} from "express";
import {Blog, BlogInputModel} from "../BlogModel";
import {blogRepository} from "../../repository/BlogRepository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {mapToBlogDto} from "../routers/mappers/Map-to-blog-dto";




export  async function createBlogHandler(
    req: Request<{},{},BlogInputModel>,
    res: Response,
) {
    try {

        const newBlog: Blog = {
            name: req.body.name,
            description: req.body.description,
            websiteUrl: req.body.websiteUrl,
            createdAt: new Date(),
            isMembership: false,
        };
        const createdBlog = await blogRepository.create(newBlog);

        res.status(HttpStatus.Created).send(mapToBlogDto(createdBlog));
    }
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}