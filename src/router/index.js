import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import TheGenerator from '../views/TheGenerator'

const routes = [
  { path: '/home', component: HomePage, alias: '/' },
  { path: '/generator', component: TheGenerator }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
