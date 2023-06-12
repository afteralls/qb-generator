<template>
  <div class="_wrapper">
    <div class="layout">
      <div class="_grid act">
        <UiButton
          title=""
          @trigger="main.set.mode = 'barcode'"
          :active="main.set.mode === 'barcode'"
        >
          <UiIcon><BarcodeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.barcode')" />
        </UiButton>
        <UiButton title="" @trigger="main.set.mode = 'qr'" :active="main.set.mode === 'qr'">
          <UiIcon><QrIcon /></UiIcon>
          <UiText type="h4" text="QR" />
        </UiButton>
      </div>
      <Transition name="main" mode="out-in">
        <BarcodeLayout v-if="main.set.mode === 'barcode'" />
        <QrLayout v-else />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()

onMounted(() => {
  const params = useUrlSearchParams('history')
  if (params.mode) {
    setTimeout(() => (main.set.mode = params.mode as Mode), 50)
  }
})
</script>

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
