import {BlogInputModel, Blog} from "../models/BlogModel"
import {ObjectId, WithId} from "mongodb";
import {BlogsCollection} from "../../db/Mongo.db";
import {BlogAttributes} from "../dto/blog-attributes";

export const blogRepository = {
     async findAll():  Promise<WithId<Blog>[]>{
        return BlogsCollection.find().toArray();
    },
     async findById(id: string): Promise<WithId<Blog> | null> {
         return BlogsCollection.findOne({ _id: new ObjectId(id)});
     },

        // Создать новый блог
    async create(newBlog: Blog): Promise<WithId<Blog>> {
         const insertResult= await BlogsCollection.insertOne(newBlog);
         return { ...newBlog, _id: insertResult.insertedId};
        },

        // Обновить данные блога
        async update(id: string, dto: BlogAttributes): Promise<void> {
            const updateResult = await BlogsCollection.updateOne(
                {
                    _id: new ObjectId(id),
                },
                {
                    $set: {
                        name: dto.name,
                        description: dto.description,
                        websiteUrl: dto.websiteUrl,
                    },
                },
            );

            if (updateResult.matchedCount < 1) {
                throw new Error('Blog not exist');
            }
            return;
        },


        // Удалить блог
          async delete(id: string): Promise <void> {
            const deleteResult = await BlogsCollection.deleteOne({
                _id: new ObjectId(id),
            });

            if (deleteResult.deletedCount < 1) {
                throw new Error('Blog not exist')
            }
        },
    };
