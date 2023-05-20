import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'

import './assets/styles/main.scss'

const app = createApp(App)
app.use(createPinia()).use(i18n).use(router).mount('#app')
