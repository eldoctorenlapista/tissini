import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Dashboard from '../components/Dashboard'
import Cart from '../views/Cart'
import Catalog from '../views/Catalog'
import Category from '../views/Category'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/categories',
        name: 'Category',
        component: Category
      },
      {
        path: '/cart',
        name: 'Cart',
        component: Cart
      },
      {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
