
import {ObjectId, WithId} from "mongodb";
import {PostsCollection} from "../../db/Mongo.db";
import {Post} from "../models/PostModel";
import {PostAttributes} from "../dto/post-attributes";



export const postRepository = {
    async findAll():  Promise<WithId<Post>[]>{
        return PostsCollection.find().toArray();
    },
    async findById(id: string): Promise<WithId<Post> | null> {
        return PostsCollection.findOne({ _id: new ObjectId(id)});
    },

    // Создать новый блог
    async create(newPost: Post): Promise<WithId<Post>> {
        const insertResult= await PostsCollection.insertOne(newPost);
        return { ...newPost, _id: insertResult.insertedId};
    },

    // Обновить данные блога
    async update(id: string, dto: PostAttributes): Promise<void> {
        const updateResult = await PostsCollection.updateOne(


            {
                _id: new ObjectId(id),
            },
            {
                $set: {
                    title: dto.title,             // макс. 30 символов
                    shortDescription: dto.shortDescription,  // макс. 100 символов
                    content: dto.content,           // макс. 1000 символов
                    blogId: dto.blogId,
                   // blogName:dto.blogName,
                },
            },
        );

        if (updateResult.matchedCount < 1) {
            throw new Error('Post not exist');
        }
        return;
    },


    // Удалить блог
    async delete(id: string): Promise <void> {
        const deleteResult = await PostsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        if (deleteResult.deletedCount < 1) {
            throw new Error('Blog not exist')
        }
    },
};
