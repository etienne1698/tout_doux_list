import { app } from "./app";
import "./config/openapi";
import "./config/auth";

import { tagsRouter } from "./api/tags/tags.routes";

app.route("/api/tags", tagsRouter);
