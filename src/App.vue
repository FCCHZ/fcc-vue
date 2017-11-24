<template>
  <div id="app">
      <vue-header></vue-header>
      <transition name="fade">
        <router-view class="content"></router-view>
      </transition>
  </div>
</template>

<script>
import Header from '@/components/header'
import FCCIcon from './assets/FCC-fontIcon/css/fccHangzhou.css'
import header from "@/components/header"

export default {
  
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    "vue-header": header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
* {
  padding: 0;
  margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.content {
  margin-top: 50px;
}
ul,li {
  list-style-type: none;
}
a{text-decoration:none}
</style>
