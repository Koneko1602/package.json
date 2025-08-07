"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogHandler = getBlogHandler;
const memory_db_1 = require("../../../db/memory.db");
const FieldError_1 = require("../../dto/FieldError");
function getBlogHandler(req, res) {
    const id = req.params.id;
    const blog = memory_db_1.db.Blog.find((d) => d.id === id);
    if (!blog) {
        res
            .status(404)
            .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Blog not found' }]));
        return;
    }
    res.status(200).send(blog);
}
