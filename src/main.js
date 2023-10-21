import { createApp } from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import './registerServiceWorker.js'
import router from './router'
import store from './store'
import maska from 'maska'

createApp(App).use(store).use(router).use(maska).mount('#app')
=======
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n.js'
import { en, ru } from './languages/langData.js'

import '@/assets/styles/main.scss'

const app = createApp(App)
app.use(createPinia()).use(router).use(i18n, { en, ru }).mount('#app')
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
