import { Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {Post} from "../PostModel";
import {mapToPostViewModel} from "../routers/mappers/map-to-post-view-model.util";
import {postRepository} from "../../repository/PostRepository";
import {PostInput} from "../../dto/post.input";
import { blogRepository } from "../../../Blogs/repository/BlogRepository";



export  async function createPostHandler(
    req: Request<{},{},PostInput>,
    res: Response,
)  {
    try {
        const attributes = req.body.data.attributes;
        const blog= await blogRepository.findById(attributes.blogId);
        if (!blog) {
             res.status(HttpStatus.NotFound).send({ error: 'Blog not found' });
             return;
        }
        const newPost: Post = {
            title: attributes.title,
            shortDescription: attributes.shortDescription,
            content: attributes.content,
            blogId: blog._id.toString(),
            blogName: blog.name,
            isMembership: false,
        };
        const createdPost = await postRepository.create(newPost);
        const postViewModel = mapToPostViewModel(createdPost);
        res.status(HttpStatus.Created).send(postViewModel);
    }
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
