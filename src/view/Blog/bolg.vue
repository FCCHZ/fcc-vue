<template>
	<div>
		<div id="blog">
    <section class="search">
    	<el-input v-model="searchValue" @input='search' placeholder="请输入想要搜索的博客"></el-input>
      <!-- <input type="text" name='search' placeholder="请输入想要搜索的博客" @input='search' v-model='searchValue'> -->
      <i class="el-icon-search"></i>
    </section>
    <el-row :gutter="20" class="member_blog">
      <el-col :span="6" v-for="(item, i) in banners" :key="item.name">
        <div class="person" @click='goBlog(item.url)' :class="{mouse_move: i===index}" @mouseenter.prevent="toggleShade(i)" @mouseleave.prevent="toggleShade(-1)">
          <div class="grid_content_img">
            <img class="banner_image" :src="item.imgUrl">
          </div>
          <p class="grid_content_title">{{item.name}} 博客</p>
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
  <vue-Footer></vue-Footer>
	</div>
  
</template>
<script>
import fccFooter from '@/components/FCC_footer_one'
export default {
  name: 'blog',
  data() {
    return {
     
      searchValue: '',
      banners: [{
          name: '黄金良',
          imgUrl: require('../../assets/shmaur.jpg'),
          userImg: require('../../assets/blog_huangjinliang.jpg'),
          url: 'https://www.shmaur.com',
          skillList: [
            { name: 'UI设计',color:'ui' },
            { name: 'HTML',color:'html' },
            { name: 'Anuglar',color:'angular' }
          ]
        },
        {
          name: '尹一鸣',
         imgUrl: require('../../assets/yinyiming.jpg'),
          userImg: require('../../assets/blog_yinyiming.png'),

          url: 'https://yinyimingall.github.io/blog/',
          skillList: [
            { name: 'HTML',color:'html' },
            { name: 'JavaScript',color:'js' },
            { name: 'CSS',color:'css' }
          ]
        },
        {
          name: '钱凯行',
          imgUrl: require('../../assets/qiankaixing.jpg'),
          userImg: require('../../assets/blog_qiankaixing.jpg'),
          url: 'https://github.com/Zzhiren/zcpc ',
          skillList: [
            { name: 'HTML',color:'html' },
            { name: 'JavaScript',color:'js' },
            { name: 'CSS',color:'css' }
          ]

        },
        {
          name: '胡光楠',
          imgUrl: require('../../assets/huguangnan.jpg'),
          userImg: require('../../assets/blog_huguangnan.jpg'),
          url: 'https://github.com/blankul',
          skillList: [
            { name: 'HTMl',color:'html' },
            { name: 'JavaScript' ,color:'js'},
            { name: 'CSS',color:'css' },
            { name: 'Jquery',color:'jquery' },
            { name: 'Vue',color:'vue' }
          ]
        },
        {
          name: '杨扬',
          imgUrl: require('../../assets/blog_yangyang.jpg'),
          userImg: require('../../assets/blog_yangyang.jpg'),
          url: 'https://github.com/pecora9264',
          skillList: [
            { name: 'HTML',color:'html' },
            { name: 'JavaScript',color:'js' },
            { name: 'CSS',color:'css' },
            { name: 'Jquery',color:'jquery' }
          ]
        },
        {
          name: '郑斌',
          imgUrl: require('../../assets/blog_zhengbin.jpg'),
          userImg: require('../../assets/blog_zhengbin.jpg'),
          url: 'http://www.jianshu.com/u/7ee022573352',
          skillList: [
            { name: 'HTML',color:'html' },
            { name: 'JavaScript',color:'js' },
            { name: 'CSS',color:'css' },
            { name: 'Vue',color:'vue' }
          ]
        },
        {
          name: '李序锴',
          imgUrl: require('../../assets/blog_lixukai.jpg'),
          userImg: require('../../assets/blog_lixukai.jpg'),
          url: 'http://www.jianshu.com/u/7ee022573352',
          skillList: [
            { name: '后端',color:'js' },
            { name: '前端',color:'html' }
          ]
        }
      ],
      index: -1
    }
  },
  methods: {
    goBlog(url) {
      window.location.href = url
    },
    toggleShade(type) {
      this.index = type;
    },
    // search() {
    // 	this.banners = window.banners.filter((v, i) => {
    // 	 	return v.name.indexOf(this.searchValue) !== -1
    // 	})	
    // }
    search() {
      this.banners = window.banners.filter((v, i) => {
        /* 检索博主姓名 */
        let isName = v.name.indexOf(this.searchValue) !== -1
        /* 检索技能名称 */
        let skill = v.skillList.filter(v => {
          return v.name.indexOf(this.searchValue) !== -1
        })
        let isSkill = skill.length >= 1
        return isName || isSkill
      })
    }
  },

  components: {
    "vue-Footer": fccFooter
  },

  created() {
    window.banners = this.banners
  }
}

</script>
<style lang='scss' scoped>
#blog {
  $theme: #18A4CE;
  width: 1080px;
  margin: 0 auto;
  .search {
    margin: 20px auto;
    width: 460px;
    height: 50px;
    position: relative;
    i {
      position: absolute;
      top: 21%;
    right: 20px;
    }
    input {
      width: 420px;
      border: 1px solid #e1e1e1;
      height: 100%;
      text-indent: 20px;
      font-size: 14px;
    }
  }
  .member_blog {
    /*  width: 90%;
   margin: 20px auto; */
    .person {
      height: 356px;
      background: #FFF;
       border: 1px solid #EEE;
      transition: All 0.2s ease-in-out;
      -webkit-transition: All 0.2s ease-in-out;
      -moz-transition: All 0.2s ease-in-out;
      -o-transition: All 0.2s ease-in-out;
      &.mouse_move {
        box-shadow: 0px 3px 20px 5px #E6E6E6;
        transform: translate(0, -10px);
        -webkit-transform: translate(0, -10px);
        -moz-transform: translate(0, -10px);
        -o-transform: translate(0, -10px);
        -ms-transform: translate(0, -10px);
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
            &.ui {
              color: #00b38c;
            }
            &.html {
              color: #35CE23;
            }
            &.js {
              color: #F06A0B;
            }
            &.css {
              color: #17B7CF;
            }
            &.vue {
              color: #48A88A;
            }
            &.angular {
              color: #BC519B;
            }
            &.jquery {
              color: #3648f5;
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
      margin-top: 20px;
      .connect {

        border: 1px solid #eeeeee;
        h4 {
          padding: 20px 0 0 10px;
          text-align: left;
        }
        
        ul {
          display: flex;
          justify-content: center;
          li {
            margin: 10px 20px;
          }

          .avr {
            width: 30px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }
    }
  }
}
.el-input.is-active .el-input__inner, 
.el-input__inner:focus{
	border-color: #FF9900 ;
}
</style>
