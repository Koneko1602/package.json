import { Request, Response} from "express";
import {postRepository} from "../../repository/PostRepository";
import {mapToPostListViewModelUtil} from "../routers/mappers/map-to-post-list-view-model.util";
import {HttpStatus} from "../../../core/types/http-statuses";


export async function getPostListHandler(req: Request, res: Response) {
    try {
        const posts = await postRepository.findAll();
        const postViewModels = mapToPostListViewModelUtil(posts);
        res.send(postViewModels);
    } catch (e:unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}