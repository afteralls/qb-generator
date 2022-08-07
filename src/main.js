import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker.js'
import Maska from 'maska'
import router from './router'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBDlGcolIXAucwYZcW7rcwD1E8g9KG4U3A',
  authDomain: 'barcode-gen-app.firebaseapp.com',
  projectId: 'barcode-gen-app',
  storageBucket: 'barcode-gen-app.appspot.com',
  messagingSenderId: '939595302110',
  appId: '1:939595302110:web:b615cfcbfc1025b1b02e4f'
}

initializeApp(firebaseConfig)
createApp(App)
  .use(Maska)
  .use(router)
  .mount('#app')
