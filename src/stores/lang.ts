export const useLangStore = defineStore('lang', () => {
  const { language } = useNavigatorLanguage()
  const langHandler: string = language.value?.match('ru') ? 'ru' : 'en'
  
  const curLang = useStorage<string>('lang', langHandler)
  const changeLang = () => curLang.value = curLang.value === 'en' ? 'ru' : 'en'

  return { curLang, changeLang }
})
