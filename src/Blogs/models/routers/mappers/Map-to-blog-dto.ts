import {WithId} from "mongodb";
import {Blog} from "../../BlogModel";
import {BlogDTO} from "../../../dto/BlogModelDTO";

export const mapToBlogDto = (blog: WithId<Blog>): BlogDTO => ({
    id: blog._id.toString(),
    name: blog.name,
    description: blog.description,
    websiteUrl: blog.websiteUrl,
    createdAt: blog.createdAt,
    isMembership: blog.isMembership,
});
