export const useBarcodeStore = defineStore('barcode', () => {
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

  const set: BarcodeData = reactive({
    standart: 1,
    content: '',
    bgColor: 'transparent',
    codeColor: '#000000',
    showData: true,
    curStandart: standarts[0],
    isCorrect: false,
    quantity: '1',
    generated: false,
    beforeQuanSet: null
  })

  const corLengthHandler = computed(() =>
    ['ean13', 'ean8', 'itf14'].includes(set.curStandart.codeName)
      ? set.content.length === set.curStandart.corLength
      : set.content.length >= set.curStandart.corLength
  )

  watch(
    () => set.curStandart,
    () => (set.content = '')
  )

  const currentRegEx = computed(() =>
    set.curStandart.name === 'CODE 128' ? /[А-я/\W|_]/ : /[A-zА-я/\W|_]/
  )

  const router = useRouter()
  const cpb = useComposableStore()

  watch(
    () => [set.standart, set.content, set.codeColor, set.bgColor, set.showData, set.quantity],
    (v) => {
      set.curStandart = standarts[set.standart]
      router.push({
        path: '/generator',
        query: {
          mode: cpb.mode,
          standart: set.standart,
          content: set.content,
          codeColor: set.codeColor,
          bgColor: set.bgColor,
          showData: set.showData.toString(),
          quantity: set.quantity
        }
      })
      if (corLengthHandler.value && !(v[1] as string).match(currentRegEx.value)) {
        set.isCorrect = true
        set.generated = false
        generateBarcode('#barcode-ex', set.content, set)
      } else {
        set.isCorrect = false
      }
    }
  )

  return { set, standarts }
})
