const name = require('./package.json').name

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  devServer: {
    port: '9500'
  // headers: {
  //   'Access-Control-Allow-Origin': '*'
  // },
  // disableHostCheck: true,
  // historyApiFallback: true
  // },
  // 自定义webpack配置
  // configureWebpack: {
  //   output: {
  //     library: `${name}-[name]`,
  //     libraryTarget: 'umd', // 把子应用打包成 umd 库格式
  //     jsonpFunction: `webpackJsonp_${name}`
  //   }
  }
}
