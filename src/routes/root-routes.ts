import { NextFunction, Request, Response, Router } from "express";

import Respond from "#utils/Respond";

import basicRoutes from "./basic-routes";
import ApiRoute from "./api-test-routes";

export default function rootRoutes() {
    const router = Router();
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
        try {
            return Respond.OK(res, "Test", null);
        } catch (err) {
            console.log(err);
        }
    });
    router.use("/hello", basicRoutes());
    router.use("/worker", ApiRoute());
    return router;
}
