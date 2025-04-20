import { Hono } from "hono";
import { auth } from "~/config/auth";

export const authRouter = new Hono();

authRouter.on(["POST", "GET"], "*", (c) => auth.handler(c.req.raw));
