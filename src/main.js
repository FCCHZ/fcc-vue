// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)


import { swiper, swiperSlide } from 'vue-awesome-swiper'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
    App,
    swiper,
    swiperSlide 
  }
})
