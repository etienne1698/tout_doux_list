import { createMiddleware } from "hono/factory";
import type { AppEnv } from "~/config/env";
import { HTTPException } from "hono/http-exception";

export const authMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  if (!c.get("session")) throw new HTTPException(401);
  return next();
});
