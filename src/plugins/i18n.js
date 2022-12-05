import { useStorage, useNavigatorLanguage  } from '@vueuse/core'

export default {
  install: (app, options) => {
    const { language } = useNavigatorLanguage()
    const validLang = language.value.includes('-') ? language.value.split('-')[0] : language.value
    const langHandler = validLang === 'ru' ? 'ru' : 'en'
    const currentLang = useStorage('lang', langHandler)

    const changeLang = () => {
      currentLang.value === 'en' ? currentLang.value = 'ru' : currentLang.value = 'en'
    }
  
    app.config.globalProperties.$i18n = key =>
      key.split('.').reduce((o, i) => o[i], options[currentLang.value])
    app.provide('i18n', changeLang)
    app.provide('currentLang', currentLang)
  }
}