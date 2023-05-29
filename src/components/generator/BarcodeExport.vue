<template>
  <div class="_grid export">
    <div class="_s-column">
      <div class="_s-row">
        <div class="_i sm"><InfoIcon /></div>
        <small>{{ $i18n('generator.export.tip') }}</small>
      </div>
      <button
        :disabled="!main.set.isCorrect"
        @click="main.generateHandler"
        :class="{ _btn: true, _disabled: !main.set.isCorrect }"
      >
        <div class="_i"><GenerateIcon /></div>
        <h4>{{ $i18n('generator.export.generate') }}</h4>
      </button>
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.export.format') }}</small>
      <div class="_row exp">
        <TheRadio
          :options="exportFormats"
          name="exportFormat"
          :model="main.set.exportFormat"
          @change:model="(val: ExportFormat) => main.set.exportFormat = val"
        />
      </div>
    </div>
    <div class="_s-column">
      <small>
        {{ quantityFlag ? $i18n('generator.export.fileName') : $i18n('generator.export.arcName') }}
      </small>
      <input
        type="text"
        name="exportName"
        v-model="main.set.exportName"
        :placeholder="quantityFlag ? 'barcode-one' : 'my-collection (etc.)'"
      />
    </div>
    <div class="_grid act-g">
      <button
        @click="main.set.exportFormat === 'svg' ? getSvgs() : getGraphics()"
        :disabled="!main.set.generated"
        :class="{ _btn: true, _disabled: !main.set.generated }"
      >
        <div class="_i"><DownloadIcon /></div>
        <h4>{{ $i18n('generator.export.downloadBtn') }}</h4>
      </button>
      <button
        :disabled="!main.set.generated"
        :class="{ _btn: true, _disabled: !main.set.generated }"
      >
        <div class="_i"><CreateIcon /></div>
        <h4>{{ $i18n('generator.export.saveTempBtn') }}</h4>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JSZip from 'jszip'
// @ts-ignore
import { saveAs } from 'file-saver'

const main = useMainStore()
const quantityFlag = computed(() => main.set.quantity === '1' || main.set.quantity === '')
const exportFormats: ExportFormat[] = ['png', 'jpg', 'svg']

const getZip = (folder: JSZip) => {
  folder.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, `${main.set.exportName || 'Barcodes'}.zip`)
  })
}

const getGraphics = () => {
  const zip = new JSZip()
  let counter = 0
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  const barcodeCollection = preview!.querySelectorAll('[data-num]')
  const { width, height } = (barcodeCollection[0] as SVGAElement)!.getBBox()

  barcodeCollection.forEach((node, i) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(node)
    const svg = new Blob([svgString], { type: 'image/svg+xml; charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const img = new Image()

    img.onload = () => {
      ctx!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)

      canvas.toBlob((blob) => {
        if (quantityFlag.value) {
          saveAs(blob, `${main.set.exportName || 'Barcode'}.${main.set.exportFormat}`)
        } else {
          zip.file(`Barcode-${i + 1}.${main.set.exportFormat}`, blob!, { base64: true })
          counter++
          if (+main.set.quantity <= counter) {
            getZip(zip)
          }
        }
      }, `image/${main.set.exportFormat}`)
    }
    img.src = url
  })
}

const getSvgs = () => {
  const zip = new JSZip()
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  if (quantityFlag.value) {
    const blob = new Blob([preview!.querySelector(`[data-num="1"]`)!.outerHTML], {
      type: 'image/svg+xml'
    })
    saveAs(blob, `${main.set.exportName || 'Barcode'}.svg`)
  } else {
    for (let i = 1; i <= +main.set.quantity; i++) {
      zip.file(
        `Barcode-${i}.svg`,
        new Blob([preview!.querySelector(`[data-num="${i}"]`)!.outerHTML], {
          type: 'image/svg+xml'
        })
      )
    }
    getZip(zip)
  }
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
