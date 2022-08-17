import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import GeneratorView from '../views/GeneratorView'
import NotFoundView from '../views/NotFoundView'

const routes = [
  {
    path: '/home',
    name: 'Генератор штрих-кодов',
    component: HomeView,
    alias: '/'
  },
  {
    path: '/generator',
    name: 'Генератор',
    component: GeneratorView
  },
  {
    path: '/:notFound(.*)',
    name: 'Уп-с... Кажется, вы потерялись',
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
