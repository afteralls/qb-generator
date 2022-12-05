import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GeneratorView from '@/views/GeneratorView.vue'
const LibraryView = () => import('@/views/LibraryView.vue')
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
    setTimeout(() => { window.scrollTo(0,0) }, 250)
  }
})

export default router
