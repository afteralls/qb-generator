export const useMainStore = defineStore('main', () => {
  const isDark = ref<boolean | null>()

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

  return { isDark, set, standarts }
})
