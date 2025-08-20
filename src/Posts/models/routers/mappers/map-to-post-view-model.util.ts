import {WithId} from 'mongodb';
import {ResourceType} from "../../../../core/types/resource-type";
import {Post} from "../../PostModel";
import {PostOutput} from "../../../dto/post-output";


export function mapToPostViewModel(post: WithId<Post>): PostOutput {
    return {
        data: {
            type: ResourceType.Posts,
            id: post._id.toString(),
            attributes: {
                title: post.title,
                shortDescription: post.shortDescription,
                content: post.content,
                blogId: post.blogId,
                blogName: post.blogName,
            },
        },
    };
}