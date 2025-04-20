import { authRouter } from "./api/auth.routes";
import { app } from "./app";
import "./config/openapi";

app.route("/api/auth", authRouter);
