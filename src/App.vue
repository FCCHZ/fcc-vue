<template>
  <div id="app">
      <vue-header></vue-header>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from '@/components/header'
import FCCIcon from './assets/FCC-fontIcon/css/fccHangzhou.css'
export default {
  name: 'app',
  data() {
    return {
   
    }
  },
  methods:{

  },
  components:{
    "vue-header": Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
* {
  padding: 0;
  margin: 0;
}
</style>
