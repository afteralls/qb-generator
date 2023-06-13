<template>
  <div class="_grid export">
    <div class="_s-column">
      <div class="_s-row">
        <UiIcon size="sm"><InfoIcon /></UiIcon>
        <UiText type="small" :text="$i18n('generator.export.tip')" />
      </div>
      <UiButton title="" :disabled="!main.set.isCorrect" @trigger="main.generateHandler">
        <UiIcon><GenerateIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.generate')" />
      </UiButton>
    </div>
    <div class="_s-column">
      <UiText type="small" :text="$i18n('generator.export.format')" />
      <div class="_row exp">
        <UiRadio :options="exportFormats" name="exportFormat" v-model="exportFormat" />
      </div>
    </div>
    <div class="_s-column">
      <UiText
        type="small"
        :text="qFlag ? $i18n('generator.export.fileName') : $i18n('generator.export.arcName')"
      />
      <UiInput
        name="exportName"
        v-model="exportName"
        :placeholder="qFlag ? 'barcode-one' : 'my-collection (etc.)'"
      />
    </div>
    <div class="_grid act-g">
      <UiButton title="" :disabled="!main.set.isCorrect" @trigger="exportHandler">
        <UiIcon><DownloadIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.downloadBtn')" />
      </UiButton>
      <UiButton title="" :disabled="!main.set.isCorrect" @trigger="showTemplateModal = true">
        <UiIcon><CreateIcon /></UiIcon>
        <UiText type="h4" :text="$i18n('generator.export.saveTempBtn')" />
      </UiButton>
    </div>
    <TemplateModal
      :model="showTemplateModal"
      @templateModal:close="showTemplateModal = !showTemplateModal"
    />
  </div>
</template>

<script setup lang="ts">
const main = useMainStore()
const showTemplateModal = ref<boolean>(false)
const qFlag = computed(() => main.set.quantity === '1' || main.set.quantity === '')
const exportName = ref<string>('')
const exportFormats: ExportFormat[] = ['png', 'jpg', 'svg']
const exportFormat = ref<ExportFormat>('svg')

const exportHandler = () => {
  exportFormat.value === 'svg'
    ? getSvgs(qFlag.value, exportName.value, main.set.quantity)
    : getGraphics(qFlag.value, exportName.value, exportFormat.value, main.set.quantity)
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
