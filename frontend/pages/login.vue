<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <Card class="p-6 w-full max-w-sm shadow-lg">
      <div class="grid gap-2 mb-4">
        <Input name="email" label="Email" />
        <Input name="password" label="Password" />
      </div>
      <div class="w-fit"> 
        <Button class="w-full">Submit</Button>
      </div>
    </Card>
  </div>
</template>
