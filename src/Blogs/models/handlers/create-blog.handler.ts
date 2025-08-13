import { Request, Response} from "express";
import {BlogInputModel, Blog} from "../BlogModel";
import {BlogInput} from "../../dto/blog.input";
import {blogRepository} from "../../repository/BlogRepository";
import {mapToBlogViewModel} from "../routers/mappers/map-to-blog-view-model.util";
import {HttpStatus} from "../../../core/types/http-statuses";


export  async function createBlogHandler(
    req: Request<{},{},BlogInput>,
    res: Response,
) {
    try {

        const attributes = req.body.data.attributes;
        const newBlog: Blog = {
            name: attributes.name,
            description: attributes.description,
            websiteUrl: attributes.websiteUrl,
            createdAt: new Date(),
            isMembership: false,
        };
        const createdBlog = await blogRepository.create(newBlog);
        const blogViewModel = mapToBlogViewModel(createdBlog);
        res.status(HttpStatus.Created).send(blogViewModel);
    }
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
