import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import SignInView from '../views/SignInView.vue'
import RestsView from '../views/RestsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/rests'
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignInView,
  },
  {
    path: '/rests',
    name: 'rests',
    component: RestsView
  },
  {
    path: '/rests/feeds',
    name: 'rests-feeds',
    component: () => import('../views/RestsFeedsView.vue')
  },
  {
    path: '/rests/tops',
    name: 'rests-tops',
    component: () => import('../views/RestsTopsView.vue')
  },
  {
    path: '/users/tops',
    name: 'users-top',
    component: () => import('../views/UsersTopView.vue')
  },
  {
    path: '/users/:id',
    name: 'user-profile',
    component: () => import('../views/UserView.vue')
  },
  {
    path: '/rests/:id',
    name: 'rest',
    component: () => import('../views/RestDetailView.vue')
  },
  {
    path: '/rests/:id/dashboard',
    name: 'rest-dashboard',
    component: () => import('../views/RestDashboardView.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router

