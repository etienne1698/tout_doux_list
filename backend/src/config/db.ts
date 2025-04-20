import { drizzle } from "drizzle-orm/node-postgres";
import { user, account, session, verification } from "~/schema/auth-schema";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    user,
    account,
    session,
    verification,
  },
});
