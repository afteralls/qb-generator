<template>
<div class="container">
  <div class="layout">
    <form class="layout__form">
      <div class="layout__tabs">
        <div
          @click.prevent="sIdx = 1"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
        ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3></div>
        <div
          @click.prevent="sIdx = 2"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
        ><div v-if="sIdx === 2" class="_step">#2</div><h3>Контент</h3></div>
        <div
          @click.prevent="sIdx = 3"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 3}"
        ><div v-if="sIdx === 3" class="_step">#3</div><h3>Количество</h3></div>
        <div
          @click.prevent="sIdx = 4"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 4}"
        ><div v-if="sIdx === 4" class="_step">#4</div><h3>Генерация</h3></div>
      </div>
      <div class="layout__tab-content">
        <div v-if="sIdx === 1" class="layout__item">
          <div class="layout__user-sec">
            <h3>Выберите стандарт штрих-кода</h3>
            <div class="format__wrapper">
              <select v-model="formatName">
                <option value="ean13">EAN 13</option>
                <option value="ean8">EAN 8</option>
                <option value="ean5">EAN 5</option>
                <option value="code128">CODE 128</option>
                <option value="itf14">ITF-14</option>
                <option value="msi">MSI</option>
                <option value="pharmacode">Pharmacode</option>
              </select>
            </div>
          </div>
          <div class="layout__format-wrapper">
            <div class="format">
              <div class="format__desc">
                <h3> Краткое описание</h3>
                <p>{{ activeFormat.desc }}</p>
              </div>
              <div class="format__info">
                <div class="format__structure">
                  <h3>Структура штрих-кода</h3>
                  <ul>
                    <li v-for="el in activeFormat.info" :key="el">{{ el }}</li>
                  </ul>
                </div>
                <div class="format__example">
                  <h3>Пример штрих-кода</h3>
                  <div class="format__img-wrapper">
                    <img
                      :src="require(`./assets/barcode-exsamples/${formatName}.png`)"
                      alt="Пример штрих-кода"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 2" class="layout__item">
          <h3>Введите содержимое штрих-кода</h3>
          <input
            class="_text"
            v-if="!formatNameHandler"
            type="text" placeholder="Текст"
            v-model="text"
          >
          <div v-else class="_format-group">
            <div v-for="quan in inputSettings.quantity" :key="quan" class="_input-wrapper">
              <input
                type="text" maxlength="3"
                class="_input-code"
                placeholder="Префикс"
                v-model="data.prefix"
              >
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 3" class="layout__item">
          <div class="_flex">
            <div style="width: 70%">
              <h3>Какое количество штрих-кодов нужно?</h3>
              <input type="text" class="_text" placeholder="Количество" v-model="count">
            </div>
            <div v-if="formatName !== 'code128'" style="width: 25%">
              <h3>С шагом...</h3>
              <input type="text" class="_text" placeholder="Шаг" v-model="iter">
            </div>
          </div>
          <div class="_small-text">
            <p>*&nbsp;</p><small>По умолчанию значения равны 1</small>
          </div>
          <h3>Зачем это нужно?</h3>
          <p>Для случаев, когда необходимо распечатать сотни или тысячи штрих-кодов. На основе идентификационноно номера, указанного ранее, автоматически сгенерируются последующие штрих-коды в зависимости от указанного количества.</p>
          <h3>Пример генерации 100 штрих-кодов с шагом 1</h3>
          <div class="_flex">
            <div class="_img-layout"><img src="./assets/img/ex-1.png" alt="Firts"></div>
            <div class="_img-layout"><img src="./assets/img/arrow-right.png" alt="Arrow"></div>
            <div class="_img-layout"><img src="./assets/img/ex-2.png" alt="Second"></div>
          </div>
        </div>
        <div v-else-if="sIdx === 4" class="layout__item">
          <h3 for="format">"rcgjhn"</h3>
          <button class="_btn" @click.prevent="generateHandler">Сгенерировать</button>
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
          '3-я группа (3-5 цифр) – порядковый номер продукта;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ],
        settings: {
          maxlength: {
            pref: null,
            corpCode: null,
            serialNumber: null
          },
          placeholder: null,
          'v-model': ''
        }
      },
      ean8: {
        desc: 'Был введен для использования на небольших упаковках, где штрих-код EAN-13 был бы слишком большим; например, на сигаретах, карандашах и пачках жевательной резинки.',
        info: [
          '1-я группа (3 цифры) – код страны-производителя товара;',
          '2-я группа (4 цифры) – порядковый номер продукта;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ]
      },
      ean5: {
        desc: 'EAN-5 — является дополнением к штрих-коду EAN-13. Используется для указания цены книги.',
        info: [
          'Кодировка символов EAN-5 очень похожа на кодировку других европейских артикульных номеров;',
          'Единственное отличие состоит в том, что цифры разделены символом 01;',
          'R-код не используется.'
        ]
      },
      code128: {
        desc: 'Штриховой код Code 128 включает в себя 107 символов, из которых 103 символа данных, 3 стартовых и 1 остановочный (стоп) символ.',
        info: [
          'Стартовый символ (Start);',
          'Кодированная информация;',
          'Проверочный символ (контрольный знак)',
          'Остановочный (Stop) символ.'
        ]
      },
      itf14: {
        desc: 'Штрих код ITF-14 разработан специально для транспортной упаковки. Он создаётся на основе кодов EAN-8 или EAN-13 и дополнительно несёт в себе один символ «тип упаковки», которым кодируется вариант упаковки.',
        info: [
          'Первая цифра показывает тип упаковки;',
          'Группа далее (12 цифр) – код стандарта EAN 13;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ]
      },
      msi: {
        desc: 'Это непрерывная символика, которая не поддается самоконтролю. MSI используется в основном для управления запасами, маркировки контейнеров и полок на складах.',
        info: [
          'Представляет собой только цифры 0–9;',
          'Не поддерживает буквы и символы;',
          'Каждая цифра преобразуется в 4 двоично-десятичный код биты. Затем добавляется 1 бит и два 0 бита.'
        ]
      },
      pharmacode: {
        desc: 'Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати.',
        info: [
          'Может представляться только одним целым числом от 1 до 131 070;',
          'Минимальная длина штрихкода — 1 узкая полоса и максимальная — 16 широких.'
        ]
      }
    },
    activeFormat: {},
    count: null,
    iter: null,
    beforeGenerate: null || 1,
    generated: false,
    text: '',
    inputSettings: {
      quantity: 3,
      maxlength: {
        pref: null,
        corpCode: null,
        serialNumber: null
      },
      placeholder: null,
      type: 'text',
      'v-model': ''
    },
    data: {
      prefix: '',
      code: '',
      number: ''
    }
  }),
  methods: {
    generateHandler () {
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
      let res = ''
      setTimeout(() => {
        for (let i = 0, j = 0;
          i < this.beforeGenerate;
          i++, j += +this.iter || 1
        ) {
          this.formatName !== 'code128'
            ? res = +content + j
            : res = content
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
      switch (value) {
        case 'ean13':
          this.inputSettings.quantity = 3
          this.activeFormat = this.formats.ean13
          // this.inputSettings.
          break
        case 'ean8':
          this.inputSettings.quantity = 2
          this.activeFormat = this.formats.ean8
          break
        case 'ean5': this.activeFormat = this.formats.ean5; break
        case 'code128': this.activeFormat = this.formats.code128; break
        case 'itf14':
          this.inputSettings.quantity = 2
          this.activeFormat = this.formats.itf14
          break
        case 'msi': this.activeFormat = this.formats.msi; break
        case 'pharmacode': this.activeFormat = this.formats.pharmacode; break
      }
    }
  },
  computed: {
    formatNameHandler () {
      return ['ean13', 'ean8', 'itf14'].includes(this.formatName)
    }
  },
  mounted () {
    this.activeFormat = this.formats.ean13
  }
}
</script>

<style lang="scss">
@import './assets/scss/variables';
@import './assets/scss/mixins';
@import './assets/scss/_globalStyles';
@import './assets/scss/_layoutStyles';
@import './assets/scss/_format';
@import './assets/scss/_technicalClasses';
</style>
