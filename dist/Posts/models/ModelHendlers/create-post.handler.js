"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostHandler = createPostHandler;
const FieldError_1 = require("../../../Blogs/dto/FieldError");
const memory_db_1 = require("../../../db/memory.db");
const ValidationInputPost_1 = require("../../validation/ValidationInputPost");
function createPostHandler(req, res) {
    const errors = (0, ValidationInputPost_1.ValidationInputPost)(req.body);
    if (errors.length > 0) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)(errors));
        return;
    }
    //  Проверка существования блога
    const blog = memory_db_1.db.Blog.find((b) => b.id === req.body.blogId);
    if (!blog) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)([
            { field: "blogId", message: "Blog with this ID does not exist" },
        ]));
        return;
    }
    const newPost = {
        id: memory_db_1.db.Post.length
            ? (Number(memory_db_1.db.Post[memory_db_1.db.Post.length - 1].id) + 1).toString()
            : "1",
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: blog.id,
        blogName: blog.name,
    };
    memory_db_1.db.Post.push(newPost);
    res.status(201).send(newPost);
}
