import { drizzle } from "drizzle-orm/node-postgres";

import * as authSchema from "~/schema/auth.schema";
import * as projectSchema from "~/schema/project.schema";
import * as sectionSchema from "~/schema/section.schema";
import * as taskSchema from "~/schema/task.schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...authSchema,
    ...projectSchema,
    ...sectionSchema,
    ...taskSchema,
  },
});
