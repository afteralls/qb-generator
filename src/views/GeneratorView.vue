<template>
  <div class="_wrapper">
    <div class="layout">
      <div class="_grid act">
        <UiButton title="" @trigger="cpb.mode = 'barcode'" :active="cpb.mode === 'barcode'">
          <UiIcon><BarcodeIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.barcode')" />
        </UiButton>
        <UiButton title="" @trigger="cpb.mode = 'qr'" :active="cpb.mode === 'qr'">
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
const router = useRouter()
const cpb = useComposableStore()

const setMode = () => {
  router.push({
    path: '/generator',
    query: {
      mode: cpb.mode
    }
  })
}

watch(
  () => cpb.mode,
  () => setMode()
)

onMounted(() => {
  const params = useUrlSearchParams('history')
  params.mode ? (cpb.mode = params.mode as Mode) : setMode()
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
