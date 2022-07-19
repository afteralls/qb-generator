import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import router from './router'
import './registerServiceWorker'

createApp(App)
  .use(Maska)
  .use(router)
  .mount('#app')
