<script setup lang="ts">
export interface ButtonProps {}

defineProps<ButtonProps>();
</script>

<template>
  <button class="rounded text-white text-sm bg-blue-600 py-1 px-2 shadow shadow-blue-300 active:opacity-95 cursor-pointer">
    <slot />
  </button>
</template>
