# FCC社区Vue官网
> 版本号V1.0

## 构建步骤
``` bash
# 安装依赖(建议先安装cnpm，国内镜像下载会快一点)
npm install/cnpm install

# 构建开发环境(具有热加载功能) localhost:8080
npm run dev

# 构建生产环境
npm run build
```

## 开发规范

### 文档结构
- api 定义借口
- assets 静态资源
- components 公用组件
- config 配置文件
- router 路由配置
- service 公众函数库，常量
- views 组件视图
- app.vue 入口

### 操作反馈
- 列表加载动画
- 提交按钮加载动画
- 消息提示，提示消息显示在页面中间

### 样式
- 独有样式放在独立的组件中
- 公共的样式形成组件化与视图统一文件模块化书写 