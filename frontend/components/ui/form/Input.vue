<script setup lang="ts">
export interface InputProps {
  name: string;
  label?: string;
}

const inputRef = ref<HTMLInputElement>();

defineProps<InputProps>();

// I use "@mousedown.prevent" because otherwise the input loose focus before this function call (in case of already focused input)
function focusInput() {
  const isFocus = document.activeElement === inputRef.value;
  if (!isFocus) {
    inputRef.value!.focus();
  }
}
</script>

<template>
  <div>
    <span
      @mousedown.prevent="focusInput"
      v-if="label"
      class="select-none text-sm text-slate-800 mb-1"
    >
      {{ label }}
    </span>
    <div
      class="rounded border border-slate-200 focus-within:border-blue-300 px-2 py-1 cursor-text"
      @mousedown.prevent="focusInput"
    >
      <input class="focus:outline-none" :name ref="inputRef" />
    </div>
  </div>
</template>
