import {ResourceType} from "../../core/types/resource-type";
export type BlogCreateInput = {
    data: {
        type: ResourceType.Blogs;
        attributes: {
            name: string;         // макс. 15 символов
            description: string;  // макс. 500 символов
            websiteUrl: string;   // макс. 100 символов, начинается с https://


        };
    };
};