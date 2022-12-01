import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'
import LibraryView from '@/views/LibraryView.vue'

const RegView = () => import('@/views/RegView.vue')
const AuthView = () => import('@/views/AuthView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

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

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
  if(from.name !== to.name) {
    setTimeout(() => {
      window.scrollTo(0,0)
    }, 250)
  }
})

export default router
