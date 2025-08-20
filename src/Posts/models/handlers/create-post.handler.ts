import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {Post, PostInputModel} from "../PostModel";
import {postRepository} from "../../repository/PostRepository";
import { blogRepository } from "../../../Blogs/repository/BlogRepository";



export  async function createPostHandler(
    req: Request<{},{},PostInputModel>,
    res: Response,
)  {
    try {

        const blog= await blogRepository.findById(req.body.blogId);
        if (!blog) {
             res.status(HttpStatus.NotFound).send({ error: 'Blog not found' });
             return;
        }
        const newPost: Post = {
            title:req.body.title,
            shortDescription: req.body.shortDescription,
            content: req.body.content,
            blogId: blog._id.toString(),
            blogName: blog.name,
            isMembership: false,
        };
        const createdPost = await postRepository.create(newPost);

        res.status(HttpStatus.Created).send(createdPost);
    }
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
