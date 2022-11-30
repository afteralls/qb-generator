<template>
  <div class="export__row">
    <div class="_column">
      <small>Export Format</small>
      <div class="_row">
        <div class="cb-wrapper">
          <Transition name="route"><CheckIcon v-if="set.exportFormat === 'png'" /></Transition>
          <input v-model="set.exportFormat" id="png" type="radio" value="png">
          <label data-radio for="png">PNG</label>
        </div>
        <div class="cb-wrapper">
          <Transition name="route"><CheckIcon v-if="set.exportFormat === 'jpg'" /></Transition>
          <input v-model="set.exportFormat" id="jpg" type="radio" value="jpg">
          <label data-radio for="jpg">JPG</label>
        </div>
        <div class="cb-wrapper">
          <Transition name="route"><CheckIcon v-if="set.exportFormat === 'svg'" /></Transition>
          <input v-model="set.exportFormat" id="svg" type="radio" value="svg">
          <label data-radio for="svg">SVG</label>
        </div>
      </div>
    </div>
    <button @click="generate" :disabled="!set.exampleFlag" class="_btn btn-settings" style="flex: 1 1;">
      <GenerateIcon style="height: 25px; fill: #ffffff99" />
      <small>Generate</small>
    </button>
  </div>
  <div class="export__row">
    <div class="_column">
      <small>Archive Name (.zip)</small>
      <div class="merge__wrapper">
        <input
          placeholder="my-collection (etc.)"
          type="text"
          v-model="set.exportPackName"
          maxlength="15"
        >
        <button
          @click="set.exportFormat === 'svg' ? getSvgs() : getGraphics()"
          :disabled="!set.generateFlag"
          class="merge__btn"
        >
          <small>Download</small>
        </button>
      </div>
    </div>
    <button @click="getSvgs" :disabled="!set.generateFlag" class="btn-settings temp-btn">
      <CreateIcon />
      <small>Save Template</small>
    </button>
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import CreateIcon from '@/assets/svg/CreateIcon.vue'
import GenerateIcon from '@/assets/svg/GenerateIcon.vue'
import { useDataStore } from '@/stores/dataStore.js'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const { set, generate } = useDataStore()
const files = []

const getZip = folder => {
  console.log(folder)
  folder.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, `${set.exportPackName}.zip`)
  })
}

const getGraphics = () => {
  const zip = new JSZip()
  const { width, height } = document.querySelector('[data-num]').getBBox()

  for (let i = 1; i <= set.quantity; i++) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    const serializer = new XMLSerializer()
    const svgString = serializer.serializeToString(document.querySelector(`[data-num="${i}"]`))
    const svg = new Blob([svgString], { type: 'image/svg+xml; charset=utf-8' })
    const url = URL.createObjectURL(svg)
    const img = new Image()

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
      URL.revokeObjectURL(url)

      canvas.toBlob(blob => {
        zip.file(`Barcode-${i}.${set.exportFormat}`, blob, { base64: true })

        if (set.quantity <= i) {
          getZip(zip)
        }
      }, `image/${set.exportFormat}`)
    }
    img.src = url
  }
}

const getSvgs = () => {
  const zip = new JSZip()
  for (let i = 1; i <= set.quantity; i++) {
    zip.file(`Barcode-${i}.svg`, new Blob([document.querySelector(`[data-num="${i}"]`).outerHTML], { type: 'image/svg+xml' }))
  }

  console.log(zip);
  getZip(zip)
}
</script>

<style scoped lang="scss">
button {
  outline: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  border-radius: var(--br-rad);
  transition: var(--transition);
}
.export__row {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  gap: calc(var(--space) * 2);
}

.btn-settings {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  gap: calc(var(--space) / 2);
  padding: 0;
}

.temp-btn {
  background-color: var(--circle-c);

  svg { fill: var(--dark-wrapper-c) }
  small { color: var(--light-txt-c-h) !important; }
  &:hover { background-color: var(--circle-c-tp); }
}

.merge {
  &__wrapper {
    position: relative;

    input {
      box-sizing: border-box;
      width: 310px;
    }
  }

  &__btn {
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--accent-c);
    padding: var(--space);
    cursor: pointer;

    small { color: var(--dark-txt-c-h); }

    &:hover {
      background-color: var(--accent-c-h);
    }
  }
}
</style>