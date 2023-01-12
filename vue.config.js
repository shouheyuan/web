const { resolve } = require('path')
// const { getThemeVariables } = require('ant-design-vue/dist/theme');

module.exports = {
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: getThemeVariables({
        //   dark: true, // 开启暗黑模式
        // })
        // modifyVars: {
        //   'primary-color': 'green',
        // }
      }
    }
  },

  // 设为false打包时不生成.map文件
  productionSourceMap: false,

  devServer: {
    proxy: 'http://jsonplaceholder.typicode.com'
  }
}