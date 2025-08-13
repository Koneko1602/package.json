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
exports.deleteBlogHandler = deleteBlogHandler;
const FieldError_1 = require("../../dto/FieldError");
const BlogRepository_1 = require("../../repository/BlogRepository");
const http_statuses_1 = require("../../../core/types/http-statuses");
function deleteBlogHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const blog = yield BlogRepository_1.blogRepository.findById(id);
            if (!blog) {
                res
                    .status(http_statuses_1.HttpStatus.NotFound)
                    .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: ' Blog not found' }]));
                return;
            }
            yield BlogRepository_1.blogRepository.delete(id);
            res.sendStatus(http_statuses_1.HttpStatus.NoContent);
        }
        catch (e) {
            res.sendStatus(http_statuses_1.HttpStatus.InternalServerError);
        }
    });
}
