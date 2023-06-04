<script setup lang="ts">
export interface Input {
  name: string
  modelValue: string | number
  placeholder?: string
  type?: string
  length?: number
}

withDefaults(defineProps<Input>(), {
  placeholder: 'Some text...',
  type: 'text',
  length: 12
})

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <input
    :type="type"
    :name="name"
    :value="modelValue"
    :maxlength="length"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

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
