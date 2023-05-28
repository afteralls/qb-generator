export const useMainStore = defineStore('main', () => {
  const isDark = ref<boolean | null>()

  const standarts: Standart[] = [
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
      max: 30,
      codeName: 'code128'
    },
    {
      name: 'ITF 14',
      corLength: 13,
      max: 13,
      codeName: 'itf14'
    },
    {
      name: 'MSI',
      corLength: 1,
      max: 30,
      codeName: 'msi'
    },
    {
      name: 'PHARMACODE',
      corLength: 1,
      max: 6,
      codeName: 'pharmacode'
    }
  ]

  const set: SetData = reactive({
    standart: 1,
    content: '',
    bgColor: 'transparent',
    codeColor: '#000000',
    showData: true,
    curStandart: standarts[0],
    isCorrect: false,
    quantity: '1',
    exportFormat: 'svg',
    exportName: '',
    generated: false,
    beforeQuanSet: null
  })

  const router = useRouter()
  const templates = useStorage('templates', [])

  const corLengthHandler = computed(() =>
    ['ean13', 'ean8', 'itf14'].includes(set.curStandart.codeName)
      ? set.content.length === set.curStandart.corLength
      : set.content.length >= set.curStandart.corLength
  )

  watch(
    () => set.curStandart.name,
    () => {
      set.content = ''
    }
  )

  const currentRegEx = computed(() =>
    set.curStandart.name === 'CODE 128' ? /[А-я/\W|_]/ : /[A-zА-я/\W|_]/
  )

  const generateBarcode = (selector: string, content: string) => {
    setTimeout(() => {
      JsBarcode(selector, content, {
        format: set.curStandart.codeName,
        background: set.bgColor,
        lineColor: set.codeColor,
        displayValue: set.showData as boolean
      })
    }, 1)
  }

  watch(
    () => [set.standart, set.content, set.codeColor, set.bgColor, set.showData, set.quantity],
    (v) => {
      set.curStandart = standarts[set.standart]
      router.push({
        path: '/generator',
        query: {
          standart: set.standart,
          content: set.content,
          codeColor: set.codeColor,
          bgColor: set.bgColor,
          showData: set.showData as string,
          quantity: set.quantity
        }
      })
      if (corLengthHandler.value && !(v[0] as string).match(currentRegEx.value)) {
        set.isCorrect = true
        set.generated = false
        generateBarcode('#example', set.content)
      } else {
        set.isCorrect = false
      }
    }
  )

  const generateHandler = () => {
    set.beforeQuanSet = +set.quantity || 1
    let curContent = ''
    setTimeout(() => {
      for (let i = 0, j = 0; i < set.beforeQuanSet!; i++, j++) {
        set.curStandart.codeName !== 'code128'
          ? (curContent = (+set.content + j).toString())
          : (curContent = set.content)
        generateBarcode(`[data-num="${i + 1}"]`, curContent)
      }
    }, 1)
    set.generated = true
  }

  return { isDark, set, standarts, generateBarcode, generateHandler, corLengthHandler, templates }
})
