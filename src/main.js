import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker.js'
import router from './router'
import store from './store'
import maska from 'maska'

createApp(App).use(store).use(router).use(maska).mount('#app')
