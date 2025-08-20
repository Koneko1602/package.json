import {Router} from "express";
import {deleteAllDataHandler} from "../handlers/all-data";

export const TestRouter = Router ({});

TestRouter
    .delete ('/testing/all-data', deleteAllDataHandler )