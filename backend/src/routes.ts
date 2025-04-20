import { authRouter } from "./api/auth.routes";
import { app } from "./app";
import "./common/openapi";

app.route("/api/auth", authRouter);
