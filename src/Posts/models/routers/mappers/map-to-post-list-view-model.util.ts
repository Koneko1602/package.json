import {WithId} from "mongodb";

import {ResourceType} from "../../../../core/types/resource-type";
import {Post} from "../../PostModel";
import {PostListOutput} from "../../../dto/post-list.output";


export function mapToPostListViewModelUtil(posts: WithId<Post>[]): PostListOutput {
    return {
        meta:{},
        data: posts.map(post =>({
            type: ResourceType.Posts,
            id: post._id.toString(),
            attributes: {
                title: post.title,
                shortDescription: post.shortDescription,
                content: post.content,
                blogId: post.blogId,
                blogName: post.blogName,
            },
        })),
    };
}