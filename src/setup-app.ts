import express, {Express, Request, Response} from "express";
import {BlogRouter} from "./Blogs/models/routers/blog.router";
import {BLOGS_PATH, POSTS_PATH, TESTS_PATH} from "./core/paths/paths";
import {PostRouter} from "./Posts/models/routers/post.router.rs";
import {TestRouter} from "./tests/routers/Test.router";

export const setupApp = (app: Express) => {
    app.use(express.json()); // middleware для парсинга JSON в теле запроса

    // основной роут
    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("Test!");

    });



    app.use(TESTS_PATH,TestRouter);
    app.use(BLOGS_PATH,BlogRouter);
    app.use(POSTS_PATH,PostRouter);
    return app;
}