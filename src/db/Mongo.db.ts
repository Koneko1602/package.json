import { Collection, Db, MongoClient } from 'mongodb';
import {BlogInputModel, Blog} from "../Blogs/models/BlogModel";
import {PostInputModel, PostViewModel} from "../Posts/models/PostModel";
import { SETTINGS } from '../core/settings/settings';

const BLOGS_COLLECTION_NAME = 'Blogs';
const POSTS_COLLECTION_NAME = 'Posts';

export let client: MongoClient;
export let BlogsCollection: Collection<BlogInputModel>;
export let PostsCollection: Collection<PostInputModel>;


// Подключения к бд
export async function runDB(url: string): Promise<void> {
    client = new MongoClient(url);
    const db: Db = client.db(SETTINGS.DB_NAME);

    //Инициализация коллекций
    BlogsCollection = db.collection<BlogInputModel>(BLOGS_COLLECTION_NAME);
    PostsCollection = db.collection<PostInputModel>(POSTS_COLLECTION_NAME);
    try {
        await client.connect();
        await db.command({ ping: 1 });
        console.log('✅ Connected to the database');
    } catch (e) {
        await client.close();
        throw new Error(`❌ Database not connected: ${e}`);
    }
}

