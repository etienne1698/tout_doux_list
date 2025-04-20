import { createMiddleware } from "hono/factory";
import type { AppEnv } from "~/config/env";

export const authMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  if (!c.get("session")) return c.status(403);
  return next();
});
