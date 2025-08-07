"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostHandler = deletePostHandler;
const memory_db_1 = require("../../../db/memory.db");
const FieldError_1 = require("../../../Blogs/dto/FieldError");
function deletePostHandler(req, res) {
    const id = req.params.id;
    const index = memory_db_1.db.Post.findIndex((v) => v.id === id);
    if (index !== -1) {
        memory_db_1.db.Post.splice(index, 1); // Удаляет элемент из массива
        res.status(204).send();
    }
    else {
        res.status(404).send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Post not found' }]));
    }
}
