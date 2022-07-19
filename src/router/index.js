import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import TheGenerator from '../views/TheGenerator'

const routes = [
  {
    path: '/barcode-generation-app/dist/home',
    component: HomePage,
    alias: '/barcode-generation-app/dist/'
  },
  {
    path: '/barcode-generation-app/dist/barcode',
    component: TheGenerator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
