<template>
  <div class="_wrapper">
    <div class="layout _col _l">
      <div class="mw _col _d">
        <UiText type="h2" mode="lg" :text="$i18n('route.generator')" />
      </div>
      <div class="_grid act">
        <UiButton
          :title="$i18n('generator.cBarcode')"
          @trigger=";(cpb.mode = 'barcode'), queryHandler()"
          :active="cpb.mode === 'barcode'"
        >
          <UiIcon><BarcodeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.barcode')" />
        </UiButton>
        <UiButton
          :title="$i18n('generator.cQr')"
          @trigger=";(cpb.mode = 'qr'), queryHandler()"
          :active="cpb.mode === 'qr'"
        >
          <UiIcon><QrIcon /></UiIcon>
          <UiText type="h4" text="QR" />
        </UiButton>
      </div>
      <Transition name="main" mode="out-in">
        <BarcodeLayout v-if="cpb.mode === 'barcode'" />
        <QrLayout v-else />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const cpb = useComposableStore()
const router = useRouter()

const queryHandler = () => {
  router.push({
    path: '/generator',
    query: undefined
  })
}

onBeforeMount(() => {
  const params = useUrlSearchParams('history')
  if (params.mode) cpb.mode = params.mode as Mode
})
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  align-items: flex-start;
}

.act {
  grid-template-columns: 1fr 1fr;

  @media (max-width: $sm) {
    width: 100%;
  }
}
</style>
