import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import TheGenerator from '../views/TheGenerator'

const routes = [
  {
    path: '/barcode-generation-app/dist/',
    component: HomePage
  },
  {
    path: '/barcode-generation-app/dist/generator',
    component: TheGenerator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
