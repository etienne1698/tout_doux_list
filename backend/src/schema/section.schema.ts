import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { project } from "./project.schema";

export const section = pgTable("section", {
  id: serial().primaryKey(),
  name: text("name"),
  projectId: integer("project_id")
    .references(() => project.id)
    .notNull(),
});
