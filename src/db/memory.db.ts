import {BlogInputModel, Blog} from "../Blogs/models/BlogModel";
import {PostViewModel} from "../Posts/models/PostModel";
export const db = {
    Blog: <Blog[]>[
        {
            "id": "1",
            "name": "Мифы Чернобыля",
            "description": "Сказkи о чернобыльской аварии",
            "websiteUrl": "https://www.example.com/blogs/chernobyl-mythsk",
        },
        {
            "id": "2",
            "name": "Новый Блог",
            "description": "Это описание нового блога",
            "websiteUrl": "https://another.blog.com/posts/new-post",

        }

    ],

    Post: <PostViewModel[]>[




    ]
};