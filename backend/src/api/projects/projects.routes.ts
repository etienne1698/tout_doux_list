import { Hono } from "hono";
import type { AppEnv } from "~/config/env";
import { authMiddleware } from "~/middleware/auth.middleware";
import projectService from "./project.service";
import { describeRoute } from "hono-openapi";
import { resolver, validator } from "hono-openapi/zod";
import { OpenApiTags } from "~/config/openapi";
import { createProjectBodyDTO, projectResultDTO } from "./project.dto";

export const projectsRouter = new Hono<AppEnv>();

projectsRouter.get(
  "/",
  authMiddleware,
  describeRoute({
    tags: [OpenApiTags.PROJECT],
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: resolver(projectResultDTO.array()),
          },
        },
      },
    },
  }),
  async (c) => {
    const auth = c.get("user")!;
    return c.json(await projectService.findAll(auth));
  }
);

projectsRouter.post(
  "/",
  authMiddleware,
  describeRoute({
    tags: [OpenApiTags.PROJECT],
    responses: {
      200: {
        description: "Successful response",
        content: {
          "application/json": {
            schema: resolver(projectResultDTO),
          },
        },
      },
    },
  }),
  validator("json", createProjectBodyDTO),
  async (c) => {
    const auth = c.get("user")!;
    return c.json(await projectService.create(auth));
  }
);
