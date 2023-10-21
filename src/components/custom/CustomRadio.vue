<template>
  <UiBlock layout="row" mode="sm" v-for="option in options" :key="option" class="checkbox">
    <input
      type="radio"
      :name="name"
      :id="option"
      :checked="modelValue === option"
      @change="$emit('update:modelValue', option)"
    />
    <UiBlock :center="true" :wp="true" class="box">
      <UiIcon><CheckIcon /></UiIcon>
    </UiBlock>
    <UiText type="label" :for="option" :text="option.toUpperCase()" />
  </UiBlock>
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
