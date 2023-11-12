import { NextFunction, Request, Response, Router } from "express";
import { body } from "express-validator";

import validate from "#utils/validation";
import Respond from "#utils/Respond";

import ApiController from "#controllers/api.controller";

const ApiService = new ApiController();

export default function ApiRoute() {
    const router = Router();

    // /api/worker
    router
        .route("/")
        .post(
            validate([
                body("WorkerName")
                    .trim()
                    .isString()
                    .notEmpty()
                    .withMessage("WorkerName must be filled"),
            ]),
            (req: Request, res: Response, next: NextFunction) => {
                const { status, message } = ApiService.addWorker(
                    req.body.WorkerName
                );
                if (!status) return Respond.BAD_REQ(res, message, null);
                return Respond.CREATED(res, message, null);
            }
        )
        .get((req: Request, res: Response, next: NextFunction) => {
            const data = ApiService.getWorker();
            return Respond.OK(res, "Workers", data);
        }); 

    return router;
}
