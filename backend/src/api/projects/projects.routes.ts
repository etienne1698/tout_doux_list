import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { db } from "~/config/db";
import type { AppEnv } from "~/config/env";
import { authMiddleware } from "~/middleware/auth.middleware";
import { projectUsers } from "~/schema/project.schema";

export const projectsRouter = new Hono<AppEnv>();

projectsRouter.get("/", authMiddleware, async (c) => {
  const auth = c.get("user")!;

  const projects = await db.query.projectUsers.findMany({
    columns: {},
    where: eq(projectUsers.userId, auth.id),
    with: {
      project: true,
    },
  });

  return c.json(projects);
});
