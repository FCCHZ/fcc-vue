<template>
  <div>
    <div id="about">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="aboutList">
            <ul>
              <li class="aboutListImg"><img src="../../assets/logo-navbar.png" alt=""></li>
              <li class="aboutListTxt">
                <router-link to="/about/aboutUs">关于我们</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/contactUs">联系我们</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/FAQ">常见问题</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/privacyPolicy">隐私策略</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/CodeOfConduct">行为准则</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/AcademicHonestyPolicy">学术诚信守则</router-link>
              </li>
              <li class="aboutListTxt">
                <router-link to="/about/TermsOfService">服务条款</router-link>
              </li>
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
    <vue-Footer></vue-Footer>
  </div>
</template>
<script>
import fccFooter from '@/components/FCC_footer_two'
export default {
  name: 'about',
  data() {
    return {
      msg: "这里是 关于我们 页面"
    }
  },
  components: {
    "vue-Footer": fccFooter,
  }
}

</script>
<style lang="scss" scoped>
#about {
  width: 1080px;
  margin: 30px auto 0;
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

    a {
      color: #00b800;
      width:100%;
      display:block;
      text-decoration: none;
      &:hover {
        color: #FF9900;
      }
    }
  }
}

.aboutRight {
  margin-top: 50px;
}

.router-link-exact-active {
  color: #FF9900 !important;
}

</style>
