import {WithId} from "mongodb";
import {Blog} from "../../BlogModel";
import {BlogListOutput} from "../../../dto/blog-list.output";
import {ResourceType} from "../../../../core/types/resource-type";


export function mapToBlogListViewModelUtil(blogs: WithId<Blog>[]): BlogListOutput {
    return {
        meta:{},
        data: blogs.map(blog =>({
            type: ResourceType.Blogs,
            id: blog._id.toString(),
            attributes: {
                name: blog.name,
                description: blog.description,
                websiteUrl: blog.websiteUrl,
                createdAt: blog.createdAt,
            },
        })),
    };
}