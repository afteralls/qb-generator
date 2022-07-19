import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import router from './router'

createApp(App)
  .use(Maska)
  .use(router)
  .mount('#app')
