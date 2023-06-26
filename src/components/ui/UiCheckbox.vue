<script setup lang="ts">
defineProps<{ name: string; modelValue: boolean; label: string }>()
defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()
</script>

<template>
  <div class="checkbox _row _s">
    <input
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
      type="checkbox"
      :id="name"
      :checked="modelValue"
    />
    <div class="box _center _ui">
      <UiIcon><CheckIcon /></UiIcon>
    </div>
    <UiText type="label" :for="name" :text="label" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/checkbox.scss';
</style>
