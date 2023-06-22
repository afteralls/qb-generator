<template>
  <div class="barcode-wrapper">
    <BarcodeSettings />
    <BarcodePreview />
    <BarcodeExport />
  </div>
</template>

<script setup lang="ts">
const bcd = useBarcodeStore()

onMounted(() => {
  const params = useUrlSearchParams()
  if (params.content) {
    setTimeout(() => {
      bcd.set.standart = JSON.parse(params.standart as string)
    }, 0)
    setTimeout(() => {
      bcd.set.content = params.content as string
      bcd.set.bgColor = params.bgColor as string
      bcd.set.codeColor = params.codeColor as string
      bcd.set.showData = JSON.parse(params.showData as string)
      bcd.set.quantity = params.quantity as string
    }, 30)
  }
  bcd.genHandler()
})
</script>

<style lang="scss">
.barcode-wrapper {
  display: grid;
  width: 100%;
  gap: calc(var(--space) * 2);
  grid-template-areas: 'Set Prev Exp';
  grid-template-columns: 2fr 1fr 1.2fr;

  input {
    width: 100%;
  }

  @media (max-width: $mx) {
    gap: var(--space);
    grid-template-areas:
      'Set Set'
      'Prev Exp';
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $md) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $sm) {
    gap: calc(var(--space) * 2);
    grid-template-areas:
      'Set'
      'Prev'
      'Exp';
    grid-template-columns: 1fr;
  }
}
</style>
