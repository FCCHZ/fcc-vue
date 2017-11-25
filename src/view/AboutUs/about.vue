<template>
  <div id="about">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="aboutList">
          <ul>
            <li class="aboutListImg"><img src="../../assets/logo-navbar.png" alt=""></li>
            <li class="aboutListTxt">关于我们</li>
            <li class="aboutListTxt"><router-link to="/about/contactUs">联系我们</router-link></li>
            <li class="aboutListTxt"><router-link to="/about/FAQ">常见问题</router-link></li>
            <li class="aboutListTxt">隐私策略</li>
            <li class="aboutListTxt">行为准则</li>
            <li class="aboutListTxt">学术诚信守则</li>
            <li class="aboutListTxt">服务条款</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="aboutRight">
        	<router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      msg: "这里是 关于我们 页面"
    }
  }
}

</script>
<style lang="scss" scoped>
#about {
  width: 1080px;
  margin: 70px auto 0;
}

.aboutList {
  padding: 15px;
  width: 300px;
  ul li {
    height: 40px;
    line-height: 40px;
  }
  .aboutListImg {
    height: 25px;
    width: 190px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .aboutListTxt {
    padding-left: 25px;
  }
}
.aboutRight {
	margin-top:50px;
}

</style>
