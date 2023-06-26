<template>
  <div class="_grid qr-wrapper">
    <div class="ex _col _s">
      <UiText type="small" :text="$i18n('generator.preview')" />
      <div class="qr _center _ui">
        <UiText
          v-if="inputHandler(cpb.qrContent)"
          type="small"
          :text="$i18n('generator.set.invalid')"
        />
        <div v-else class="qr-wp _center">
          <img id="qr-ex" :src="cpb.qrcode" alt="QR Code" />
        </div>
      </div>
    </div>
    <div class="set _col _d">
      <div class="_col _s">
        <UiText type="small" :text="$i18n('generator.set.content')" />
        <UiInput
          name="qr-content"
          v-model="cpb.qrContent"
          :placeholder="$i18n('generator.qr.content')"
        />
      </div>
      <div class="_col _s">
        <UiText type="small" :text="$i18n('generator.export.fileName')" />
        <UiInput name="exportName" v-model="exportName" placeholder="my-qr" />
      </div>
      <div class="_grid act-g">
        <UiButton
          :title="$i18n('generator.export.downloadBtn')"
          :disabled="inputHandler(cpb.qrContent)"
          @trigger="getQr(cpb.qrcode, exportName)"
        >
          <UiIcon><DownloadIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.export.downloadBtn')" />
        </UiButton>
        <UiButton
          :title="$i18n('generator.export.saveTempBtn')"
          :disabled="inputHandler(cpb.qrContent)"
          @trigger="showTemplateModal = true"
        >
          <UiIcon><CreateIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.export.saveTempBtn')" />
        </UiButton>
      </div>
      <TemplateModal
        :model="showTemplateModal"
        @templateModal:close="showTemplateModal = !showTemplateModal"
      />
    </div>
    <div class="tip _col _d">
      <UiIcon size="md"><InfoIcon /></UiIcon>
      <div class="info _col _d">
        <UiText type="h4" :text="$i18n('generator.qr.tipTitle')" />
        <UiText :text="$i18n('generator.qr.tipDesc')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getQr } from '@/composables/exportFunctions'

const showTemplateModal = ref<boolean>(false)
const cpb = useComposableStore()
const exportName = ref<string>('')
const inputHandler = (val: string) => val === ''
const router = useRouter()

watch(
  () => cpb.qrContent,
  () => {
    router.push({
      path: '/generator',
      query: {
        mode: cpb.mode,
        content: cpb.qrContent
      }
    })
  }
)

onMounted(() => {
  const params = useUrlSearchParams()
  if (params.content) {
    setTimeout(() => {
      cpb.qrContent = params.content as string
    }, 0)
  }
})
</script>

<style scoped lang="scss">
.qr-wrapper {
  gap: calc(var(--space) * 2);
  grid-template-areas: 'Ex Set Tip';
  grid-template-columns: 0.5fr 1fr 1fr;

  @media (max-width: $mx) {
    grid-template-columns: 0.7fr 1fr 1.7fr;
  }

  @media (max-width: $lg) {
    grid-template-areas:
      'Ex Set'
      'Tip Tip';
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: $sm) {
    grid-template-columns: 1fr 1.5fr;
    width: 100%;
  }

  @media (max-width: $gen) {
    grid-template-areas:
      'Ex'
      'Set'
      'Tip';
    grid-template-columns: 1fr;
    width: 100%;

    .qr {
      width: 100%;
    }
  }
}

.ex {
  grid-area: Ex;
}

.set {
  grid-area: Set;
}

.tip {
  grid-area: Tip;

  @media (max-width: $lg) {
    flex-direction: row;
  }

  @media (max-width: $zf) {
    gap: var(--space-m);
  }
}

.info {
  @media (max-width: $zf) {
    gap: var(--space-m);
  }
}

.qr {
  padding: var(--space-m);
  height: toRem(191);
  text-align: center;
}

.qr-wp {
  height: 100%;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: calc(var(--br-rad) / 2);
  }
}

.act-g {
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: $zf) {
    grid-template-columns: 1fr;
  }
}
</style>
