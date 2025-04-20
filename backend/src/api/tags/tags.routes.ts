import { Hono } from "hono";
import type { AppEnv } from "~/config/env";
import { authMiddleware } from "~/middleware/auth.middleware";

export const tagsRouter = new Hono<AppEnv>();

tagsRouter.get("/", authMiddleware, (c) => {
  const auth = c.get("user")!;
  console.error(auth);
  return c.json([]);
});
