<template>
  <div class="_wrapper">
    <div class="layout">
      <div class="_grid act">
        <UiButton title="">
          <UiIcon><BarcodeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.barcode')" />
        </UiButton>
        <UiButton title="">
          <UiIcon><QrIcon /></UiIcon>
          <UiText type="h4" text="QR" />
        </UiButton>
      </div>
      <BarcodeLayout />
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
  gap: calc(var(--space) * 2);
}

.act {
  grid-template-columns: 1fr 1fr;

  @media (max-width: $sm) {
    width: 100%;
  }
}
</style>
