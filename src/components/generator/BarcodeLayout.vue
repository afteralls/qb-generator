<template>
  <div class="barcode-wrapper">
    <BarcodeSettings />
    <BarcodePreview />
    <BarcodeExport />
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.barcode-wrapper {
  display: grid;
  width: 100%;
  gap: calc(var(--space) * 2);
  grid-template-areas:
    "Set Prev Exp";
  grid-template-columns: 2fr 1fr 1.2fr;

  input {
    width: 100%;
  }

  @media (max-width: $mx) {
    gap: var(--space);
    grid-template-areas:
      "Set Set"
      "Prev Exp";
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $md) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $sm) {
    gap: calc(var(--space) * 2);
    grid-template-areas:
      "Set"
      "Prev"
      "Exp";
    grid-template-columns: 1fr;
  }
}
</style>
