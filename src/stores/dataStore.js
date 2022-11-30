import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import JsBarcode from 'jsbarcode'

export const useDataStore = defineStore('data', () => {
  const standarts = [
    {
      name: 'EAN 13',
      desc: 'The European Article Number is a standard to encode product numbers. The EAN is a special case of a Global Trade Item Number',
      info: [
        'Country-specific part: 1-3 digits',
        'Company part',
        'Article number: 4-5 digits',
        'Checksum digit'
      ],
      corLength: 12,
      placeholder: 'Digits (12)',
      max: 12,
      codeName: 'ean13',
      import: 'ean13'
    },
    {
      name: 'EAN 8',
      desc: 'The normal length of an EAN is 13 digits. There is also a shorter version called EAN-8, for small packages, where the full 13-digit number would take too much space on the package',
      info: [
        'Country-specific part: 2-3 digits',
        'Article number: 4-5 digits',
        'Checksum digit'
      ],
      corLength: 7,
      placeholder: 'Digits (7)',
      max: 7,
      codeName: 'ean8',
      import: 'ean8'
    },
    {
      name: 'CODE 128',
      desc: "is a high-density linear barcode symbology defined in ISO/IEC. It's used for alphanumeric or numeric-only barcodes.",
      info: [
        'Start symbol',
        'Encoded data',
        'Check symbol',
        'Stop symbol'
      ],
      corLength: 1,
      placeholder: 'Text (50)',
      max: 50,
      codeName: 'code128',
      import: 'code128'
    },
    {
      name: 'ITF 14',
      desc: 'ITF-14 is the GS1 implementation of an Interleaved 2 of 5 (ITF) bar code to encode a Global Trade Item Number. ITF-14 symbols are generally used on packaging levels of a product, such as a case box of 24 cans of soup. The ITF-14 will always encode 14 digits.',
      info: [
        'Packaging indicator',
        'The next 12 digits are representing the product number',
        'Checksum digit'
      ],
      corLength: 13,
      placeholder: 'Digits (13)',
      max: 13,
      codeName: 'itf14',
      import: 'itf14'
    },
    {
      name: 'MSI',
      desc: 'The code can display only the number 0-9 and has no fixed length. Today this type of code is outdated and is no longer used. Because of this most barcode scanners can not recognize this type of code',
      info: [
        'Can display only the number 0-9'
      ],
      corLength: 1,
      placeholder: 'Digits (50)',
      max: 50,
      codeName: 'msi',
      import: 'msicode'
    },
    {
      name: 'PHARMACODE',
      desc: 'Pharmaceutical Binary Code is a barcode standard, used in the pharmaceutical industry as a packing control system. It is designed to be readable despite printing errors',
      info: [
        'Pharmacode can represent only a single integer from 3 to 131 070',
        'The minimum barcode is 2 bars and the maximum 16'
      ],
      corLength: 1,
      placeholder: 'Digits (3 — 131 070)',
      max: 6,
      codeName: 'pharmacode',
      import: 'pharmacode'
    }
  ]

  const formats = [
    { name: 'SVG' },
    { name: 'JPG' },
    { name: 'PNG' }
  ]

  const set = reactive({
    standart: 'EAN 13',
    content: '',
    bgColor: 'transparent',
    codeColor: '#000000',
    showData: true,
    curStandart: standarts[0],
    exampleFlag: false,
    quantity: '',
    exportFormat: 'svg',
    exportName: '',
    generateFlag: false,
    beforeQuanSet: null
  })

  const corLengthHandler = computed(() => {
    return ['ean13', 'ean8', 'itf14'].includes(set.curStandart.codeName)
      ? set.content.length === set.curStandart.corLength
      : set.content.length >= set.curStandart.corLength
  })

  watch(() => set.standart, newV => {
    standarts.map((standart, idx) => {
      if (standart.name === newV) {
        set.curStandart = standarts[idx]
        set.content = ''
      }
    })
  })

  watch(() => [set.content, set.codeColor, set.bgColor, set.showData], () => {
    if (corLengthHandler.value) {
      set.exampleFlag = true
      generateBarcode('#example', set.content)
    } else {
      set.exampleFlag = false
    }
  })

  const generateBarcode = (selector, content) => {
    try {
      setTimeout(() => {
        JsBarcode(selector, content, {
          format: set.curStandart.codeName,
          background: set.bgColor,
          lineColor: set.codeColor,
          displayValue: set.showData
        })
      }, 1)
    } catch (e) {
     console.trace(e.stack)
    }
  }

  const generate = () => {
    set.beforeQuanSet = +set.quantity || 1
    let curContent = ''
    setTimeout(() => {
      for (let i = 0, j = 0; i < set.beforeQuanSet; i++, j++) {
        set.curStandart.codeName !== 'code128'
          ? curContent = +set.content + j
          : curContent = set.content
        generateBarcode(`[data-num="${i + 1}"]`, curContent)
      }
    }, 1)
    set.generateFlag = true
  }

  const setDefaultSet = () => {
    set.content = '',
    set.exampleFlag = false,
    set.generateFlag = false
  }

  return { set, standarts, formats, generateBarcode, generate, setDefaultSet }
})
