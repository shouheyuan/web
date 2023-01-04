const { resolve } = require('path')

module.exports = {
  chainWebpack: config => {
    // 别名配置
    config.resolve.alias
      .set('@', resolve('src'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
}