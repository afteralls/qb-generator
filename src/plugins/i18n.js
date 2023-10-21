export default {
  install: (app, options) => {
    const { language } = useNavigatorLanguage()
    const langHandler = !!language.value.match('ru') ? 'ru' : 'en'

    const curLang = useStorage('lang', langHandler)
    const changeLang = () => curLang.value = curLang.value === 'en' ? 'ru' : 'en'

    app.config.globalProperties.$i18n = key =>
      key.split('.').reduce((o, i) => o[i], options[curLang.value])
    app.provide('func', app.config.globalProperties.$i18n)
    app.provide('i18n', changeLang)
    app.provide('currentLang', curLang.value)
  }
}
