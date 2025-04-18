import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import MovieIndex from '@/pages/MovieIndex.vue'

const routerOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie',
      name: 'MovieIndex',
      component: MovieIndex,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/About.vue'),
    },
  ],
}

const router = createRouter(routerOptions)

export default router
