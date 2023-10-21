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
    standart: 0,
    content: '',
    bgColor: 'white',
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

  const isCode128 = computed(() => set.curStandart.name === 'CODE 128')
  const currentRegEx = computed(() => (isCode128.value ? /^[a-zA-Z0-9]+$/ : /^\d+$/))
  const regExHandler = (v: string, regEx: RegExp) => !v.match(regEx) && v !== ''

  const genHandler = () => {
    if (corLengthHandler.value) {
      set.isCorrect = true
      set.generated = false
      generateBarcode('#barcode-ex', set.content, set)
    } else {
      set.isCorrect = false
    }
  }

  const router = useRouter()
  const ntf = useNotificationStore()
  const cpb = useComposableStore()

  watch(
    () => [set.standart, set.content, set.quantity, set.bgColor, set.showData, set.codeColor],
    (_, o) => {
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
      if (set.standart !== o[0]) {
        set.curStandart = standarts[set.standart]
        set.content = ''
      }
      if (regExHandler(set.content, currentRegEx.value)) {
        set.content = o[1] as string
        ntf.addNotification(isCode128.value ? 'notf.numLetErr' : 'notf.numOnlyErr')
      }
      if (regExHandler(set.quantity, /^\d+$/)) {
        set.quantity = o[2] as string
        ntf.addNotification('notf.numOnlyErr')
      }
      if (regExHandler(set.bgColor, /^[#a-zA-Z0-9]+$/)) {
        set.bgColor = o[3] as string
        ntf.addNotification('notf.numLetSpErr')
      }
      if (regExHandler(set.codeColor, /^[#a-zA-Z0-9]+$/)) {
        set.codeColor = o[5] as string
        ntf.addNotification('notf.numLetSpErr')
      }
      if (set.curStandart.name === 'PHARMACODE') {
        if ((+set.content > 2 && +set.content <= 131070) || set.content === '') {
          genHandler()
        } else if (+set.content > 131070) {
          ntf.addNotification('notf.pharmaErr')
        }
      } else {
        genHandler()
      }
    }
  )

  return { set, standarts, genHandler }
})
