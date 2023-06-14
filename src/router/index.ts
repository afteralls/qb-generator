import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LibraryView from '@/views/LibraryView.vue'
import GeneratorView from '@/views/GeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (to.name !== from.name) {
      return new Promise((resolve) => {
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
    {
      path: '/library',
      name: 'route.library',
      component: LibraryView
    },
    {
      path: '/generator',
      name: 'route.generator',
      component: GeneratorView
    },
    {
      path: '/:notFound(.*)',
      name: 'route.notFound',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
