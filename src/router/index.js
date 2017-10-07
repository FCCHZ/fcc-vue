import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/view/Home/Hello'
import Active from '@/view/Active/active'
import Tool from '@/view/Tool/tool'
import Blog from '@/view/Blog/bolg'
import About from '@/view/AboutUs/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/Active',
    	name: 'Active',
    	component: Active
    },{
    	path: '/tool',
    	name: 'Tool',
    	component: Tool
    },{
    	path: '/blog',
    	name: 'Blog',
    	component: Blog
    },{
    	path: '/about',
    	name: 'About',
    	component: About
    }
  ]
})
