
import { Request, Response} from "express";
import {BlogsCollection,PostsCollection } from "../../db/Mongo.db";

export async function deleteAllDataHandler(req: Request, res: Response) {


    await BlogsCollection.deleteMany({});
    await PostsCollection.deleteMany({});
    res.sendStatus(204);
}