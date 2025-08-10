import { ResourceType} from "../../core/types/resource-type";

export type BlogUpdateInput = {
    data: {
        type: ResourceType.Blogs;
        id: string;
        attributes: {
            name: string;
            description: string;
            websiteUrl: string;
        };
    };
};