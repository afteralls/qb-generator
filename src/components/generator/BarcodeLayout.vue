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
    main.set.standart = +params.standart || 0
  }, 50)
  setTimeout(() => {
    main.set.curStandart = main.standarts[main.set.standart]
    main.set.content = (params.content as string) || ''
    main.set.codeColor = (params.codeColor as string) || '#000000'
    main.set.bgColor = (params.bgColor as string) || 'transparent'
    main.set.showData = params.showData ? JSON.parse((params.showData as string)) : true
    main.set.quantity = (params.quantity as string) || '1'
    main.set.generated = false
    if (main.corLengthHandler) {
      main.generateBarcode('#example', main.set.content)
    }
  }, 55)
})
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
