<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";
import { authClient } from "~/lib/auth-client";

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const { handleSubmit } = useForm<z.infer<typeof validationSchema>>({
  validationSchema: toTypedSchema(validationSchema),
});

const onSubmit = handleSubmit(async ({ email, password }) => {
  const { data, error } = await authClient.signIn.email({
    email,
    password,
  });
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <Card class="p-6 w-sm">
      <form @submit="onSubmit">
        <div class="grid gap-2 mb-4">
          <Input autocomplete="username" type="email" name="email" label="Email" />
          <Input autocomplete="current-password" type="password" name="password" label="Password" />
        </div>
        <div class="w-fit">
          <Button type="submit" class="w-full">Submit</Button>
        </div>
      </form>
    </Card>
  </div>
</template>
