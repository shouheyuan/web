import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../layout/404.vue'),
    }
  ]
})
router.addRoute({ name: '/', path: '/', component: () => import('../layout/index.vue') })
// router.beforeEach(async to => {})
const requireComponent = require.context(
  // 组件目录的相对路径
  '../views',
  // 是否查询子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\index.vue$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  // 获取组件名称
  const componentName = fileName
    .split('/')
    .slice(1, 2)
    .join()
    .replace(/\.\w+$/, '')

  // 自动注册组件
  router.addRoute('/', {
    path: `${componentName.toLowerCase()}`,
    name: `${componentName}`,
    component: componentConfig.default || componentConfig
  })
})

export default router
