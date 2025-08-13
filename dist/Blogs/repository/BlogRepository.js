"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRepository = void 0;
const mongodb_1 = require("mongodb");
const Mongo_db_1 = require("../../db/Mongo.db");
exports.blogRepository = {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Mongo_db_1.BlogsCollection.find().toArray();
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Mongo_db_1.BlogsCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
        });
    },
    // Создать новый блог
    create(newBlog) {
        return __awaiter(this, void 0, void 0, function* () {
            const insertResult = yield Mongo_db_1.BlogsCollection.insertOne(newBlog);
            return Object.assign(Object.assign({}, newBlog), { _id: insertResult.insertedId });
        });
    },
    // Обновить данные блога
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield Mongo_db_1.BlogsCollection.updateOne({
                _id: new mongodb_1.ObjectId(id),
            }, {
                $set: {
                    name: dto.name,
                    description: dto.description,
                    websiteUrl: dto.websiteUrl,
                },
            });
            if (updateResult.matchedCount < 1) {
                throw new Error('Blog not exist');
            }
            return;
        });
    },
    // Удалить блог
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield Mongo_db_1.BlogsCollection.deleteOne({
                _id: new mongodb_1.ObjectId(id),
            });
            if (deleteResult.deletedCount < 1) {
                throw new Error('Blog not exist');
            }
        });
    },
};
