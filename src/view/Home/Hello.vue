<template>
  <div class="hello">
    <div class="topSwiper">
      <div class="topSwiperCentent">
        <vue-bannerSwiper :activites="activites.recentHome"></vue-bannerSwiper>
      </div>
    </div>
    <vue-swiper :swiperOption="normalSwiper" :activites="activites.recentActivites"></vue-swiper>
    <div class="active-site">
      <div class="header">
        <span class="title">成员博客</span>
        <router-link to="/blog" tag="span" class="more">更多>></router-link>
      </div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, i) in banners" >
            <div class="grid_content" @click='goBlog(item.url)' :class="{mouse_move: i===index}" @mouseenter.prevent="toggleShade(i)" 
        @mouseleave.prevent="toggleShade(-1)">
                 <div class="grid_content_img">
                <img class="banner_image" :src="item.imgUrl">
              </div>
              <p class="grid_content_title">{{item.name}}</p>
              <el-row justify="space-around" class="skill">
                <el-col v-for='v in item.skillList' :key='v.name' :span="8">
                  <div class='skill_name' :class="v.color">{{ v.name }}</div>
                </el-col>
              </el-row>
              <div class="grid_content_user">
                <ul>
                  <li><img :src="item.userImg" class="avr"></li>
                  <li>{{item.name}}</li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <vue-Footer></vue-Footer>
  </div>
</template>
<script>
import banner from '../../components/swiper'
import fccFooter from '@/components/FCC_footer_one'
import HomeSwiperTemplate from '../Active/ActiveAbstract/ActivitesSwiperTemplate'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Swiper from 'view/Active/ActiveAbstract/swiper'


export default {
  name: 'hello',
  data() {
    return {
      index: -1,
      normalSwiper: {
        notNextTick: true,
        autoplay: 3000,
        grabCursor: true,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: false,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      activites: {
        recentActivites: {
          title: '近期活动',
          data: [
            { 'id': 1, imgUrl: require('../../assets/active04_16.jpg'), "linkUrl": '' },
            { 'id': 2, imgUrl: require('../../assets/active05_06.jpg'), "linkUrl": '' },
            { 'id': 3, imgUrl: require('../../assets/active04_16.jpg'), "linkUrl": '' },
            { 'id': 4, imgUrl: require('../../assets/active05_06.jpg'), "linkUrl": '' }
          ],
        },
        recentHome: {
          data: [
            { 'id': 1, imgUrl: require('../../assets/banner1.jpg'), "linkUrl": '' }
          ],
        }
      },
      banners: [{
          name: '黄金良',
          imgUrl: require('../../assets/shmaur.jpg'),
          userImg: require('../../assets/blog_huangjinliang.jpg'),
          url: 'https://www.shmaur.com',
          skillList: [
            { name: 'UI设计',color:'ui' },
            { name: 'HTML' ,color:'html'},
            { name: 'anuglar',color:'anuglar' }
          ]
        },
        {
          name: '尹一鸣',
          imgUrl: require('../../assets/yinyiming.jpg'),
          userImg: require('../../assets/blog_yinyiming.png'),
          url: 'https://yinyimingall.github.io/blog/',
          skillList: [
            { name: 'html' ,color:'html'},
            { name: 'js' ,color:'js'},
            { name: 'css' ,color:'css'},
            { name: 'angular' ,color:'angular'}
          ]
        },
        {
          name: '钱凯行',
          imgUrl: require('../../assets/qiankaixing.jpg'),
          userImg: require('../../assets/blog_qiankaixing.jpg'),
          url: 'https://github.com/Zzhiren/zcpc ',
          skillList: [
            { name: 'html' ,color:'html'},
            { name: 'js' ,color:'js'},
            { name: 'css' ,color:'css'}
          ]

        },
        {
          name: '胡光楠',
          imgUrl: require('../../assets/huguangnan.jpg'),
          userImg: require('../../assets/blog_huguangnan.jpg'),
          url: 'https://github.com/blankul',
          skillList: [
            { name: 'html' ,color:'html'},
            { name: 'js' ,color:'js'},
            { name: 'css' ,color:'css'},
            { name: 'jquery' ,color:'jquery'},
            { name: 'vue' ,color:'vue'}
          ]
        }
      ]
    }
  },
  methods: {
    goBlog(url) {
      window.location.href = url
    },
    toggleShade (type) {
        this.index = type;
        },
  },
  components: {
    "vue-banner": banner,
    "vue-Footer": fccFooter,
    "vue-swiper": HomeSwiperTemplate,
    "vue-bannerSwiper": Swiper
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.active-site {
  width: 1080px;
  margin: 0 auto;
  .header {
    margin-top: 32px;
    margin-bottom: 24px;
    .title {
      font-size: 24px;
      color: #FF9900;
      font-family: PingFangSC-Medium;
      margin-right: 32px;
    }
    .more {
      font-size: 18px;
      color: #A3A3A3;
      font-family: PingFangSC-Light;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .content {
    width: 1080px;
    height: 100%;
  }
}

.topSwiper {
  width: 100%;
  background: #272727;
  .topSwiperCentent {
    width: 1080px;
    height: 420px;
    margin: 0 auto;
  }
}
.content{
margin-bottom:50px;
}
.grid_content {
  height: 356px;
  background: #FFF;
  border: 1px solid #EEE;
  transition:All 0.2s ease-in-out;
      -webkit-transition:All 0.2s ease-in-out;
      -moz-transition:All 0.2s ease-in-out;
      -o-transition:All 0.2s ease-in-out;
      cursor:pointer;
       &.mouse_move{
        box-shadow:0px 3px 20px 5px #E6E6E6;
        transform:translate(0,-10px);
        -webkit-transform:translate(0,-10px);
        -moz-transform:translate(0,-10px);
        -o-transform:translate(0,-10px);
        -ms-transform:translate(0,-10px);
      }
  .grid_content_img {
    width: 100%;
    height: 166px;
    .banner_image {
      width: 100%;
      height: 100%;
    }
  }
  .grid_content_title {
    font-size: 18px;
    color: #666;
    font-weight: 600;
    padding: 18px 15px;
  }
  .skill {
    text-align: center;
    height: 80px;
    color: #6e6e6e;
    .skill_name {
      padding-bottom: 10px;
      &.ui{
        color:#00b38c;
      }
      &.html{
        color:#00b0f0;
      }
      &.js {
        color:#ffb86c;
      }
    }
  }
  .grid_content_user {
    ul {
      display: flex;
      justify-content: center;
      li {
        margin: 5px 5px;
        line-height: 30px;
      }

      .avr {
        width: 30px;
        height: 30px;
        border-radius: 15px;
      }
    }
  }
}

</style>
