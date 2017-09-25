import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../view/Home/Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
