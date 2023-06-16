<template>
  <div class="_grid qr-wrapper">
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.set.example')" />
      <div class="qr _center _ui">
        <UiText v-if="inputHandler(content)" type="small" :text="$i18n('generator.set.invalid')" />
        <div v-else class="_center">
          <img id="qr-ex" :src="qrcode" alt="QR Code" />
        </div>
      </div>
    </div>
    <div class="_column">
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.set.content')" />
        <UiInput name="qr-content" v-model="content" :placeholder="''" />
      </div>
      <div class="_s-column">
        <UiText type="small" :text="$i18n('generator.export.fileName')" />
        <UiInput name="exportName" v-model="exportName" placeholder="my-qr" />
      </div>
      <div class="_grid act-g">
        <UiButton
          title=""
          :disabled="inputHandler(exportName)"
          @trigger="getQr(exportName, qrcode)"
        >
          <UiIcon><DownloadIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.export.downloadBtn')" />
        </UiButton>
        <UiButton title="" :disabled="inputHandler(exportName)" @trigger="showTemplateModal = true">
          <UiIcon><CreateIcon /></UiIcon>
          <UiText type="h4" :text="$i18n('generator.export.saveTempBtn')" />
        </UiButton>
      </div>
      <TemplateModal
        :model="showTemplateModal"
        @templateModal:close="showTemplateModal = !showTemplateModal"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { getQr } from '@/composables/exportFunctions'

const content = ref<string>('')
const showTemplateModal = ref<boolean>(false)
const exportName = ref<string>('')
const inputHandler = (val: string) => val === ''

const qrcode = useQRCode(content)
</script>

<style scoped lang="scss">
.qr-wrapper {
  gap: calc(var(--space) * 2);
  grid-template-columns: 1fr 1fr;
}

.qr {
  padding: var(--space-m);
  height: toRem(191);
  text-align: center;

  img {
    height: 100%;
    width: 100%;
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
