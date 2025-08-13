import { ResourceType} from "../../core/types/resource-type";

export type PostUpdateInput = {
    data: {
        type: ResourceType.Blogs;
        id: string;
        attributes: {
            title: string;             // макс. 30 символов
            shortDescription: string;  // макс. 100 символов
            content: string;           // макс. 1000 символов
            blogId: string;
        };
    };
};