<template>
<div class="container">
  <div class="layout">
    <form class="layout__form">
      <div class="layout__tabs">
        <div
          @click.prevent="sIdx = 1"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
        ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3>
        </div>
        <div
          @click.prevent="sIdx = 2"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
        ><div v-if="sIdx === 2" class="_step">#2</div><h3>Количество</h3>
        </div>
        <div
          @click.prevent="sIdx = 3"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 3}"
        ><div v-if="sIdx === 3" class="_step">#3</div><h3>Контент</h3>
        </div>
        <div
          @click.prevent="sIdx = 4"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 4}"
        ><div v-if="sIdx === 4" class="_step">#4</div><h3>Экспорт</h3>
        </div>
      </div>
      <div class="layout__tab-content">
        <div v-if="sIdx === 1" class="form__item">
          <h3>Выберите стандарт штрих-кода</h3>
          <div class="format__wrapper">
            <select v-model="formatName">
              <option value="ean13">EAN 13</option>
              <option value="ean8">EAN 8</option>
              <!-- <option value="ean5">EAN 5</option>
              <option value="pharmacode">Pharmacode</option>
              <option value="codabar">Codabar</option>
              <option value="code128">CODE128</option>
              <option value="code39">CODE39</option>
              <option value="itf">ITF</option> -->
            </select>
          </div>
          <div class="format__desc">
            <h3> Краткое описание</h3>
            <p>{{ activeFormat.desc }}</p>
          </div>
          <div class="format">
            <div class="format__info">
              <h3>Структура штрих-кода</h3>
              <ul>
                <li v-for="el in activeFormat.info" :key="el">{{ el }}</li>
              </ul>
            </div>
            <div class="format__example">
              <h3>Пример</h3>
              <img
                :src="require(`./assets/barcode-exsamples/${formatName}.png`)"
                alt="Пример штрих-кода"
              >
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 2" class="form__item">
          <h3>Какое количество штрих-кодов нужно?</h3>
          <div class="_flex">
            <input type="text" class="_text" placeholder="Количество" v-model="count">
          </div>
        </div>
        <div v-else-if="sIdx === 3" class="form__item">
          <h3 for="format">Введите необходимое содержимое </h3>
          <input class="_text" v-if="formatName !== 'ean13'" type="text" placeholder="Текст" v-model="text">
          <div v-else class="_format-group">
            <input type="text" maxlength="3" class="_number" placeholder="Префикс" v-model="data.prefix">
            <input type="text" maxlength="6" class="_number" placeholder="Код" v-model="data.code">
            <input type="text" maxlength="5" class="_number" placeholder="Уникальный номер 1-го штрих-кода" v-model="data.number">
          </div>
        </div>
        <div v-else-if="sIdx === 4" class="form__item">
          <h3 for="format">"rcgjhn"</h3>
          <button class="_btn" @click.prevent="generate">Сгенерировать</button>
          <button v-if="generated" @click.prevent="exportHandler" class="_btn">Экспортировать</button>
        </div>
      </div>
    </form>
    <div class="layout__barcode">
      <div class="layout__barcode-container">
        <h3 v-if="!generated">Вы пока не сгенерировали необходимые штрих-коды</h3>
        <div v-else class="layout__table-container">
          <table id="table">
            <tr><th>№</th><th>Штрих-код</th></tr>
            <tr v-for="(num, idx) in beforeGenerate" :key="num">
              <td>{{ idx + 1 }}</td>
              <td><svg :data-num="idx + 1"></svg></td>
            </tr>
          </table>
          <div class="_space"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import JsBarcode from 'jsbarcode'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export default {
  data: () => ({
    sIdx: 1,
    formatName: 'ean13',
    formats: {
      ean13: {
        desc: 'European Article Number — европейский стандарт штрихкода, предназначенный для кодирования идентификатора товара и производителя.',
        info: [
          '1-я группа (2-3 цифры) – код страны-производителя товара;',
          '2-я группа (4-6 цифр) – это регистрационный номер компании;',
          '3-я граппа (3-5 цифр) – порядковый номер продукта;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ]
      },
      ean8: {
        desc: 'European Article Number — европейский стандарт штрихкода, предназначенный для кодирования идентификатора товара и производителя.',
        info: [
          '1-я группа (3 цифры) – код страны-производителя товара;',
          '2-я граппа (5 цифр) – порядковый номер продукта;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ]
      }
    },
    activeFormat: {},
    count: null,
    beforeGenerate: null,
    generated: false,
    text: '',
    data: {
      prefix: '',
      code: '',
      number: ''
    }
  }),
  methods: {
    generate () {
      let content = ''
      if (this.formatName === 'ean13') {
        let result = ''
        for (const key in this.data) {
          result += this.data[key]
        }
        content = result
      } else {
        content = this.text
      }
      this.generateBarcode(content)
    },
    generateBarcode (content) {
      this.beforeGenerate = +this.count
      setTimeout(() => {
        for (let i = 0; i < this.beforeGenerate; i++) {
          const res = +content.substring(0, content.length) + i
          JsBarcode(`[data-num="${i + 1}"]`, res, {
            format: this.formatName,
            background: '#ffffff00'
          })
        }
      }, 1000)
      this.generated = true
    },
    exportHandler () {
      const flag = this.count
      const zip = new JSZip()

      for (let i = 1; i <= this.count; i++) {
        const canvas = document.createElement('canvas')
        const { width, height } = document.querySelector('[data-num]').getBBox()
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
            zip.file(`BC-${i}.png`, blob, { base64: true })

            zip.generateAsync({ type: 'blob' }).then(function (content) {
              if (i >= flag) {
                saveAs(content, 'collection.zip')
              }
            })
          }, 'image/png')
        }
        img.src = url
      }
    }
  },
  watch: {
    formatName (value) {
      if (value === 'ean13') {
        this.activeFormat = this.formats.ean13
      } else if (value === 'ean8') {
        this.activeFormat = this.formats.ean8
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
@import './assets/scss/variables';
@import './assets/scss/mixins';
@import './assets/scss/_globalStyles';

.container {
  width: 1170px;
  margin: auto;
}

@import './assets/scss/_layoutStyles';
@import './assets/scss/_format';

._step {
  position: absolute;
  top: 0;
  left: 0;
  margin: 5px;
  font-size: 25px;
  font-weight: bold;
  color: #3a3a3a77;
  transition: $transition;
}

._space {
  height: 1px;
}

._btn {
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: white;
  font-family: 'Montserrat', sans-serif;
}

._select-wrapper {
  width: 100%;
}

._text {
  width: calc(100% - 30px);
}

._format-group {
  @include all-cent;
  justify-content: space-between;
}

._number:nth-child(1) {
  width: 15%;
}

._number:nth-child(2) {
  width: 21%;
}

._number:nth-child(3) {
  width: 46%;
}
</style>
