<template>
  <div v-for="option in options" :key="option" class="checkbox _s-row">
    <input
      type="radio"
      :name="name"
      :id="option"
      :checked="modelValue === option"
      @change="$emit('update:modelValue', option)"
    />
    <div class="box _center _ui">
      <UiIcon><CheckIcon /></UiIcon>
    </div>
    <UiText type="label" :for="option" :text="option.toUpperCase()" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean | string
  options: string[]
  name: string
}>()

defineEmits<{
  (evt: 'update:modelValue', value: string): void
}>()
</script>

<style scoped lang="scss">
@import '@/assets/styles/checkbox.scss';
</style>