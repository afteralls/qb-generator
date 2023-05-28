<template>
  <div class="barcode-wrapper">
    <BarcodeSettings />
    <BarcodePreview />
    <BarcodeExport />
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()

onMounted(() => {
  const params = useUrlSearchParams('history')
  setTimeout(() => {
    main.set.curStandart.name = (params.standart as StandartName) || 'EAN 13'
  }, 50)
  setTimeout(() => {
    main.set.content = (params.content as string) || ''
    main.set.codeColor = (params.codeColor as string) || '#000000'
    main.set.bgColor = (params.bgColor as string) || 'transparent'
    main.set.showData = JSON.parse(params.showData as string) || true
    main.set.quantity = (params.quantity as string) || '1'
    main.set.generated = false
    if (main.corLengthHandler) {
      main.generateBarcode('#example', main.set.content)
    }
  }, 55)
})
</script>

<style scoped lang="scss">
.barcode-wrapper {
  display: grid;
  width: 100%;
  gap: calc(var(--space) * 2);
  grid-template-columns: 2fr 1fr 1.2fr;

  input {
    width: 100%;
  }
}

:deep(.barcode) {
  svg {
    max-width: 100%;
    height: auto;
  }
}

:deep(._t-o) {
  grid-template-columns: 2fr 1fr;
}

:deep(._o-o) {
  grid-template-columns: 1fr 1fr;
}

:deep(._o-o-o) {
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
