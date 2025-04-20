import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { section } from "./section.schema";

export const task = pgTable("task", {
  id: serial().primaryKey(),
  name: text("name"),
  sectionId: integer("section_id")
    .notNull()
    .references(() => section.id, { onDelete: "cascade" }),
});
