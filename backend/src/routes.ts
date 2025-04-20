import { app } from "./app";
import "./config/openapi";
import "./config/auth";

import { tagsRouter } from "./api/tags/tags.routes";
import { projectsRouter } from "./api/projects/projects.routes";
import { sectionsRouter } from "./api/sections/sections.routes";

app.route("/api/tags", tagsRouter);
app.route("/api/projects", projectsRouter);
app.route("/api/sections", sectionsRouter);
