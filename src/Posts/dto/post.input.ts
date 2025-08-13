import { PostAttributes } from "./post-attributes";
import { ResourceType } from "../../core/types/resource-type";




export type PostInput = {
    data: {
        type:ResourceType.Posts;
        attributes: PostAttributes;
    }
}