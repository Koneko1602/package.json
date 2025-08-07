"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogHandler = updateBlogHandler;
const FieldError_1 = require("../../dto/FieldError");
const memory_db_1 = require("../../../db/memory.db");
const ValidationInputModel_1 = require("../../validation/ValidationInputModel");
function updateBlogHandler(req, res) {
    const id = req.params.id;
    const index = memory_db_1.db.Blog.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(404)
            .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Blog not found' }]));
        return;
    }
    const errors = (0, ValidationInputModel_1.ValidationInputModel)(req.body);
    if (errors.length > 0) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)(errors));
        return;
    }
    const blog = memory_db_1.db.Blog[index];
    blog.name = req.body.name;
    blog.description = req.body.description;
    blog.websiteUrl = req.body.websiteUrl;
    res.sendStatus(204); // нет контента, успешно
}
