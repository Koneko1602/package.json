"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllDataHandler = deleteAllDataHandler;
const memory_db_1 = require("../../db/memory.db");
function deleteAllDataHandler(req, res) {
    memory_db_1.db.Blog.length = 0;
    memory_db_1.db.Post.length = 0;
    res.sendStatus(204);
}
