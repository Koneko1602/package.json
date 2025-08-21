import { Request, Response} from "express";
import {blogRepository} from "../../repository/BlogRepository";
import {HttpStatus} from "../../../core/types/http-statuses";
import { toBlogDto } from '../../dto/toDTO';
import {Blog} from "../BlogModel";
import {WithId} from "mongodb";


    export async function getBlogListHandler(req: Request, res: Response): Promise<void> {
        try {
            const blogs: WithId<Blog>[] = await blogRepository.findAll();
            const blogDTOs = blogs.map(toBlogDto);
            res.status(HttpStatus.Ok).send(blogDTOs);
        } catch (e: unknown) {
            console.error('getBlogListHandler error:', e);
            res.sendStatus(HttpStatus.InternalServerError);
        }
    }
