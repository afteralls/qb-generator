<template>
  <UiModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', !modelValue)">
    <UiBlock layout="col">
      <UiText type="h2" :text="'По всему приложению'" />
      <UiBlock layout="col">
        <CustomKeys :keys="['Shift', 'H']" tip="Показать возможные варианты HotKeys" />
      </UiBlock>
    </UiBlock>
  </UiModal>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()
</script>

<style scoped lang="scss"></style>
