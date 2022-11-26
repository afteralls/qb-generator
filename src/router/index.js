import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
    },
    {
      path: '/:notFound(.*)',
      name: 'You are lost!',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.name; next()
})

export default router
