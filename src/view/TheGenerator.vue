<template>
<div class="container">
  <div class="to-home">
    <router-link to="/" class="_row" style="gap: 0;">
      <div class="_img-wrapper"><img src="../assets/img/arrow-right.png" alt="Go back"></div>
      <h3>На главную</h3>
    </router-link>
  </div>
  <div class="layout">
    <app-notification
      v-if="this.hide === true"
      :formatName="formatName"
    ></app-notification>
    <form class="layout__form">
      <div class="layout__tabs">
        <div
          @click.prevent="sIdx = 1"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
        ><div v-if="sIdx === 1" class="_step">#1</div><h3>Формат</h3></div>
        <div
          @click.prevent="sIdx = 2, inputLengthHandler && setAct === true
            ? generateExample()
            : wrongBarcode = true"
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
          <app-format-section-info
            :activeFormat="activeFormat"
            :formatName="formatName"
          ></app-format-section-info>
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
          <app-content-section-info
            v-if="setAct === false"
            @gen-ex="generateExample"
            :inputLengthHandler="inputLengthHandler"
          ></app-content-section-info>
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
                <input type="text" class="_text" maxlength="4" placeholder="Количество" v-model="count">
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
          <app-count-section-info></app-count-section-info>
        </div>
        <app-export-section
          v-else-if="sIdx === 4"
          :inputLengthHandler="inputLengthHandler"
          :formatName="formatName"
          :count="count"
          :generated="generated"
          :exampleFormat="exampleFormat"
          @gen-graphics="generateGraphics"
          @gen-font="generateBarcodeFont"
        ></app-export-section>
      </div>
    </form>
    <app-barcode-demo
      :generated="generated"
      :beforeGenerate="beforeGenerate"
    ></app-barcode-demo>
  </div>
</div>
</template>

<script>
import AppNotification from '../components/AppNotification'
import AppFormatSectionInfo from '../components/AppFormatSectionInfo'
import AppContentSectionInfo from '../components/AppContentSectionInfo'
import AppCountSectionInfo from '../components/AppCountSectionInfo'
import AppExportSection from '../components/AppExportSection'
import AppBarcodeDemo from '../components/AppBarcodeDemo'
import JsBarcode from 'jsbarcode'

export default {
  components: {
    AppNotification,
    AppFormatSectionInfo,
    AppContentSectionInfo,
    AppCountSectionInfo,
    AppExportSection,
    AppBarcodeDemo
  },
  data: () => ({
    sIdx: 1,
    formatName: 'ean13',
    hide: false,
    isCorrect: false,
    correctLength: null,
    content: '',
    wrongBarcode: false,
    withFont: false,
    fontCollection: [],
    generated: false,
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
    generateGraphics () {
      this.beforeGenerate = +this.count || 1
      this.withFont = false
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
@import '../assets/scss/variables';
@import '../assets/scss/mixins';
@import '../assets/scss/_globalStyles';
@import '../assets/scss/_layoutStyles';
@import '../assets/scss/_technicalClasses';
</style>
