"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogListHandler = getBlogListHandler;
const memory_db_1 = require("../../../db/memory.db");
function getBlogListHandler(req, res) {
    res.send(memory_db_1.db.Blog);
}
