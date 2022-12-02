<template>
  <div class="export__row">
    <div class="_column">
      <small>Export Format</small>
      <div class="_row">
        <div v-for="format in exportFormats" class="_cb-wrapper">
          <Transition name="main"><CheckIcon v-if="set.exportFormat === format.name" /></Transition>
          <input v-model="set.exportFormat" :id="format.name" type="radio" :value="format.name">
          <label data-radio :for="format.name">{{ format.name.toUpperCase() }}</label>
        </div>
      </div>
    </div>
    <button
      @click="generateHandler"
      :class="{'btn-settings': true, _btn: true, _disabled: !set.isCorrect }"
    >
      <GenerateIcon style="height: 25px; fill: #ffffff99" />
      <small>Generate</small>
    </button>
  </div>
  <div class="export__row">
    <div class="_column">
      <small>{{ quantityFlag ? 'File Name' : 'Archive Name (.zip)' }}</small>
      <div class="merge__wrapper">
        <input
          :placeholder="quantityFlag ? 'barcode-one' : 'my-collection (etc.)'"
          type="text"
          v-model="set.exportName"
          maxlength="15"
        >
        <button
          @click="set.exportFormat === 'svg' ? getSvgs() : getGraphics()"
          :class="{merge__btn: true, _disabled: !set.isCorrect || !set.generated }"
        >
          <small>Download</small>
        </button>
      </div>
    </div>
    <button
      @click="isOpen = true"
      :class="{'btn-settings': true, 'temp-btn': true, _disabled: !set.isCorrect }"
    >
      <CreateIcon />
      <small>Save Template</small>
    </button>
    <TheTemplateModal :isOpen="isOpen" @close-modal="isOpen = false" />
  </div>
</template>

<script setup>
import CheckIcon from '@/assets/svg/CheckIcon.vue'
import CreateIcon from '@/assets/svg/CreateIcon.vue'
import GenerateIcon from '@/assets/svg/GenerateIcon.vue'
import TheTemplateModal from './TheTemplateModal.vue'
import { useDataStore } from '@/stores/dataStore.js'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { computed, ref } from 'vue'

const { set, generateHandler } = useDataStore()
const isOpen = ref(false)
const quantityFlag = computed(() => set.quantity === '1' || set.quantity === '')

const exportFormats = [{ name: 'png'}, { name: 'jpg' }, { name: 'svg' }]

const getZip = folder => {
  folder.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, `${set.exportName}.zip`)
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
        if (quantityFlag.value) {
          saveAs(blob, `${set.exportName}.${set.exportFormat}`)
        } else {
          zip.file(`Barcode-${i}.${set.exportFormat}`, blob, { base64: true })
          if (set.quantity <= i) { getZip(zip) }
        }
      }, `image/${set.exportFormat}`)
    }
    img.src = url
  }
}

const getSvgs = () => {
  const zip = new JSZip()
  if (quantityFlag.value) {
    const blob = new Blob([document.querySelector(`[data-num="1"]`).outerHTML], { type: 'image/svg+xml' })
    saveAs(blob, `${set.exportName}.svg`)
  } else {
    for (let i = 1; i <= set.quantity; i++) {
      zip.file(`Barcode-${i}.svg`, new Blob([document.querySelector(`[data-num="${i}"]`).outerHTML], { type: 'image/svg+xml' }))
    }
    getZip(zip)
  }
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
  flex: 1 1;
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