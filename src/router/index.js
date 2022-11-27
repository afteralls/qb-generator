import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import LibraryView from '@/views/LibraryView.vue'
import AuthView from '@/views/AuthView.vue'
import RegView from '@/views/RegView.vue'

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
      path: '/login',
      name: 'Authorization',
      component: AuthView
    },
    {
      path: '/signup',
      name: 'Registration',
      component: RegView
    },
    {
      path: '/library',
      name: 'Library',
      component: LibraryView
    },
    {
      path: '/:notFound(.*)',
      name: 'You are lost!',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, _, next) => {
  document.title = to.name
  next()
  setTimeout(() => {
    window.scrollTo(0,0)
  }, 250)
})

export default router
