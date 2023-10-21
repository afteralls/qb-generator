import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView'
import GeneratorView from '../views/GeneratorView'
import NotFoundView from '../views/NotFoundView'

const routes = [
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
    name: "Oops... It seems you're lost",
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  document.title = to.name
  next()
})

export default router
=======
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
>>>>>>> 5baed4873112c0132bf6864ad9d3b64d222d22b6
