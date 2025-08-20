import {WithId} from 'mongodb';
import {Blog} from "../../BlogModel";
import {BlogOutput} from "../../../dto/blog.output";
import {ResourceType} from "../../../../core/types/resource-type";


export function mapToBlogViewModel(blog: WithId<Blog>): BlogOutput {
    return {
        data: {
            type: ResourceType.Blogs,
            id: blog._id.toString(),
            attributes: {
                name: blog.name,
                description: blog.description,
                websiteUrl: blog.websiteUrl,
                createdAt: blog.createdAt,
            },
        },
    };
}