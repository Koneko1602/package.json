import {ResourceType} from "../../core/types/resource-type";
export type PostCreateInput = {
    data: {
        type: ResourceType.Posts;
        attributes: {
            title: string;
            shortDescription: string;
            content: string;
            blogId: string;
          //  blogName: string;

        };
    };
};