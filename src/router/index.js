import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import GeneratorPage from '../views/GeneratorPage'
import NotFoundPage from '../views/NotFoundPage'

const routes = [
  {
    path: '/home',
    name: 'Генератор штрих-кодов',
    component: HomePage,
    alias: '/'
  },
  {
    path: '/generator',
    name: 'Генератор',
    component: GeneratorPage
  },
  {
    path: '/:notFound(.*)',
    name: 'Уп-с... Кажется, вы потерялись',
    component: NotFoundPage
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

// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
// })

export default router
