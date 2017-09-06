<template>
<div id="wrapper">
   <div class="header">
   <span class="FccLogo"></span>
 <!--  <img :src="logo" alt="">  -->
  <div class="header-menu">
    <a href="javascript:;">{{Home}}</a>
    <a href="javascript:;">{{tool}}</a>
    <a href="javascript:;">{{activity}}</a>
    <a href="javascript:;">{{works}}</a>
    <a href="javascript:;">{{blogs}}</a>
  </div>
</div>
<router-view ></router-view>
</div>
    
  
</template>
<script>
import Activity from "./activity.vue"

  export default {
    data () {
    return {
    	Home: '首页',
      tool: '工具',
      activity: '活动',
      works: '作品',
      blogs: '博客'
    }
  }
}

</script>
<style>

</style>