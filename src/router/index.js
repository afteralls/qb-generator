import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      alias: '/'
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.name; next()
})

export default router
