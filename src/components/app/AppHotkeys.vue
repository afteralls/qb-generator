<template>
  <UiModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', !modelValue)">
    <div class="_col _d">
      <UiText type="h2" :text="'По всему приложению'" />
      <div class="_col _d">
        <UiKeys :keys="['Shift', 'H']" tip="Показать возможные варианты HotKeys" />
      </div>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()
</script>

<style scoped lang="scss"></style>
