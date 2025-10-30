import bodyParser from "@koa/bodyparser";
import cors from "@koa/cors";
import Router from "@koa/router";
import { createServer } from "http";
import Koa from "koa";
import { config } from "./config/config";
import { initSocketIo } from "./io";
import logger from "./middlewares/logger";
import examsRoute from "./routes/exams";
import serverRoute from "./routes/server";
import subscriptionsRoute from "./routes/subscriptions";
<<<<<<< HEAD
import { dbClient } from 
=======
import { dbClient } from "./lib/db";
>>>>>>> 951398b3f1eb5422e7fa42e3931e583fe7761a2e

const app = new Koa();
const router = new Router();

app.use(logger);
app.use(bodyParser());

app.use(
  cors({
    origin: config.FRONTEND_APP,
  }),
);

dbClient
  .connect()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoute.routes()).use(serverRoute.allowedMethods());
app.use(examsRoute.routes()).use(examsRoute.allowedMethods());
app.use(subscriptionsRoute.routes()).use(subscriptionsRoute.allowedMethods());

const httpServer = createServer(app.callback());
initSocketIo(httpServer);

httpServer.listen(config.PORT, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);
});
