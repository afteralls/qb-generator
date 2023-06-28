<template>
  <UiBlock layout="row" mode="sm" class="checkbox">
    <input
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      type="checkbox"
      :id="name"
      :checked="modelValue"
    />
    <UiBlock :center="true" :wp="true" class="box">
      <UiIcon><CheckIcon /></UiIcon>
    </UiBlock>
    <UiText type="label" :for="name" :text="label" />
  </UiBlock>
</template>

<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<style scoped lang="scss">
@import '@/assets/styles/checkbox.scss';
</style>
