import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (to.name !== from.name) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ top: 0 })
        }, 250)
      })
    }
  },
  routes: [
    {
      path: '/home',
      name: 'route.home',
      component: HomeView,
      alias: '/'
    },
  ]
})

export default router
