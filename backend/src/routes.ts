import { authRouter } from "./api/auth.routes";
import { app } from "./app";

app.route("/api/auth", authRouter);
