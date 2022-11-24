import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/generator',
      name: 'Generator',
      component: GeneratorView
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.name; next()
})

export default router
