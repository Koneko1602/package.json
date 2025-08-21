import {WithId} from "mongodb";
import {Blog} from "../models/BlogModel";
import {BlogDTO} from "./BlogModelDTO";

export const toBlogDto = (blog: WithId<Blog>): BlogDTO => ({
    id: blog._id.toString(),
    name: blog.name,
    description: blog.description,
    websiteUrl: blog.websiteUrl,
    createdAt: blog.createdAt,
    isMembership: blog.isMembership,
});
