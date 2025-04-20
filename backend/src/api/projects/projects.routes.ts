import { Hono } from "hono";
import type { AppEnv } from "~/config/env";
import { authMiddleware } from "~/middleware/auth.middleware";
import projectService from "./project.service";

export const projectsRouter = new Hono<AppEnv>();

projectsRouter.get("/", authMiddleware, async (c) => {
  const auth = c.get("user")!;
  return c.json(projectService.findAll(auth));
});

projectsRouter.post("/", authMiddleware, async (c) => {
  const auth = c.get("user")!;
  return c.json(projectService.create(auth));
});
