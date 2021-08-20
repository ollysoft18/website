import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Careers from '../views/Careers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
    // component: () => import( '../views/Careers.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/Apply.vue')
  },
  {
    path: '/individual',
    name: 'Individual',
    component: () => import('../views/IndividualProducts.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/BusinessProducts.vue')
  },
  {
    path: '/innovation',
    name: 'Innovation',
    component: () => import('../views/Innovation.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.hash) {
    window.scrollTo(0, 0);
}
next();
})

export default router
