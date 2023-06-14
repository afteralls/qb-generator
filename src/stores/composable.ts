export const useComposableStore = defineStore('composable', () => {
  const isDark = ref<boolean | null>()

  const { language } = useNavigatorLanguage()
  const langHandler: string = language.value?.match('ru') ? 'ru' : 'en'
  
  const curLang = useStorage<string>('lang', langHandler)
  const changeLang = () => curLang.value = curLang.value === 'en' ? 'ru' : 'en'

  return { isDark, curLang, changeLang }
})
