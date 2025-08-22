import {WithId} from "mongodb";
import {Post} from "../../PostModel";
import {postModelDto} from "../../../dto/PostModelDto";

export const MapToPostDto = (post: WithId<Post>): postModelDto => ({
    id: post._id.toString(),
    title: post.title,
    shortDescription: post.shortDescription,
    content: post.content,
    blogId: post.blogId,
    blogName: post.blogName,
    createdAt: post.createdAt,
    isMembership: post.isMembership,
});
