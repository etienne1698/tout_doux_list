<script setup lang="ts">
import { useField } from "vee-validate";

export interface InputProps {
  name: string;
  label?: string;
  type?: HTMLInputElement["type"];
}

const inputRef = ref<HTMLInputElement>();

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});

const { value, errorMessage } = useField(() => props.name);

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
      class="input-wrapper rounded border border-slate-200 focus-within:border-blue-300 px-2 py-1 cursor-text"
      @mousedown.prevent="focusInput"
    >
      <input
        v-model="value"
        class="focus:outline-none w-full text-sm"
        :name
        ref="inputRef"
        :type
      />
    </div>
    <ErrorMessage :error-message />
  </div>
</template>

<style>
.input-wrapper:has(input:-webkit-autofill) {
  background-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
}

input[data-autocompleted] {
  background-color: transparent !important;
}

input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 0s 0s, color 0s 0s;
  transition-delay: calc(infinity * 1s);
}
</style>
