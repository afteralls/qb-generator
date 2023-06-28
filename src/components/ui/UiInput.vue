<template>
  <input
    :name="name"
    :value="modelValue"
    :maxlength="length"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
defineProps<{
  name: string
  modelValue: string
  placeholder?: string
  length?: number
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
input {
  @include action-styles;
  font-size: 1rem;
  background-color: var(--fg-m);
  transition: var(--tr);
  color: var(--txt-m);
  border: toRem(1) solid var(--br);
}
</style>
