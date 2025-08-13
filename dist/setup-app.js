"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const blog_router_1 = require("./Blogs/models/routers/blog.router");
const paths_1 = require("./core/paths/paths");
const post_router_rs_1 = require("./Posts/models/routers/post.router.rs");
const Test_router_1 = require("./tests/routers/Test.router");
const setupApp = (app) => {
    app.use(express_1.default.json()); // middleware для парсинга JSON в теле запроса
    // основной роут
    app.get("/", (req, res) => {
        res.status(200).send("Test!");
    });
    app.use(paths_1.TESTS_PATH, Test_router_1.TestRouter);
    app.use(paths_1.BLOGS_PATH, blog_router_1.BlogRouter);
    app.use(paths_1.POSTS_PATH, post_router_rs_1.PostRouter);
    return app;
};
exports.setupApp = setupApp;
