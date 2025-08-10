import { Request, Response} from "express";
import {blogRepository} from "../../repository/BlogRepository";

import {HttpStatus} from "../../../core/types/http-statuses";
import {mapToBlogListViewModelUtil} from "../routers/mappers/map-to-blog-list-view-model.util";


export async function getBlogListHandler(req: Request, res: Response) {
    try {
        const blogs = await blogRepository.findAll();
        const blogViewModels = mapToBlogListViewModelUtil(blogs);
        res.send(blogViewModels);
    } catch (e:unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}