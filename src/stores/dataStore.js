import { defineStore } from 'pinia'
import { computed, reactive, watch } from 'vue'
import JsBarcode from 'jsbarcode'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'

export const useDataStore = defineStore('data', () => {
  const standarts = [
    {
      name: 'EAN 13',
      corLength: 12,
      max: 12,
      codeName: 'ean13'
    },
    {
      name: 'EAN 8',
      corLength: 7,
      max: 7,
      codeName: 'ean8'
    },
    {
      name: 'CODE 128',
      corLength: 1,
      max: 50,
      codeName: 'code128'
    },
    {
      name: 'ITF 14',
      corLength: 13,
      max: 13,
      codeName: 'itf14',
    },
    {
      name: 'MSI',
      corLength: 1,
      max: 50,
      codeName: 'msi',
    },
    {
      name: 'PHARMACODE',
      corLength: 1,
      max: 6,
      codeName: 'pharmacode',
    }
  ]

  const set = reactive({
    standart: 'EAN 13',
    content: '',
    bgColor: 'transparent',
    codeColor: '#000000',
    showData: true,
    curStandart: standarts[0],
    isCorrect: false,
    quantity: '',
    exportFormat: 'svg',
    exportName: '',
    generated: false,
    beforeQuanSet: null
  })

  const router = useRouter()
  const templates = useStorage('templates', [])

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

  watch(() => [set.standart, set.content, set.codeColor, set.bgColor,set.showData, set.quantity], () => {
    router.push({
      path: '/generator',
      query: {
        standart: set.standart,
        content: set.content,
        codeColor: set.codeColor,
        bgColor: set.bgColor,
        showData: set.showData,
        quantity: set.quantity
      }
    })
    if (corLengthHandler.value) {
      set.isCorrect = true
      set.generated = false
      generateBarcode('#example', set.content)
    } else { set.isCorrect = false }
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
    } catch (e) { }
  }

  const generateHandler = () => {
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
    set.generated = true
  }

  return { set, standarts, generateBarcode, generateHandler, corLengthHandler, templates }
})
