import {BlogAttributes} from "./blog-attributes";
import {ResourceType} from "../../core/types/resource-type";

export type BlogInput = {
    data: {
        type:ResourceType.Blogs;
        attributes: BlogAttributes;
    }
}