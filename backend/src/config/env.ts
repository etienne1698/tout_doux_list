import type { auth, Auth } from "./auth";

export interface AppEnv {
  Variables: {
    user: Auth | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}
