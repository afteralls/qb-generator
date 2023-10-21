<template>
  <UiBlock layout="wrapper">
    <UiBlock layout="col" mode="lg" class="layout">
      <UiText type="h2" mode="lg" :text="$i18n('route.generator')" />
      <UiBlock layout="grid" mode="s2">
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
      </UiBlock>
      <Transition name="main" mode="out-in">
        <BarcodeLayout v-if="cpb.mode === 'barcode'" />
        <QrLayout v-else />
      </Transition>
    </UiBlock>
  </UiBlock>
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

const { shift, m } = useMagicKeys()

watchEffect(() => {
  if (shift.value && m.value) cpb.mode === 'qr' ? (cpb.mode = 'barcode') : (cpb.mode = 'qr')
})
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  align-items: flex-start;
}
</style>
