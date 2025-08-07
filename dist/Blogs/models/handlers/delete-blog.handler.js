"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogHandler = deleteBlogHandler;
const FieldError_1 = require("../../dto/FieldError");
const memory_db_1 = require("../../../db/memory.db");
function deleteBlogHandler(req, res) {
    const id = req.params.id;
    const index = memory_db_1.db.Blog.findIndex((v) => v.id === id);
    if (index !== -1) {
        memory_db_1.db.Blog.splice(index, 1); // Удаляет элемент из массива
        res.status(204).send();
    }
    else {
        res.status(404).send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Blog not found' }]));
    }
}
