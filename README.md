
# 杭州FreeCodeCamp社区-Vue
### 版本：V1.0.0

> 此代码不开源，开发完之后在新建一个版本库进行源码开源

## 项目构建

``` bash
# 安装依赖，一下两种书写方式均可
npm install ／ cnpm i

# 运行项目，vue会在本地自动构建服务，服务地址为 localhost:8080端口
npm run dev

# 打包项目文件，打包发布到服务器上，文件大小被压缩
npm run build

```
 
 ## 项目文件目录结构
 - assets：存放图片、样式
 - components：存放公共样式、以及不常用组件
 - build：构建文件目录
 - node_modules：依赖文件
 - router：存放路由
 - view：存放所有视图页面

 ## 自定义组件使用 “vue-自定义名称”

 所有样式与 js 在 App.vue 中引入，个别除外，比如 mate 标签，CDN 链接

#### 团队开发每次修改在 Versions.md 中写入修改哪些地方？什么地方做了调整。 
采用日期版本叠加方式：从 V1.0.0.20170925 开始，最后一位为修改版本，修改一次调整一次;



