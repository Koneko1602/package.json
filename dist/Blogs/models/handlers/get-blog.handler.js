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
exports.getBlogHandler = getBlogHandler;
const http_statuses_1 = require("../../../core/types/http-statuses");
const FieldError_1 = require("../../dto/FieldError");
const map_to_blog_view_model_util_1 = require("../routers/mappers/map-to-blog-view-model.util");
const BlogRepository_1 = require("../../repository/BlogRepository");
function getBlogHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const blog = yield BlogRepository_1.blogRepository.findById(id);
            if (!blog) {
                res
                    .status(http_statuses_1.HttpStatus.NotFound)
                    .send((0, FieldError_1.createErrorsMessages)([{ field: 'id', message: 'Blog not found' }]));
                return;
            }
            const blogViewModel = (0, map_to_blog_view_model_util_1.mapToBlogViewModel)(blog);
            res.status(http_statuses_1.HttpStatus.Ok).send(blogViewModel);
        }
        catch (e) {
            res.sendStatus(http_statuses_1.HttpStatus.InternalServerError);
        }
    });
}
