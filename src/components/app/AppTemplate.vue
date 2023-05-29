<template>
  <div class="template _column _ui">
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
defineProps<{ mode: 'barcode' | 'qr'; name: string; desc: string; date: string; idx?: number }>()
</script>

<style scoped lang="scss">
.template {
  height: toRem(250);
  width: toRem(250);
}
</style>
