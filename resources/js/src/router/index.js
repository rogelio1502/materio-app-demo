import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      layout: 'blank',
      auth: false,
    },
  },
  {
    path: '/',
    meta: {
      auth: true,
    },
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      auth: true,
    },

    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    meta: {
      auth: true,
    },
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    meta: {
      auth: true,
    },
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    meta: {
      auth: true,
    },
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    meta: {
      auth: true,
    },
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    meta: {
      auth: true,
    },
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    meta: {
      auth: true,
    },
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    meta: {
      auth: true,
    },
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    meta: {
      auth: true,
    },
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('@/views/todos/Todos.vue'),
    meta: {
      auth: true,
    },
    //   meta: {
    //     layout: 'blank',
    //   },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      next()
    } else {
      next('/login')
    }
  }
  if (to.path === '/login') {
    if (JSON.parse(localStorage.getItem('user'))) {
      next('/')
    }
  }
  next()
})

export default router
