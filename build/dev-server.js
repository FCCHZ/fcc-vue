// 检查NodeJs和Npm版本
require('./check-versions')()

//获取基本配置
var config = require('../config')

//如果Node的环境变量中没有设置当前的环境（NODE_ENV），则使用config中的dev环境配置做为当前的环境
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

//opn是一个可以调用默认软件打开网址、图片、文件等内容的插件
//这里用它来调用默认浏览器打开dev-server监听的端口
// https://github.com/sindresorhus/opn
var opn = require('opn')
// node自带的文件路径工具
var path = require('path')
// express框架
var express = require('express')
var webpack = require('webpack')

// 非测试环境，即为开发环境，因为此文件只有测试环境和开发环境使用
//http-proxy-middleware是一个express中间件，用于将http请求代理道其他服务器
// 例：localhost:8080/api/xxx  -->  localhost:3000/api/xxx
// 这里使用该插件可以将前端开发中涉及到的请求代理到提供服务的后台服务器上，方便与服务器对接
var proxyMiddleware = require('http-proxy-middleware')

//开发环境下的webpack配置
var webpackConfig = require('./webpack.dev.conf')

//dev-server 监听的端口，如果没有在命令行传入端口号，则使用config.dev.port设置的端口，例如8080
var port = process.env.PORT || config.dev.port

// 用于判断是否要自动打开浏览器的布尔变量，当配置文件中没有设置自动打开浏览器的时候其值为 false
var autoOpenBrowser = !!config.dev.autoOpenBrowser

// HTTP代理表，指定规则，将某些API请求代理到相应的服务器
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

//创建express服务器
var app = express()

//webpack根据配置开始编译打包源码并返回compiler对像
var compiler = webpack(webpackConfig)

//webpack-dev-middleware将webpack编译打包后得到的产品文件存放在内存中而没有写进磁盘
//将这个中间件挂到express上使用之后即可提供这些编译后的产品文件服务
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,// 设置访问路径为webpack配置中的output里面所对应的路径
  quiet: true // 设置为true，使其不要在控制台输出日志
})
// webpack-hot-middleware，用于实现热重载功能的中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false, // 关闭控制台的日志输出
  heartbeat: 2000 // 发送心跳包的频率
})
// webpack(重新)编译打包完成后并将js、css等文件inject到html文件之后，通过热重载中间件强制页面刷新webpack-hot-middleware，用于实现热重载功能的中间件
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// 根据 proxyTable 中的代理请求配置来设置express服务器的http代理规则
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  // 格式化options，例如将'www.example.com'变成{ target: 'www.example.com' }
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
// 重定向不存在的URL，用于支持SPA（单页应用）
// 例如使用vue-router并开启了history模式
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
// 挂载webpack-dev-middleware中间件，提供webpack编译打包后的产品文件服务
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 将 Hot-reload 挂在到 express 服务上
// 挂载热重载中间件
app.use(hotMiddleware)

// serve pure static assets
// 提供static文件夹上的静态文件服务
// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 静态文件服务
app.use(staticPath, express.static('./static'))

// 访问链接
var uri = 'http://localhost:' + port

// 创建promise，在应用服务启动之后resolve
// 便于外部文件require了这个dev-server之后的代码编写
var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
// webpack-dev-middleware等待webpack完成所有编译打包之后输出提示语到控制台，表明服务正式启动
// 服务正式启动才自动打开浏览器进入页面
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

// 启动express服务器并监听相应的端口
var server = app.listen(port)

// 暴露本模块的功能给外部使用，例如下面这种用法
// var devServer = require('./build/dev-server')
// devServer.ready.then(() => {...})
// if (...) { devServer.close() }
module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
