import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import SignInView from '../views/SignInView.vue'
import RestsView from '../views/RestsView.vue'
import store from './../store'

Vue.use(VueRouter)

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }

  next()
}


const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/admin',
    exact: true,
    redirect:'/admin/rests'
  },
  {
    path: '/admin/rests',
    name: 'admin-rests',
    component: () => import('../views/AdminRestsView.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/UserRoleManageView.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategoriesView.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestNewView.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestEditView.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestView.vue'),
    beforeEnter: authorizeIsAdmin
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
    path: '/users/:id/edit',
    name: 'user-profile-edit',
    component: () => import('../views/UserEditView.vue')
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

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['sign-up', 'sign-in']

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }


  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router

