"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostHandler = updatePostHandler;
const memory_db_1 = require("../../../db/memory.db");
const FieldError_1 = require("../../../Blogs/dto/FieldError");
const ValidationInputPost_1 = require("../../validation/ValidationInputPost");
function updatePostHandler(req, res) {
    const id = req.params.id;
    const index = memory_db_1.db.Post.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(404)
            .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Blog not found' }]));
        return;
    }
    const blog = memory_db_1.db.Blog.find((b) => b.id === req.body.blogId);
    if (!blog) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)([
            { field: "blogId", message: "Blog with this ID does not exist" },
        ]));
        return;
    }
    const errors = (0, ValidationInputPost_1.ValidationInputPost)(req.body);
    if (errors.length > 0) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)(errors));
        return;
    }
    const post = memory_db_1.db.Post[index];
    post.blogId = req.body.blogId,
        post.title = req.body.title,
        post.shortDescription = req.body.shortDescription,
        post.content = req.body.content;
    res.sendStatus(204); // нет контента, успешно
}
