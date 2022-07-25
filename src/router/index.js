import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import TheGenerator from '../views/TheGenerator'

const routes = [
  {
    path: '/barcode-gen-app/dist/',
    component: HomePage
  },
  {
    path: '/barcode-gen-app/dist/generator',
    component: TheGenerator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
