import { Hono } from "hono";
import { auth } from "~/common/auth";

export const authRouter = new Hono();

authRouter.on(["POST", "GET"], "*", (c) => auth.handler(c.req.raw));
