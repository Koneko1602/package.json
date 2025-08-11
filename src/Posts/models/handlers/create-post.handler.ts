import { Request, Response} from "express";

import {HttpStatus} from "../../../core/types/http-statuses";
import {Post} from "../PostModel";
import {mapToPostViewModel} from "../routers/mappers/map-to-post-view-model.util";
import {postRepository} from "../../repository/PostRepository";
import {PostInput} from "../../dto/post.input";


export  async function createPostHandler(
    req: Request<{},{},PostInput>,
    res: Response,
) {
    try {

        const attributes = req.body.data.attributes;
        const newPost: Post = {
            title: attributes.title,
            shortDescription: attributes.shortDescription,
            content: attributes.content,
            blogId: attributes.blogId,
            blogName: attributes.blogName,
        };
        const createdPost = await postRepository.create(newPost);
        const postViewModel = mapToPostViewModel(createdPost);
        res.status(HttpStatus.Created).send(postViewModel);
    }
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}
