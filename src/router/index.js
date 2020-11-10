import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    meta: { view:'mainView'}
  },
  {
    path: '/passport',
    name: 'passport',
    meta: { view:'passport'}
  },
  {
    path: '/guide',
    name: 'guide',
    meta: { view:'guide'}
  },
  {
    path: '/manual',
    name: 'manual',
    meta: { view:'manual'}
  },
  {
    path: '/auth',
    name: 'auth',
    meta: { auth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
