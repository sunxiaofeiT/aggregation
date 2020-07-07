import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home-page',
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/resume')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/music')
  },
  {
    path: '/home-page',
    name: 'home-page',
    component: () => import('../views/home-page')
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
