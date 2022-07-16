import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../view/HomePage'
import TheGenerator from '../view/TheGenerator'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/home', component: HomePage, alias: '/' },
    { path: '/generator', component: TheGenerator }
  ]
})
