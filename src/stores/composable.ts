import { useQRCode } from '@vueuse/integrations/useQRCode'

export interface Template {
  idx?: number
  title?: string
  name?: string
  desc?: string
  standart?: string | number
  href?: string
  path?: string
  date?: string
  mode?: Mode
  example?: boolean
  create?: boolean
}

export const useComposableStore = defineStore('composable', () => {
  const isDark = ref<boolean | null>()
  const mode = ref<Mode>('barcode')
  const qrContent = ref<string>('')
  const qrcode = useQRCode(qrContent)
  const templates = useStorage<Template[]>('templates', [])

  const { language } = useNavigatorLanguage()
  const langHandler: string = language.value?.match('ru') ? 'ru' : 'en'
  
  const curLang = useStorage<string>('lang', langHandler)
  const changeLang = () => curLang.value = curLang.value === 'en' ? 'ru' : 'en'

  return { isDark, curLang, changeLang, mode, templates, qrContent, qrcode }
})
