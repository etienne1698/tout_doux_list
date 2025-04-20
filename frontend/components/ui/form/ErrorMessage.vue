<script setup lang="ts">
defineProps<{ errorMessage?: string }>();
</script>

<template>
  <div v-if="errorMessage" class="text-sm text-red-500">
    {{ errorMessage }}
  </div>
</template>
