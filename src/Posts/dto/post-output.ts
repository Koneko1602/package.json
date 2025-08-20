import { ResourceType} from "../../core/types/resource-type";

export type PostOutput = {
    data: {
        type: ResourceType.Posts;
        id: string;
        attributes: {
            title: string;
            shortDescription: string;
            content: string;
            blogId: string;
            blogName: string;
        };


    }
};