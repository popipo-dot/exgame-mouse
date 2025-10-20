import Router from "@koa/router";
import { subscriptions } from "../mocks/subscriptions";

const router = new Router({
  prefix: "/api/subscriptions",
});

router.get("/", (ctx) => {
  ctx.status = 200;
  ctx.body = subscriptions;
});

router.get("/:id", (ctx) => {
  const subscription = subscriptions.find(
    (sub) => sub._id === ctx.params.id,
  );

  if (subscription) {
    ctx.status = 200;
    ctx.body = subscription;
  } else {
    ctx.status = 404;
    ctx.body = { message: "Subscription not found" };
  }
});

router.put("/", (ctx) => {
  const subscription = ctx.request.body;
  console.log("Submitting subscription:", subscription);
  const index = subscriptions.findIndex(sub => sub._id === subscription._id);
  if (index !== -1) {
    subscriptions[index] = subscription;
    ctx.status = 200;
    ctx.body = subscription;
  } else {
    ctx.status = 404;
    ctx.body = { message: "Subscription not found" };
  }
});

export default router;