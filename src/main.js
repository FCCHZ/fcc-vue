// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueEventCalendar from 'vue-event-calendar'
import 'view/Active/ActiveDetils/style.css'
Vue.use(vueEventCalendar, {locale: 'zh'})

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { 
    App
  }
})
