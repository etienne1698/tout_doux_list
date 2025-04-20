import { eq } from "drizzle-orm";
import type { Auth } from "~/config/auth";
import { db } from "~/config/db";
import { project, projectUsers } from "~/schema/project.schema";

export default {
  async findAll(auth: Auth) {
    const projects = await db.query.projectUsers.findMany({
      columns: {},
      where: eq(projectUsers.userId, auth.id),
      with: {
        project: true,
      },
    });
    return projects;
  },
  async create(auth: Auth) {
    return await db.transaction(async (tx) => {
      const newProject = await tx
        .insert(project)
        .values({ name: "Test" })
        .returning();
      await tx
        .insert(projectUsers)
        .values({ projectId: newProject[0].id, userId: auth.id });

      return newProject;
    });
  },
};
