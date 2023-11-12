import express, { Application } from "express";
import http from "http";
import env from "#config/index";

import loader from "./loaders";

const app = express();

const ExecuteServer = (server: http.Server, port?: number) => {
    server.listen(env.PORT || port, () => {
        console.log(`Server is running on port ${env.PORT || port}`);
    });
};

const StartServer = () => {
    (async (app: Application) => {
        await loader(app);
        const server = http.createServer(app);
        console.log(env.NODE_ENV);
        if (env.NODE_ENV === "production") {
            return ExecuteServer(server, 3002);
        }
        ExecuteServer(server, 3001);
    })(app);
};

StartServer();
