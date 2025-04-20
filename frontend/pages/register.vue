<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import * as z from "zod";
import { authClient } from "~/lib/auth-client";

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(4),
});

const { handleSubmit } = useForm<z.infer<typeof validationSchema>>({
  validationSchema: toTypedSchema(validationSchema),
});

const onSubmit = handleSubmit(async (formData) => {
  const { data, error } = await authClient.signUp.email(formData);
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <Card class="p-6 w-sm">
      <form @submit="onSubmit">
        <div class="grid gap-2 mb-4">
          <Input name="name" label="name" />
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />
        </div>
        <div class="w-fit">
          <Button type="submit" class="w-full">Submit</Button>
        </div>
      </form>
    </Card>
  </div>
</template>
