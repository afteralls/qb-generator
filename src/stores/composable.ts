import { useQRCode } from '@vueuse/integrations/useQRCode'
import'@vueuse/shared'

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
