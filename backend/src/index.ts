import { serve } from "@hono/node-server";
import "dotenv/config";

import { app } from "./app";
import "./routes";

serve(
  {
    fetch: app.fetch,
    port: +process.env.PORT!,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
