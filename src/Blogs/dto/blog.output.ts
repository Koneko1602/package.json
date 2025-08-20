import { ResourceType} from "../../core/types/resource-type";

export type BlogOutput = {
    data: {
        type: ResourceType.Blogs;
        id: string;
        attributes: {
            name: string;         // макс. 15 символов
            description: string;  // макс. 500 символов
            websiteUrl: string;
            createdAt : Date;
        };


    }
};