module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查(果断不用，这玩意儿我都没装)
  devServer: {
    // before:require('./src/mock/index.js'), // 引入mock/index.js文件
    open: true // npm run serve后自动打开页面
  }
}
