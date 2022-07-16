import { createApp } from 'vue'
import App from './App.vue'
import Maska from 'maska'
import Router from './router/router'

createApp(App)
  .use(Router)
  .use(Maska)
  .mount('#app')
