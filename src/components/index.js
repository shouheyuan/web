// context() 参数：1.目录 2.是否加载子目录 3.文件匹配 正则
const importFn = require.context('./', false, /.vue$/)
export default {
  install (app) {
    // 根据keys批量注册
    importFn.keys().forEach(key => {
      // 导入组件 
      // default 默认导出的内容 组件中export default {}
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })
  }
}