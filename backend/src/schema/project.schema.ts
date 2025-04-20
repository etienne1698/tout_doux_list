import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
} from "drizzle-orm/pg-core";
import { user } from "./auth.schema";

export const project = pgTable("project", {
  id: serial().primaryKey(),
  name: text("name"),
});

export const projectUsers = pgTable(
  "project_user",
  {
    projectId: integer("project_id"),
    userId: text("user_id").references(() => user.id),
  },
  (table) => [primaryKey({ columns: [table.projectId, table.userId] })]
);

export const projectUserRelations = relations(projectUsers, ({ one }) => ({
  project: one(project, {
    fields: [projectUsers.projectId],
    references: [project.id],
  }),
}));

export const projectRelations = relations(project, ({ many }) => ({
  project: many(projectUsers),
}));
