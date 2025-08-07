"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostListHandler = getPostListHandler;
const memory_db_1 = require("../../../db/memory.db");
function getPostListHandler(req, res) {
    res.send(memory_db_1.db.Post);
}
