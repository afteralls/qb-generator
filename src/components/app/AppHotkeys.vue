<template>
  <UiModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', !modelValue)">
    <UiBlock layout="col" mode="lg">
      <UiBlock layout="col">
        <UiText type="h2" :text="'По всему приложению'" />
        <UiBlock layout="col" mode="sm">
          <CustomKeys :keys="['Shift', 'K']" tip="Список горячих клавиш" />
          <CustomKeys :keys="['Shift', 'H']" tip="Переход на главную страницу" />
          <CustomKeys :keys="['Shift', 'G']" tip="Переход на страницу Генератора" />
          <CustomKeys :keys="['Shift', 'L']" tip="Переход на страницу Библиотеки" />
        </UiBlock>
      </UiBlock>
      <UiBlock layout="col">
        <UiText type="h2" :text="'На странице Генератора'" />
        <UiBlock layout="col" mode="sm">
          <CustomKeys :keys="['Shift', 'M']" tip="Сменить текущий мод" />
          <CustomKeys :keys="['Shift', 'Ctrl']" tip="Перейти к полю ввода" />
          <CustomKeys :keys="['Shift', 'S']" tip="Сохранить шаблон" />
          <CustomKeys :keys="['Shift', 'D']" tip="Скачать результат" />
        </UiBlock>
      </UiBlock>
    </UiBlock>
  </UiModal>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>()
defineEmits<{ (evt: 'update:modelValue', val: boolean): void }>()
</script>

<style scoped lang="scss"></style>
