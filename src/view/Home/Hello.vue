<template>
  <div class="hello">
    <vue-header></vue-header>
    <vue-banner></vue-banner>
    <div>{{msg}}</div>
    <!-- <div class="imgg" v-for="str in listImg" :style="{ backgroundImage:'url('+ str.url+')'}"></div> -->
  </div>
</template>

<script>
import header from '../../components/header'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner from '../../components/swiper'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      listImg:[{
        url: banner1
      },{
        url: banner2
      }]
    }
  },
  methods:{

  },
  components:{
    "vue-header": header,
    "vue-banner": banner
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgg {
  width: 100%;
  height: 200px;
}
</style>
