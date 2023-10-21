<template>
  <UiBlock layout="grid" class="export">
    <UiBlock layout="col" mode="sm">
      <UiBlock layout="row" mode="sm">
        <UiIcon size="min"><InfoIcon /></UiIcon>
        <UiText :text="$i18n('generator.export.tip')" />
      </UiBlock>
      <UiButton
        :title="$i18n('generator.export.generate')"
        :disabled="!brc.set.isCorrect"
        @trigger="generateHandler"
      >
        <UiIcon><GenerateIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.generate')" />
      </UiButton>
    </UiBlock>
    <UiBlock layout="col" mode="sm">
      <UiText type="small" :text="$i18n('generator.export.format')" />
      <UiBlock layout="row" class="exp">
        <CustomRadio :options="exportFormats" name="exportFormat" v-model="exportFormat" />
      </UiBlock>
    </UiBlock>
    <UiBlock layout="col" mode="sm">
      <UiText
        :text="qFlag ? $i18n('generator.export.fileName') : $i18n('generator.export.arcName')"
      />
      <UiInput
        name="exportName"
        v-model="exportName"
        :placeholder="qFlag ? 'barcode-one' : 'my-collection (etc.)'"
      />
    </UiBlock>
    <UiBlock layout="grid" mode="d2">
      <UiButton
        :title="$i18n('generator.export.downloadBtn')"
        :disabled="!brc.set.generated"
        @trigger="exportHandler"
      >
        <UiIcon><DownloadIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.downloadBtn')" />
      </UiButton>
      <UiButton
        :title="$i18n('generator.export.saveTempBtn')"
        :disabled="!brc.set.isCorrect"
        @trigger="showTemplateModal = true"
      >
        <UiIcon><CreateIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.saveTempBtn')" />
      </UiButton>
    </UiBlock>
    <TemplateModal v-model="showTemplateModal" />
  </UiBlock>
</template>

<script setup lang="ts">
const brc = useBarcodeStore()
const showTemplateModal = ref<boolean>(false)
const qFlag = computed(() => brc.set.quantity === '' || +brc.set.quantity <= 1)
const exportName = ref<string>('')
const exportFormats: ExportFormat[] = ['png', 'jpg', 'svg']
const exportFormat = ref<ExportFormat>('svg')

const exportHandler = () => {
  exportFormat.value === 'svg'
    ? getSvgs(qFlag.value, exportName.value, brc.set.quantity)
    : getGraphics(qFlag.value, exportName.value, exportFormat.value, brc.set.quantity)
}

const generateHandler = () => {
  brc.set.beforeQuanSet = +brc.set.quantity || 1
  let curContent = ''
  setTimeout(() => {
    for (let i = 0, j = 0; i < brc.set.beforeQuanSet!; i++, j++) {
      brc.set.curStandart.codeName !== 'code128'
        ? (curContent = (+brc.set.content + j).toString())
        : (curContent = brc.set.content)
      generateBarcode(`[data-num="${i + 1}"]`, curContent, brc.set)
    }
  }, 1)
  brc.set.generated = true
}
</script>

<style scoped lang="scss">
.export {
  grid-area: Exp;
}

.exp {
  justify-content: space-between;

  @media (max-width: $mx) {
    justify-content: flex-start;
  }

  @media (max-width: $md) {
    justify-content: space-between;
  }

  @media (max-width: $zf) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.act-g {
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: $zf) {
    grid-template-columns: 1fr;
  }
}
</style>
