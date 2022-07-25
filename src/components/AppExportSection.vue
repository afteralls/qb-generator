<template>
  <div class="layout__item">
    <div class="layout__info-wrapper" style="text-align: center">
      <div class="layout__user-sec">
        <h3>Почти готово!</h3>
        <p>Осталось только сгенерировать все штрих-коды...</p>
        <button
          class="_btn"
          @click.prevent="$emit('gen-graphics')"
          :disabled="!inputLengthHandler"
        >Сгенерировать</button>
      </div>
      <div v-if="generated" class="layout__info-wrapper">
        <p>В окне {{ currentWidth <= 900 ? 'снизу' : 'справа' }} находятся сгенерированные штрих-коды. Если вас что-то не устраивает, то вы можете изменить введённые ранее данные и повторить генерацию.<br>Если же вас всё устраивает, то выбирайте нужный формат для экспорта и пользуйтесь на здоровье!</p>
        <div class="_row">
          <div class="_column">
            <p>В каком формате экспортировать?</p>
            <div class="_row" style="flex-direction: row;">
              <input v-model="exportFormat" id="png" value="png" type="radio" name="exportFormat">
              <label data-radio for="png">PNG</label>
              <input v-model="exportFormat" id="jpg" value="jpg" type="radio" name="exportFormat">
              <label data-radio for="jpg">JPG</label>
              <input v-model="exportFormat" id="svg" value="svg" type="radio" name="exportFormat">
              <label data-radio for="svg">SVG</label>
            </div>
          </div>
          <div class="_column" :style="`width: ${ currentWidth <= 600 ? '100%' : 'auto' }`">
            <p>Как будет называться архив?</p>
            <input type="text" v-model="zipName" placeholder="Название архива">
          </div>
        </div>
        <div class="_row">
          <button
            class="_btn"
            style="width: 100%"
            @click.prevent="exportFormat !== 'svg' ? exportHandler() : getSvgs()"
          >Экспортировать в графическом формате</button>
          <button
            class="_btn"
            style="width: 100%"
            v-if="formatName === 'ean13' && exampleFormat.showText === true"
            @click.prevent="getExcel"
          >Экспортировать в MS Excel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import 'table2excel'
import { ref, watch } from 'vue'

export default {
  props: ['inputLengthHandler', 'formatName', 'count', 'generated', 'exampleFormat', 'currentWidth'],
  emits: ['gen-graphics', 'gen-font'],
  setup (props) {
    const exportFormat = ref('png')
    const zipName = ref('png-collection')

    const exportHandler = () => {
      const flag = props.count
      const exportFormatName = exportFormat.value
      const zipFolderName = zipName.value
      const { width, height } = document.querySelector('[data-num]').getBBox()
      const zip = new JSZip()

      for (let i = 1; i <= flag; i++) {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        const serializer = new XMLSerializer()
        const svgString = serializer.serializeToString(document.querySelector(`[data-num="${i}"]`))
        const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(svg)
        const img = new Image()

        img.onload = function () {
          ctx.drawImage(img, 0, 0)
          URL.revokeObjectURL(url)

          canvas.toBlob(function (blob) {
            zip.file(`BC-${i}.${exportFormatName}`, blob, { base64: true })

            if (flag <= i) {
              zip.generateAsync({ type: 'blob' }).then(function (content) {
                saveAs(content, `${zipFolderName}.zip`)
              })
            }
          }, `image/${exportFormatName}`)
        }
        img.src = url
      }
    }
    const getSvgs = () => {
      const zip = new JSZip()
      const zipFolderName = zipName.value
      for (let i = 1; i <= props.count; i++) {
        zip.file(`Barcode-${i}.svg`, new Blob([document.querySelector(`[data-num="${i}"]`).outerHTML], { type: 'image/svg+xml' }))
      }

      zip.generateAsync({ type: 'blob' }).then(function (content) {
        saveAs(content, `${zipFolderName}.zip`)
      })
    }
    const getExcel = () => {
      const Table2Excel = window.Table2Excel
      const table2excel = new Table2Excel()
      table2excel.export(document.querySelectorAll('table'))
    }

    watch(exportFormat, value => {
      switch (value) {
        case 'png': zipName.value = 'png-collection'; break
        case 'jpg': zipName.value = 'jpg-collection'; break
        case 'svg': zipName.value = 'svg-collection'; break
      }
    })

    return {
      exportFormat,
      zipName,
      exportHandler,
      getSvgs,
      getExcel
    }
  }
}
</script>
