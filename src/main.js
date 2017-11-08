// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
<<<<<<< HEAD
import store from './store'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)


=======
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'




Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
>>>>>>> 2061ff9eabe9d9ac8a4f83187a6618508a2b2a2f
import { swiper, swiperSlide } from 'vue-awesome-swiper'

/* eslint-disable no-new */
new Vue({
<<<<<<< HEAD
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
=======
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App,
        swiper,
        swiperSlide
    }
})
>>>>>>> 2061ff9eabe9d9ac8a4f83187a6618508a2b2a2f
