import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import TheGenerator from '../views/TheGenerator'
import AppBarcodeDemo from '../components/AppBarcodeDemo'

const routes = [
  {
    path: '/home',
    // /barcode-generation-app/dist/home
    component: HomePage,
    alias: '/'
    // /barcode-generation-app/dist/
  },
  {
    path: '/generator',
    // /barcode-generation-app/dist/generator
    component: TheGenerator
  },
  {
    path: '/demo',
    // /barcode-generation-app/dist/generator
    component: AppBarcodeDemo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
