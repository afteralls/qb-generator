<template>
  <div class="_column">
    <div class="_s-column">
      <div class="_s-row">
        <div class="_i sm"><InfoIcon /></div>
        <small>{{ $i18n('generator.export.tip') }}</small>
      </div>
      <button @click="main.generateHandler" class="_btn">
        <div class="_i"><GenerateIcon /></div>
        <h4>{{ $i18n('generator.export.generate') }}</h4>
      </button>
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.export.format') }}</small>
      <div class="_grid _o-o-o">
        <TheCheckbox
          v-for="format in exportFormats"
          :key="format"
          :name="'export'"
          :checked="main.set.exportFormat === format"
          :model="main.set.exportFormat"
          :type="'radio'"
          @change:model="(val: ExportFormat) => main.set.exportFormat = val"
        >
          {{ format.toUpperCase() }}
        </TheCheckbox>
      </div>
    </div>
    <div class="_s-column">
      <small>{{ $i18n('generator.export.fileName') }}</small>
      <input
        type="text"
        v-model="main.set.exportName"
        :placeholder="quantityFlag ? 'barcode-one' : 'my-collection (etc.)'"
      />
    </div>
    <div class="_grid _o-o">
      <button @click="getGraphics()" class="_btn">
        <div class="_i"><DownloadIcon /></div>
        <h4>{{ $i18n('generator.export.downloadBtn') }}</h4>
      </button>
      <button class="_btn">
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
    saveAs(content, `${main.set.exportName}.zip`)
  })
}

const getGraphics = () => {
  const zip = new JSZip()
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  const { width, height } = (preview!.querySelector('[data-num]') as SVGAElement)!.getBBox()

  for (let i = 1; i <= +main.set.quantity; i++) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(preview!.querySelector(`[data-num="${i}"]`)!)
    const svg = new Blob([svgString], { type: 'image/svg+xml; charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const img = new Image()

    img.onload = () => {
      ctx!.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)

      canvas.toBlob((blob) => {
        if (quantityFlag.value) {
          saveAs(blob, `${main.set.exportName}.${main.set.exportFormat}`)
        } else {
          zip.file(`Barcode-${i}.${main.set.exportFormat}`, blob!, { base64: true })
          if (+main.set.quantity <= i) {
            getZip(zip)
          }
        }
      }, `image/${main.set.exportFormat}`)
    }
    img.src = url
  }
}

const getSvgs = () => {
  const zip = new JSZip()
  const preview: HTMLDivElement | null = document.querySelector('.preview')
  if (quantityFlag.value) {
    const blob = new Blob([preview!.querySelector(`[data-num="1"]`)!.outerHTML], {
      type: 'image/svg+xml'
    })
    saveAs(blob, `${main.set.exportName}.svg`)
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
