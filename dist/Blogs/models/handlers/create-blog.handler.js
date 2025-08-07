"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogHandler = createBlogHandler;
const FieldError_1 = require("../../dto/FieldError");
const memory_db_1 = require("../../../db/memory.db");
const ValidationInputModel_1 = require("../../validation/ValidationInputModel");
function createBlogHandler(req, res) {
    const errors = (0, ValidationInputModel_1.ValidationInputModel)(req.body);
    if (errors.length > 0) {
        res.status(400).send((0, FieldError_1.createErrorsMessages)(errors));
        return;
    }
    const newBlog = {
        id: memory_db_1.db.Blog.length ? (Number(memory_db_1.db.Blog[memory_db_1.db.Blog.length - 1].id) + 1).toString() : '1',
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    };
    res.status(201).send(newBlog);
}
