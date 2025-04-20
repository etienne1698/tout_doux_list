import { Hono } from "hono";
import type { AppEnv } from "./config/env";
import { auth, authGlobalMiddleware } from "./config/auth";
import { cors } from "hono/cors";

export const app = new Hono<AppEnv>();

app.use(
  "*",
  cors({
    origin: [process.env.FRONTEND_URL!, process.env.URL!],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
app.use("*", authGlobalMiddleware);
