import { authClient } from "~/lib/auth-client";

export interface Auth {
  id: string;
  name: string;
  email: string;
}

export default function useAuth() {
  const auth = useState<Auth>("auth");
  const router = useRouter();

  async function login(formData: { email: string; password: string }) {
    const { data, error } = await authClient.signIn.email(formData);
    if (error) return;
    auth.value = data.user;
    router.push({ name: "dashboard" });
  }

  async function register(formData: {
    email: string;
    password: string;
    name: string;
  }) {
    const { data, error } = await authClient.signUp.email(formData);
    if (error) return;
    auth.value = data.user;
    router.push({ name: "dashboard" });
  }

  return {
    auth,
    login,
    register,
  };
}
