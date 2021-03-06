import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/view/Home/Hello'
import Active from '@/view/Active/active'
import Tool from '@/view/Tool/tool'
import Blog from '@/view/Blog/bolg'
import About from '@/view/AboutUs/about'
import FAQ from '@/view/AboutUs/FAQ'
import AboutUss from '@/view/AboutUs/AboutUs'
import contactUs from '@/view/AboutUs/contactUs'
import privacyPolicy from '@/view/AboutUs/privacyPolicy'
import CodeOfConduct from '@/view/AboutUs/CodeOfConduct'
import TermsOfService from '@/view/AboutUs/TermsOfService'
import AcademicHonestyPolicy from '@/view/AboutUs/AcademicHonestyPolicy'
import ActiveCenter from '@/view/Active/ActiveCenter/ActiveCenter'
import ActiveDetils from '@/view/Active/ActiveDetils/ActiveDetils'

Vue.use(Router)

export default new Router({
    mode:'hash',
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/activecenter',
      name: 'activecenter',
      component: ActiveCenter
    },
    {
    	path: '/activedetils/:id', 
    	name: 'activedetils',
    	component: ActiveDetils
    },
    {
      path: '/tool',
      name: 'Tool',
      component: Tool
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/about',
      component: About,
      children: [
        { 
            path: '/about/FAQ', 
            component: FAQ 
        },
        { 
            path: '/about/AboutUs', 
            component: AboutUss 
        },
        { 
            path: '/about/contactUs', 
            component: contactUs 
        },{ 
            path: '/about/privacyPolicy', 
            component: privacyPolicy 
        },{
            path:'/about/CodeOfConduct',
            component: CodeOfConduct
        },{
            path:'/about/AcademicHonestyPolicy',
            component:AcademicHonestyPolicy
        },{
            path:'/about/TermsOfService',
            component:TermsOfService
        }
        
      ]
    }
  ]
})
