import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/routes'

Vue.use(VueRouter);
//1定义路由组建
   //  const home= {template:"<div>home</div>"}
  	// const News = {template:"<div>News</div>"}
//2 定义路由
  	// const routers = [{
  	// 	path:"/home",
  	// 	component: home
  	// },{ 
  	// 	path:"/News",
  	// 	component:News
  	// }]
//3创建router示例
const router = new VueRouter({
	routes
})

//创建和挂载根示例
new Vue({
  router,
  render: h => h(App)
  //el:'#app'
}).$mount('#app')
