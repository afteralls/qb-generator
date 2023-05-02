import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

import './assets/styles/main.scss'

const app = createApp(App)
app.use(i18n).use(createPinia()).use(router).mount('#app')
