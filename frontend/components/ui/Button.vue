<template>
  <button class="btn" :class="{ [`btn-${color}`]: color }">
    <slot />
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  color: "neutral" | "primary";
}

defineProps<ButtonProps>();
</script>
