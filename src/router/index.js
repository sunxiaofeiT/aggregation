import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/music',
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
  }
]

const router = new VueRouter({
  routes
})

export default router
