import langData from '@/languages/langData'
import type { App } from 'vue'

export default {
  install: (app: App) => {
    const lang = useLangStore()
    
    app.config.globalProperties.$i18n = (key: string) =>
      key.split('.').reduce((o, i) => o[i], langData[lang.curLang])
    app.provide('func', app.config.globalProperties.$i18n)
  }
}
