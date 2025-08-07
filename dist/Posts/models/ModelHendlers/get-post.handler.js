"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostHandler = getPostHandler;
const memory_db_1 = require("../../../db/memory.db");
const FieldError_1 = require("../../../Blogs/dto/FieldError");
function getPostHandler(req, res) {
    const id = req.params.id;
    const post = memory_db_1.db.Post.find((d) => d.id === id);
    if (!post) {
        res
            .status(404)
            .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Post not found' }]));
        return;
    }
    res.status(200).send(post);
}
