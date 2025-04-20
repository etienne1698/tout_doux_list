import { Hono } from "hono";
import type { AppEnv } from "~/config/env";
import { authMiddleware } from "~/middleware/auth.middleware";

export const sectionsRouter = new Hono<AppEnv>();

sectionsRouter.get("/", authMiddleware, (c) => {
  const auth = c.get("user")!;
  
  return c.json([]);
});
