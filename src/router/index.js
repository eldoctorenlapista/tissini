import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Category from '../views/Category'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Category
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
