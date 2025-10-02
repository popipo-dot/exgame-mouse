import bodyParser from "@koa/bodyparser";
import Router from "@koa/router";
import Koa from "koa";
import { config } from "./config/config";
import serverRoute from "./routes/server";

const app = new Koa();
const router = new Router();

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());
app.use(serverRoute.routes()).use(serverRoute.allowedMethods());

app.listen(config.PORT, () => {
  console.log(`Server running at http://${config.HOST}:${config.PORT}`);
});
