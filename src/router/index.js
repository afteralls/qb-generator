import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'

export default createRouter({
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
    {
      path: '/generator',
      name: 'route.generator',
      component: GeneratorView
    },
    {
      path: '/library',
      name: 'route.library',
      component: () => import('@/views/LibraryView.vue')
    },
    {
      path: '/:notFound(.*)',
      name: 'route.notFound',
      component: import('@/views/NotFoundView.vue')
    }
  ]
})
