import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/http',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: 'http',
        name: 'HTTP',
        component: () => import(/* webpackChunkName: "about" */ '../views/Http.vue'),
        meta: {
          title: 'Http',
          subTitle: 'axios 封装'
        }
      },
      {
        path: '组件库二次封装',
        name: '组件库二次封装',
        component: () => import('../views/组件库二次封装/index.vue')
      },
      {
        path: '动态主题',
        name: '动态主题',
        component: () => import('../views/动态主题/index.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
