<template>
  <div class="_wrapper">
    <div class="layout">
      <div class="_row">
        <button class="_btn">
          <div class="_i"><BarcodeIcon /> </div>
          <h4>{{ $i18n('generator.barcode') }}</h4>
        </button>
        <button class="_btn">
          <div class="_i"><QrIcon /> </div>
          <h4>QR</h4>
        </button>
      </div>
      <TheSettings />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--space);
}
</style>
