import Router from "@koa/router";

const router = new Router({
  prefix: "/server",
});

router.get("/check", async (ctx) => {
  ctx.body = "Check ok!";
  ctx.status = 200;
});

export default router;
