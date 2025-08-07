"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRepository = void 0;
const memory_db_1 = require("../../db/memory.db");
exports.blogRepository = {
    findAll() {
        return memory_db_1.db.Blog;
    },
    // Создать новый блог
    create(newBlog) {
        memory_db_1.db.Blog.push(newBlog);
        return newBlog;
    },
    // Обновить данные блога
    update(id, dto) {
        const blog = memory_db_1.db.Blog.find((d) => d.id === id);
        if (!blog) {
            throw new Error('Blog not exist');
        }
        blog.name = dto.name;
        blog.description = dto.description;
        blog.websiteUrl = dto.websiteUrl;
        return;
    },
    // Удалить блог
    delete(id) {
        const index = memory_db_1.db.Blog.findIndex((v) => v.id === id);
        if (index === -1) {
            throw new Error('Blog not exist');
        }
        memory_db_1.db.Blog.splice(index, 1);
        return;
    },
};
