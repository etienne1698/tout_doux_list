import { Hono } from "hono";
import type { AppEnv } from "./common/env";
import { authGlobalMiddleware } from "./common/auth";
import { cors } from "hono/cors";

export const app = new Hono<AppEnv>();

app.use("*", authGlobalMiddleware);

app.use(
  "*",
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);
