import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Maskmap from '../views/Maskmap.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maskmap',
    name: 'Maskmap',
    component: Maskmap
  }
]

const router = new VueRouter({
  routes
})

export default router
