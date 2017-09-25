<template>
  <div class="hello">
    <vue-header></vue-header>
    <div>{{msg}}</div>
  </div>
</template>

<script>
import header from './header.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

  },
  components:{
    "vue-header": header
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
