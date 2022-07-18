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
      v-if="hide === true"
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
                  :maxlength="activeFormat.settings.maxlength.text"
                  :placeholder="activeFormat.settings.placeholder.text"
                  v-model="data.text"
                >
              </div>
            <div v-else class="_format-group">
              <div class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="activeFormat.settings.maxlength.first"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="activeFormat.settings.placeholder.first"
                  v-model="data.prefix"
                >
              </div>
              <div class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="activeFormat.settings.maxlength.second"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="activeFormat.settings.placeholder.second"
                  v-model="data.corpCode"
                >
              </div>
              <div v-if="formatName === 'ean13'" class="_input-wrapper">
                <input
                  type="text"
                  :maxlength="activeFormat.settings.maxlength.third"
                  class="_input-code"
                  v-maska="'#*'"
                  :placeholder="activeFormat.settings.placeholder.third"
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
import { ref, reactive, onMounted, computed, watch } from 'vue'
import JsBarcode from 'jsbarcode'

export default {
  setup () {
    const formatName = ref('ean13')
    const content = ref('')
    const activeFormat = ref({})
    const count = ref(null)
    const iter = ref(null)
    const beforeGenerate = ref(null || 1)
    const formats = reactive({
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
    })
    const data = ref({
      prefix: '',
      corpCode: '',
      serialNumber: '',
      text: ''
    })
    const exampleFormat = reactive({
      background: 'white',
      backgroundCopy: 'white',
      isTransparent: false,
      showText: true,
      lineColor: '#000000'
    })
    const sIdx = ref(1)
    const hide = ref(false)
    const isCorrect = ref(false)
    const wrongBarcode = ref(false)
    const generated = ref(false)
    const setAct = ref(false)

    const generateGraphics = () => {
      beforeGenerate.value = +count.value || 1
      let res = ''
      setTimeout(() => {
        for (let i = 0, j = 0; i < beforeGenerate.value; i++, j += +iter.value || 1) {
          formatName.value !== 'code128'
            ? res = +content.value + j
            : res = content.value
          JsBarcode(`[data-num="${i + 1}"]`, res, {
            format: formatName.value,
            background: exampleFormat.background,
            lineColor: exampleFormat.lineColor,
            displayValue: exampleFormat.showText
          })
        }
      }, 1)
      generated.value = true
    }

    const generateExample = () => {
      wrongBarcode.value = false
      setAct.value = true
      setTimeout(() => {
        JsBarcode('#example', content.value, {
          format: formatName.value,
          background: exampleFormat.background,
          lineColor: exampleFormat.lineColor,
          displayValue: exampleFormat.showText
        })
      }, 1)
    }

    const toDefault = () => {
      exampleFormat.isTransparent = false
      exampleFormat.background = 'white'
      exampleFormat.showText = true
      exampleFormat.lineColor = '#000000'
      setTimeout(() => {
        setAct.value = false
      }, 1)
    }

    watch(formatName, value => {
      content.value = ''; data.value.serialNumber = ''
      data.value.corpCode = ''; data.value.prefix = ''
      data.value.text = ''; setAct.value = false

      switch (value) {
        case 'ean13': activeFormat.value = formats.ean13; break
        case 'ean8': activeFormat.value = formats.ean8; break
        case 'ean5': activeFormat.value = formats.ean5; break
        case 'code128': activeFormat.value = formats.code128; break
        case 'itf14': activeFormat.value = formats.itf14; break
        case 'msi': activeFormat.value = formats.msi; break
        case 'pharmacode': activeFormat.value = formats.pharmacode; break
      }
    })

    const dataCollection = [data.value.prefix, data.value.corpCode, data.value.serialNumber]

    watch(() => [data.value.prefix, data.value.corpCode, data.value.serialNumber], (value) => {
      content.value = data.value.prefix + data.value.corpCode + data.value.serialNumber
      console.log(content.value.length + ' ||| ' + inputLengthHandler.value)
      if (inputLengthHandler.value && setAct.value === true) {
        generateExample()
      }
      dataCollection.forEach((_, i) => {
        if (!value[i].match(/[0-9]/) && value[i] !== '') {
          hide.value = true
        }
      })
    })
    watch(() => exampleFormat.background, (_, oldV) => {
      exampleFormat.backgroundCopy = oldV
      generateExample()
    })
    watch(() => [exampleFormat.lineColor, exampleFormat.showText], () => {
      generateExample()
    })
    watch(() => exampleFormat.isTransparent, (value) => {
      value
        ? exampleFormat.background = '#ffffff00'
        : exampleFormat.background = exampleFormat.backgroundCopy
      generateExample()
    })
    watch(() => [data.value.text], (value) => {
      content.value = data.value.text
      if (inputLengthHandler.value && setAct.value === true) {
        generateExample()
      }
      if (formatName.value !== 'code128') {
        if (!value[0].match(/[0-9]/) && value[0] !== '') { hide.value = true }
      } else {
        if (!value[0].match(/[a-zA-Z0-9]/) && value[0] !== '') { hide.value = true }
      }
    })
    watch(content, (value) => {
      value === 0 || value === ''
        ? wrongBarcode.value = true
        : wrongBarcode.value = false
    })
    watch(hide, (value) => {
      if (value) { setTimeout(() => { hide.value = false }, 5000) }
    })

    const formatNameHandler = computed(() => ['ean13', 'ean8', 'itf14'].includes(formatName.value))
    const inputLengthHandler = computed(() => {
      let length = false
      const correctLength = activeFormat.value.settings.correctLength
      formatNameHandler.value
        ? content.value.length === correctLength ? length = true : length = false
        : content.value.length >= correctLength ? length = true : length = false
      return length
    })

    onMounted(() => {
      activeFormat.value = formats.ean13
    })

    return {
      formatName,
      content,
      activeFormat,
      count,
      iter,
      beforeGenerate,
      data,
      exampleFormat,
      sIdx,
      hide,
      isCorrect,
      wrongBarcode,
      generated,
      setAct,
      generateGraphics,
      generateExample,
      toDefault,
      formatNameHandler,
      inputLengthHandler
    }
  },
  components: {
    AppNotification,
    AppFormatSectionInfo,
    AppContentSectionInfo,
    AppCountSectionInfo,
    AppExportSection,
    AppBarcodeDemo
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
