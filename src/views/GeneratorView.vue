<template>
<<<<<<< HEAD
<div class="container">
  <router-link class="_link" style="max-width: 250px;" to="/">
    <div class="_img-wrapper"><img src="../assets/img/arrow-left.webp" alt="To Home"></div>
    <h3>Go to Main Page</h3>
  </router-link>
  <div class="layout">
    <app-notification />
    <form class="layout__form">
      <div class="layout__tabs">
        <div
          @click.prevent="sIdx = 1"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 1}"
        >
          <div v-if="sIdx === 1" class="_step">#1</div>
          <h3>Format</h3>
        </div>
        <div
          @click.prevent="sIdx = 2, generate(300)"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 2}"
        >
          <div v-if="sIdx === 2" class="_step">#2</div>
          <h3>Content</h3>
        </div>
        <div
          @click.prevent="sIdx = 3"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 3}"
        >
          <div v-if="sIdx === 3" class="_step">#3</div>
          <h3>Quantity</h3>
        </div>
        <div
          @click.prevent="sIdx = 4"
          :class="{'layout__tab': true, 'layout__tab-active': sIdx === 4}"
        >
          <div v-if="sIdx === 4" class="_step">#4</div>
          <h3>Export</h3>
        </div>
      </div>
      <div class="layout__tab-content">
        <Transition name="tabs" mode="out-in">
          <div v-if="sIdx === 1" class="layout__item">
            <div class="layout__user-sec">
              <h3>Select the barcode type</h3>
              <div class="format__wrapper">
                <select v-model="formatName">
                  <option value="ean13">EAN 13</option>
                  <option value="ean8">EAN 8</option>
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
              <h3>Enter contents of the barcode</h3>
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
            <Transition name="tabs" mode="out-in">
              <app-content-section-info
                v-if="flags.setAct === false"
                @gen-ex="generateExample(300)"
                :inputLengthHandler="inputLengthHandler"
              />
              <div v-else class="layout__info-wrapper">
                <h3>Advanced Settings</h3>
                <div class="layout__info-wrapper-row">
                  <div class="layout__live-example">
                    <table id="table">
                      <tr><th>Barcode example</th></tr>
                      <tr><td>
                        <div class="_img-wrapper">
                          <p v-if="flags.wrongBarcode">Check the correctness of the content</p>
                          <img v-else id="example">
                        </div>
                      </td></tr>
                    </table>
                  </div>
                  <div class="layout__settings">
                    <div class="_row" style="flex-direction: row;">
                      <p>Background color</p>
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
                    <label for="addWhiteBack">Make the background transparent</label>
                    <input
                      v-model="exampleFormat.showText"
                      type="checkbox"
                      id="showTxt"
                      value="#ffffff00"
                    >
                    <label for="showTxt">Show text/code</label>
                    <div class="_row" style="flex-direction: row;">
                      <p>Barcode color</p>
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
                ><h3>Disable Advanced Settings</h3></button>
                <div class="_small-text">
                  <p>*&nbsp;</p>
                  <small>If you disable the advanced settings, all the settings you have selected will be reset</small>
                </div>
              </div>
            </Transition>
          </div>
          <div v-else-if="sIdx === 3" class="layout__item">
            <div class="layout__user-sec">
              <div class="_row">
                <div
                  class="_column"
                  :style="`width: ${currentWidth <= 600 ? '100%' : '70%'}`"
                >
                  <h3>How many barcodes do you need?</h3>
                  <input
                    type="text"
                    v-maska="'#*'"
                    class="_text"
                    maxlength="4"
                    placeholder="Quantity"
                    v-model="count"
                  >
                </div>
                <div
                  class="_column"
                  v-if="formatName !== 'code128'"
                  :style="`width: ${currentWidth <= 600 ? '100%' : '25%'}`"
                >
                  <h3>With step...</h3>
                  <input
                    type="text"
                    class="_text"
                    v-maska="'#*'"
                    maxlength="3"
                    placeholder="Step"
                    v-model="iter"
                  >
                </div>
              </div>
              <div class="_small-text">
                <p>*&nbsp;</p><small>By default, the values are 1</small>
              </div>
            </div>
            <app-count-section-info></app-count-section-info>
          </div>
          <app-export-section
            v-else-if="sIdx === 4"
            :currentWidth="currentWidth"
            :inputLengthHandler="inputLengthHandler"
            :formatName="formatName"
            :count="count"
            :generated="flags.generated"
            :exampleFormat="exampleFormat"
            @gen-graphics="generateGraphics"
          />
        </Transition>
      </div>
    </form>
    <app-barcode-demo
      :generated="flags.generated"
      :beforeGenerate="beforeGenerate"
    ></app-barcode-demo>
=======
<div class="_wrapper">
  <div class="generator-wrapper">
    <TheSettingSection />
    <ThePreviewSection />
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
  </div>
</div>
</template>

<<<<<<< HEAD
<script>
import AppNotification from '../components/AppNotification'
import AppFormatSectionInfo from '../components/AppFormatSectionInfo'
import AppContentSectionInfo from '../components/AppContentSectionInfo'
import AppCountSectionInfo from '../components/AppCountSectionInfo'
import AppExportSection from '../components/AppExportSection'
import AppBarcodeDemo from '../components/AppBarcodeDemo'
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useStore } from 'vuex'
import JsBarcode from 'jsbarcode'

export default {
  setup () {
    const formatName = ref('ean13')
    const content = ref('')
    const store = useStore()
    const activeFormat = ref({})
    const count = ref(null)
    const iter = ref(null)
    const beforeGenerate = ref(null || 1)
    const formats = reactive({
      ean13: {
        desc: 'The European Article Number is a standard to encode product numbers. The EAN is a special case of a Global Trade Item Number',
        info: [
          'Country-specific part: 1-3 digits',
          'Company part',
          'Article number: 4-5 digits',
          'Checksum digit'
        ],
        settings: {
          maxlength: {
            first: 3,
            second: 6,
            third: 5
          },
          correctLength: 12,
          placeholder: {
            first: '1-3 digits',
            second: '4-6 digits',
            third: '3-5 digits'
          }
        }
      },
      ean8: {
        desc: 'The normal length of an EAN is 13 digits. There is also a shorter version called EAN-8, for small packages, where the full 13-digit number would take too much space on the package',
        info: [
          'Country-specific part: 2-3 digits',
          'Article number: 4-5 digits',
          'Checksum digit'
        ],
        settings: {
          maxlength: {
            first: 3,
            second: 4
          },
          correctLength: 7,
          placeholder: {
            first: '2-3 digits',
            second: '4-5 digits'
          }
        }
      },
      code128: {
        desc: "is a high-density linear barcode symbology defined in ISO/IEC. It's used for alphanumeric or numeric-only barcodes.",
        info: [
          'Start symbol',
          'Encoded data',
          'Check symbol',
          'Stop symbol'
        ],
        settings: {
          maxlength: {
            text: 30
          },
          correctLength: 1,
          placeholder: {
            text: 'Text (1-30)'
          }
        }
      },
      itf14: {
        desc: 'ITF-14 is the GS1 implementation of an Interleaved 2 of 5 (ITF) bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits.',
        info: [
          'Packaging indicator',
          'The next 12 digits are representing the product number',
          'Checksum digit'
        ],
        settings: {
          maxlength: {
            first: 1,
            second: 12
          },
          correctLength: 13,
          placeholder: {
            first: 'Packaging indicator (1)',
            second: 'Product number (12)'
          }
        }
      },
      msi: {
        desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code',
        info: [
          'Can display only the number 0-9'
        ],
        settings: {
          maxlength: {
            text: 16
          },
          correctLength: 1,
          placeholder: {
            text: 'Digits (1-16)'
          }
        }
      },
      pharmacode: {
        desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
        info: [
          'Pharmacode can represent only a single integer from 3 to 131 070',
          'The minimum barcode is 2 bars and the maximum 16'
        ],
        settings: {
          maxlength: {
            text: 6
          },
          correctLength: 1,
          placeholder: {
            text: 'Digits (1-6)'
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
    const flags = reactive({
      isCorrect: false,
      wrongBarcode: false,
      generated: false,
      setAct: false
    })

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
      flags.generated = true
    }

    const generateExample = delay => {
      flags.wrongBarcode = false
      flags.setAct = true
      setTimeout(() => {
        JsBarcode('#example', content.value, {
          format: formatName.value,
          background: exampleFormat.background,
          lineColor: exampleFormat.lineColor,
          displayValue: exampleFormat.showText
        })
      }, delay || 1)
    }

    const toDefault = () => {
      exampleFormat.isTransparent = false
      exampleFormat.background = 'white'
      exampleFormat.showText = true
      exampleFormat.lineColor = '#000000'
      setTimeout(() => {
        flags.setAct = false
      }, 1)
    }

    const generate = delay => {
      inputLengthHandler.value && flags.setAct === true
        ? generateExample(delay)
        : flags.wrongBarcode = true
    }

    watch(() => [data.value.prefix, data.value.corpCode, data.value.serialNumber, data.value.text], (value) => {
      for (let i = 0; i < Object.keys(data).length - 1; i++) {
        if (formatNameHandler.value) {
          content.value = data.value.prefix + data.value.corpCode + data.value.serialNumber
          if (!value[i].match(/[0-9]/) && value[i] !== '') {
            store.dispatch('setNotification', 'Only the input of numbers is available')
          }
          generate()
        } else if (formatName.value === 'code128') {
          content.value = data.value.text
          if (!value[3].match(/[a-zA-Z0-9]/) && value[3] !== '') {
            store.dispatch('setNotification', 'Only the input of numbers and Latin characters is available')
          }
          generate()
        } else {
          content.value = data.value.text
          if (!value[i].match(/[0-9]/) && value[i] !== '') {
            store.dispatch('setNotification', 'Only the input of numbers is available')
          }
          generate()
        }
      }
    })
    watch(formatName, value => {
      content.value = ''
      flags.setAct = false
      for (const el in data.value) { data.value[el] = '' }
      switch (value) {
        case 'ean13': activeFormat.value = formats.ean13; break
        case 'ean8': activeFormat.value = formats.ean8; break
        case 'code128': activeFormat.value = formats.code128; break
        case 'itf14': activeFormat.value = formats.itf14; break
        case 'msi': activeFormat.value = formats.msi; break
        case 'pharmacode': activeFormat.value = formats.pharmacode; break
      }
    })
    watch(() => exampleFormat.background, (_, oldV) => {
      exampleFormat.backgroundCopy = oldV
      generate()
    })
    watch(() => [exampleFormat.lineColor, exampleFormat.showText], () => generate())
    watch(() => exampleFormat.isTransparent, (value) => {
      value
        ? exampleFormat.background = '#ffffff00'
        : exampleFormat.background = exampleFormat.backgroundCopy
      generate()
    })
    watch(content, () => {
      !inputLengthHandler.value
        ? flags.wrongBarcode = true
        : flags.wrongBarcode = false
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

    const currentWidth = ref(0)
    const updateWidth = () => { currentWidth.value = window.innerWidth }
    window.addEventListener('resize', updateWidth)
    onMounted(() => { activeFormat.value = formats.ean13; updateWidth() })

    return {
      currentWidth,
      formatName,
      content,
      activeFormat,
      count,
      iter,
      beforeGenerate,
      data,
      exampleFormat,
      sIdx,
      flags,
      generateGraphics,
      generate,
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
@import '../assets/scss/main';
@import '../assets/scss/_layoutStyles';

.tabs {
  &-enter-from {
    opacity: 0;
    transform: translateX(-10px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-to {
    opacity: 0;
    transform: translateX(10px);

    @media (max-width: $extra-medium) {
      transform: none;
    }
  }
  &-leave-active {
    transition: all 0.2s ease-in;
=======
<style scoped lang="scss">
.generator-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: calc(var(--space) * 2);

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
  }
}
</style>
