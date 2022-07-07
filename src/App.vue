<template>
<div class="container">
  <div class="layout">
    <div v-if="this.hide === true" class="notification">
      <img src="./assets/img/ntf.png" alt="Notification">
      <div class="notification__text">
        <small>{{ notificationHandler }}</small>
      </div>
    </div>
    <form class="layout__form">
      <div class="layout__tabs">
        <div
          @click.prevent="sIdx = 1"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
        ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3></div>
        <div
          @click.prevent="sIdx = 2, inputLengthHandler && setAct === true ? generateExample() : wrongBarcode = true"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
        ><div v-if="sIdx === 2" class="_step">#2</div><h3>Содержание</h3></div>
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
          <div class="layout__info-wrapper">
            <div class="format">
              <div class="format__desc">
                <h3> Краткое описание</h3>
                <div class="_red-mark">
                  <p>{{ activeFormat.desc }}</p>
                </div>
              </div>
              <div class="format__info">
                <div class="format__example">
                  <table id="table">
                    <tr><th>Пример штрих-кода</th></tr>
                    <tr><td>
                      <div class="_img-wrapper">
                        <img
                          :src="require(`./assets/img/barcode-exsamples/${formatName}.png`)"
                          alt="Пример штрих-кода"
                        >
                      </div>
                    </td></tr>
                  </table>
                </div>
                <div class="format__structure">
                  <h3>Структура штрих-кода</h3>
                  <ul>
                    <li v-for="el in activeFormat.info" :key="el">{{ el }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 2" class="layout__item">
          <div class="layout__user-sec">
            <h3>Введите содержимое штрих-кода</h3>
            <div v-if="!formatNameHandler" class="_input-wrapper">
                <input
                  class="_text"
                  type="text"
                  v-maska="formatName === 'code128' ? 'X*' : '#*'"
                  :maxlength="inputSettings.maxlength.text"
                  :placeholder="inputSettings.placeholder.text"
                  v-model="data.text"
                >
              </div>
            <div v-else class="_format-group">
              <div class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="inputSettings.maxlength.first"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="inputSettings.placeholder.first"
                  v-model="data.prefix"
                >
              </div>
              <div class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="inputSettings.maxlength.second"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="inputSettings.placeholder.second"
                  v-model="data.corpCode"
                >
              </div>
              <div v-if="formatName === 'ean13'" class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="inputSettings.maxlength.third"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="inputSettings.placeholder.third"
                  v-model="data.serialNumber"
                >
              </div>
            </div>
          </div>
          <div v-if="setAct === false" class="layout__info-wrapper" style="justify-content: center; text-align: center;">
            <p>На данном этапе, после ввода содержимого, вы можете сразу же перейти к следующему шагу и сгенерировать штрих-коды с настройками по-умолчанию</p>
            <div class="_or"><strong>и л и</strong></div>
            <div class="_button-wrapper">
              <button
                @click.prevent="generateExample"
                class="_btn"
                :disabled="!inputLengthHandler"
              >Включить расширенные настройки</button>
            </div>
            <p>И в режиме реального времени настроить цвет заднего фона, самого штрих-кода, а также скрыть отображение текста/кода, если будет нужно</p>
            <div class="_small-text" style="display: flex; justify-content: center">
              <p>*&nbsp;</p><small>Все изменения сразу же вступят в силу для последующих штрих-кодов</small>
            </div>
          </div>
          <div v-else class="layout__info-wrapper">
            <h3>Расширенные настройки</h3>
            <div class="layout__info-wrapper-row">
              <div class="layout__live-example">
                <table id="table">
                  <tr><th>Пример штрих-кода</th></tr>
                  <tr><td>
                    <p v-if="wrongBarcode">Проверьте корректность содержимого</p>
                    <div v-else class="_img-wrapper"><img id="example"></div>
                  </td></tr>
                </table>
              </div>
              <div class="layout__settings">
                <div class="_row">
                  <p>Цвет фона</p>
                  <input
                    style="width: 60%"
                    type="text"
                    @input="exampleFormat.isTransparent = false"
                    v-model="exampleFormat.background"
                    placeholder="'black' или '#ffffff'"
                  >
                </div>
                <input
                  v-model="exampleFormat.isTransparent"
                  id="addWhiteBack"
                  type="checkbox"
                >
                <label for="addWhiteBack">Сделать фон прозрачным</label>
                <input
                  v-model="exampleFormat.showText"
                  type="checkbox"
                  id="showTxt"
                  value="#ffffff00"
                >
                <label for="showTxt">Показать текст/код</label>
                <div class="_row">
                  <p>Цвет штрих-кода</p>
                  <input
                    style="width: 45%"
                    v-model="exampleFormat.lineColor"
                    type="text"
                    placeholder="'black' или '#ffffff'"
                  >
                </div>
              </div>
            </div>
            <button
              @click.prevent="toDefault"
              class="_btn"
              v-if="setAct === true"
            >Отключить расширенные настройки</button>
            <div class="_small-text">
              <p>*&nbsp;</p>
              <small>При отключении расширенных настроек все выбранные Вами параметры будут сброшены</small>
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 3" class="layout__item">
          <div class="layout__user-sec">
            <div class="_row">
              <div class="_column" style="width: 70%">
                <h3>Какое количество штрих-кодов нужно?</h3>
                <input type="text" class="_text" maxlength="5" placeholder="Количество" v-model="count">
              </div>
              <div class="_column" v-if="formatName !== 'code128'" style="width: 25%">
                <h3>С шагом...</h3>
                <input type="text" class="_text" maxlength="3" placeholder="Шаг" v-model="iter">
              </div>
            </div>
            <div class="_small-text">
              <p>*&nbsp;</p><small>По умолчанию значения равны 1</small>
            </div>
          </div>
          <div class="layout__info-wrapper">
            <h3>Зачем это нужно?</h3>
            <div class="_red-mark">
              <p>Для случаев, когда необходимо распечатать сотни или тысячи штрих-кодов. На основе идентификационного номера, указанного ранее, автоматически сгенерируются последующие штрих-коды в зависимости от указанного количества.</p>
            </div>
            <h3>Пример генерации 100 штрих-кодов с шагом 1</h3>
            <div class="_row">
              <div class="_img-layout"><img src="./assets/img/ex-1.png" alt="Firts"></div>
              <div class="_img-layout"><img src="./assets/img/arrow-right.png" alt="Arrow"></div>
              <div class="_img-layout"><img src="./assets/img/ex-2.png" alt="Second"></div>
            </div>
          </div>
        </div>
        <div v-else-if="sIdx === 4" class="layout__item">
          <div class="layout__info-wrapper" style="text-align: center">
            <div class="layout__user-sec">
              <h3>Почти готово!</h3>
              <p>Осталось только сгенерировать все штрих-коды...</p>
              <button
                class="_btn"
                @click.prevent="generateHandler"
                :disabled="!inputLengthHandler"
              >Сгенерировать</button>
            </div>
            <div v-if="generated" class="layout__info-wrapper">
              <p>В окне справа находятся сгенерированные штрих-коды. Если вас что-то не устраивает, то вы можете изменить введённые ранее данные и повторить генерацию.<br>Если же вас всё устраивает, то выбирайте нужный формат для экспорта и пользуйтесь на здоровье!</p>
              <div class="_row">
                <div class="_column">
                  <p>В каком формате экспортировать?</p>
                  <div class="_row">
                    <input v-model="exportFormat" id="png" value="png" type="radio" name="exportFormat">
                    <label data-radio for="png">PNG</label>
                    <input v-model="exportFormat" id="jpg" value="jpg" type="radio" name="exportFormat">
                    <label data-radio for="jpg">JPG</label>
                    <input v-model="exportFormat" id="svg" value="svg" type="radio" name="exportFormat">
                    <label data-radio for="svg">SVG</label>
                  </div>
                </div>
                <div class="_column" style="width: auto">
                  <p>Как будет называться архив?</p>
                  <input type="text" v-model="zipName" placeholder="Название архива">
                </div>
              </div>
              <button
                  class="_btn"
                  @click.prevent="exportHandler"
                >Экспортировать</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="layout__barcode">
      <div class="layout__barcode-container">
        <div v-if="!generated" class="_not-gen">
          <h3>Данное окно — превью для ваших штрих-кодов, но вы их пока не сгенерировали...</h3>
        </div>
        <div v-else class="layout__table-container">
          <table id="table">
            <tr><th>№</th><th>Штрих-код</th></tr>
            <tr v-for="(num, idx) in beforeGenerate" :key="num">
              <td>{{ idx + 1 }}</td>
              <td><div class="_img-wrapper"><svg :data-num="idx + 1"></svg></div></td>
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
    exportFormat: 'png',
    zipName: 'png-collection',
    formatName: 'ean13',
    hide: false,
    isCorrect: false,
    correctLength: null,
    content: '',
    wrongBarcode: false,
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
            first: 3,
            second: 6,
            third: 5
          },
          correctLength: 12,
          placeholder: {
            first: 'Код страны (1-3)',
            second: 'Код производителя (4-6)',
            third: 'Код товара (5)'
          }
        }
      },
      ean8: {
        desc: 'Был введен для использования на небольших упаковках, где штрих-код EAN-13 был бы слишком большим; например, на сигаретах, карандашах и пачках жевательной резинки.',
        info: [
          '1-я группа (3 цифры) – код страны-производителя товара;',
          '2-я группа (4 цифры) – порядковый номер продукта;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ],
        settings: {
          maxlength: {
            first: 3,
            second: 4
          },
          correctLength: 7,
          placeholder: {
            first: 'Код страны (3 симв.)',
            second: 'Код товара (4 симв.)'
          }
        }
      },
      ean5: {
        desc: 'EAN-5 — является дополнением к штрих-коду EAN-13. Используется для указания цены книги.',
        info: [
          'Кодировка символов EAN-5 очень похожа на кодировку других европейских артикульных номеров;',
          'Единственное отличие состоит в том, что цифры разделены символом 01;',
          'R-код не используется.'
        ],
        settings: {
          maxlength: {
            text: 5
          },
          correctLength: 5,
          placeholder: {
            text: 'Числа (5 симв.)'
          }
        }
      },
      code128: {
        desc: 'Штриховой код Code 128 включает в себя 107 символов, из которых 103 символа данных, 3 стартовых и 1 остановочный (стоп) символ.',
        info: [
          'Стартовый символ (Start);',
          'Кодированная информация;',
          'Проверочный символ (контрольный знак)',
          'Остановочный (Stop) символ.'
        ],
        settings: {
          maxlength: {
            text: 30
          },
          correctLength: 1,
          placeholder: {
            text: 'Текст (1-30 симв.)'
          }
        }
      },
      itf14: {
        desc: 'Штрих код ITF-14 разработан специально для транспортной упаковки. Он создаётся на основе кодов EAN-8 или EAN-13 и дополнительно несёт в себе один символ «тип упаковки», которым кодируется вариант упаковки.',
        info: [
          'Первая цифра показывает тип упаковки;',
          'Группа далее (12 цифр) – код стандарта EAN 13;',
          'Последняя цифра — контрольная. Вычисляется автоматически.'
        ],
        settings: {
          maxlength: {
            first: 1,
            second: 12
          },
          correctLength: 13,
          placeholder: {
            first: 'Тип упаковки (1 симв.)',
            second: 'Код стандарта EAN 13 (12 симв.)'
          }
        }
      },
      msi: {
        desc: 'Это непрерывная символика, которая не поддается самоконтролю. MSI используется в основном для управления запасами, маркировки контейнеров и полок на складах.',
        info: [
          'Представляет собой только цифры 0–9;',
          'Не поддерживает буквы и символы;',
          'Каждая цифра преобразуется в 4 двоично-десятичный код биты. Затем добавляется 1 бит и два 0 бита.'
        ],
        settings: {
          maxlength: {
            text: 16
          },
          correctLength: 1,
          placeholder: {
            text: 'Числа (1-16 симв.)'
          }
        }
      },
      pharmacode: {
        desc: 'Фармацевтической двоичный код — стандарт штрихового кода, используемый в фармацевтической промышленности в качестве системы контроля упаковок. Может быть читаемым, даже несмотря на ошибки при печати.',
        info: [
          'Может представляться только одним целым числом от 1 до 131 070;',
          'Минимальная длина штрихкода — 1 узкая полоса и максимальная — 16 широких.'
        ],
        settings: {
          maxlength: {
            text: 6
          },
          correctLength: 1,
          placeholder: {
            text: 'Числа (1-6 симв.)'
          }
        }
      }
    },
    setAct: false,
    activeFormat: {},
    count: null,
    iter: null,
    beforeGenerate: null || 1,
    generated: false,
    inputSettings: {
      maxlength: {
        pref: null,
        corpCode: null,
        serialNumber: null
      },
      placeholder: {}
    },
    data: {
      prefix: '',
      corpCode: '',
      serialNumber: '',
      text: ''
    },
    exampleFormat: {
      background: 'white',
      backgroundCopy: 'white',
      isTransparent: false,
      showText: true,
      lineColor: '#000000'
    }
  }),
  methods: {
    generateHandler () {
      this.beforeGenerate = +this.count || 1
      let res = ''
      setTimeout(() => {
        for (let i = 0, j = 0; i < this.beforeGenerate; i++, j += +this.iter || 1) {
          this.formatName !== 'code128' ? res = +this.content + j : res = this.content
          JsBarcode(`[data-num="${i + 1}"]`, res, {
            format: this.formatName,
            background: this.exampleFormat.background,
            lineColor: this.exampleFormat.lineColor,
            displayValue: this.exampleFormat.showText
          })
        }
      }, 1)
      this.generated = true
    },
    exportHandler () {
      const flag = this.count
      const exportFormat = this.exportFormat
      const zipFolderName = this.zipName
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
            zip.file(`BC-${i}.${exportFormat}`, blob, { base64: true })

            zip.generateAsync({ type: 'blob' }).then(function (content) {
              if (i >= flag) {
                saveAs(content, `${zipFolderName}.zip`)
              }
            })
          }, `image/${exportFormat}`)
        }
        img.src = url
      }
    },
    generateExample () {
      this.wrongBarcode = false
      this.setAct = true
      setTimeout(() => {
        JsBarcode('#example', this.content, {
          format: this.formatName,
          background: this.exampleFormat.background,
          lineColor: this.exampleFormat.lineColor,
          displayValue: this.exampleFormat.showText
        })
      }, 1)
    },
    toDefault () {
      this.exampleFormat.isTransparent = false
      this.exampleFormat.background = 'white'
      this.exampleFormat.showText = true
      this.exampleFormat.lineColor = '#000000'
      setTimeout(() => {
        this.setAct = false
      }, 1)
    }
  },
  watch: {
    formatName (value) {
      this.content = ''; this.data.serialNumber = ''
      this.data.corpCode = ''; this.data.prefix = ''
      this.data.text = ''; this.setAct = false

      switch (value) {
        case 'ean13':
          this.activeFormat = this.formats.ean13
          this.inputSettings = this.formats.ean13.settings
          this.correctLength = this.formats.ean13.settings.correctLength
          break
        case 'ean8':
          this.activeFormat = this.formats.ean8
          this.inputSettings = this.formats.ean8.settings
          this.correctLength = this.formats.ean8.settings.correctLength
          break
        case 'ean5':
          this.activeFormat = this.formats.ean5
          this.inputSettings = this.formats.ean5.settings
          this.correctLength = this.formats.ean5.settings.correctLength
          break
        case 'code128':
          this.activeFormat = this.formats.code128
          this.inputSettings = this.formats.code128.settings
          this.correctLength = this.formats.code128.settings.correctLength
          break
        case 'itf14':
          this.activeFormat = this.formats.itf14
          this.inputSettings = this.formats.itf14.settings
          this.correctLength = this.formats.itf14.settings.correctLength
          break
        case 'msi':
          this.activeFormat = this.formats.msi
          this.inputSettings = this.formats.msi.settings
          this.correctLength = this.formats.msi.settings.correctLength
          break
        case 'pharmacode':
          this.activeFormat = this.formats.pharmacode
          this.inputSettings = this.formats.pharmacode.settings
          this.correctLength = this.formats.pharmacode.settings.correctLength
          break
      }
    },
    exportFormat (value) {
      switch (value) {
        case 'png': this.zipName = 'png-collection'; break
        case 'jpg': this.zipName = 'jpg-collection'; break
        case 'svg': this.zipName = 'svg-collection'; break
      }
    },
    'exampleFormat.background' (_, oldV) {
      this.exampleFormat.backgroundCopy = oldV
      this.generateExample()
    },
    'exampleFormat.lineColor' () { this.generateExample() },
    'exampleFormat.showText' () { this.generateExample() },
    'exampleFormat.isTransparent' (value) {
      value
        ? this.exampleFormat.background = '#ffffff00'
        : this.exampleFormat.background = this.exampleFormat.backgroundCopy
      this.generateExample()
    },
    'data.prefix' (value) {
      this.content = this.data.prefix + this.data.corpCode + this.data.serialNumber
      if (this.inputLengthHandler && this.setAct === true) {
        this.generateExample()
      }
      if (!value.match(/[0-9]/) && value !== '') { this.hide = true }
    },
    'data.corpCode' (value) {
      this.content = this.data.prefix + this.data.corpCode + this.data.serialNumber
      if (this.inputLengthHandler && this.setAct === true) {
        this.generateExample()
      }
      if (!value.match(/[0-9]/) && value !== '') { this.hide = true }
    },
    'data.serialNumber' (value) {
      this.content = this.data.prefix + this.data.corpCode + this.data.serialNumber
      if (this.inputLengthHandler && this.setAct === true) {
        this.generateExample()
      }
      if (!value.match(/[0-9]/) && value !== '') { this.hide = true }
    },
    'data.text' (value) {
      this.content = this.data.text
      if (this.inputLengthHandler && this.setAct === true) {
        this.generateExample()
      }
      if (this.formatName !== 'code128') {
        if (!value.match(/[0-9]/) && value !== '') { this.hide = true }
      } else {
        if (!value.match(/[a-zA-Z0-9]/) && value !== '') { this.hide = true }
      }
    },
    content (value) {
      value === 0 || value === '' ? this.wrongBarcode = true : this.wrongBarcode = false
    },
    hide (value) { if (value) { setTimeout(() => { this.hide = false }, 5000) } }
  },
  computed: {
    formatNameHandler () {
      return ['ean13', 'ean8', 'itf14'].includes(this.formatName)
    },
    inputLengthHandler () {
      let length = false
      this.formatNameHandler
        ? this.content.length === this.correctLength ? length = true : length = false
        : this.content.length >= this.correctLength ? length = true : length = false
      return length
    },
    notificationHandler () {
      return this.formatName === 'code128'
        ? 'Доступен только ввод чисел и латинских символов'
        : 'Доступен только ввод чисел'
    }
  },
  mounted () {
    this.activeFormat = this.formats.ean13
    this.inputSettings = this.formats.ean13.settings
    this.correctLength = this.formats.ean13.settings.correctLength
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
