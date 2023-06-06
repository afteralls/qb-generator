<template>
  <div class="template _column _ui">
    <div v-if="!isExample" class="actions _row">
      <div class="_i"><ShareIcon /></div>
      <div class="_i"><TrashIcon /></div>
    </div>
    <div class="_i mx">
      <BarcodeIcon v-if="mode === 'barcode'" />
      <QrIcon v-else />
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.modal.name') }}</small>
      <h3>{{ name || $i18n('generator.modal.exName') }}</h3>
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.modal.desc') }}</small>
      <p>{{ desc || $i18n('generator.modal.exDesc') }}</p>
    </div>
    <small>{{ date }}</small>
  </div>
</template>

<script setup lang="ts">
export interface Template {
  name: string
  desc: string
  standart: string | number
  href: string
  path: string
  date: string
  mode: 'barcode' | 'qr'
  isExample?: boolean
}

defineProps<Template>()
</script>

<style scoped lang="scss">
.template {
  height: toRem(250);
  position: relative;
  width: toRem(250);
  min-width: toRem(250);
  cursor: pointer;
  text-align: center;
  align-items: flex-start;
  transition: var(--tr);

  &:focus, &:hover {
    background-color: var(--fg-s);
    border-color: var(--m-h);
  }
}

.actions {
  position: absolute;
  right: var(--space);
}
</style>
