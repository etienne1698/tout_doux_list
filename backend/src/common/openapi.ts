import { openAPISpecs } from "hono-openapi";
import { app } from "../app";
import { Scalar } from "@scalar/hono-api-reference";
import { swaggerUI } from "@hono/swagger-ui";

import "zod-openapi/extend";

export enum OpenApiTags {}

const OPENAPI_URL = "/openapi.json";

app.get(
  OPENAPI_URL,
  openAPISpecs(app, {
    documentation: {
      info: {
        title: "Tout_doux API",
        version: "1.0.0",
      },
      servers: [{ url: process.env.URL!, description: "Server" }],
    },
  })
);

app.get("/openapi/swagger-ui", swaggerUI({ url: OPENAPI_URL }));

app.get(
  "/openapi/scalar-ui",
  Scalar({
    theme: "saturn",
    url: OPENAPI_URL,
  })
);
