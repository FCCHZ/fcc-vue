<template>
<div>
    <div class="activites-list" v-if="listType == 0" >
  <!--卡片样式-->
        <div v-on:click="toActiveDetils(item)" class="item" v-for="(item, index) in activites" v-bind:key="item.index">
            <div class="img">
                <img v-bind:src="item.imgUrl" alt="">
                <div v-if="item.enterState === '0'" class="enter">
                        报名中
                </div>
                <div v-if="item.enterState === '1'" class="noenter">
                        已过期
                </div>
            </div>
            <div class="title">
                <span v-html="item.title"></span>
            </div>
            <div class="tag">
                <span clas="date">{{ item.date }}</span>
                <div>
                    <span class="love">喜欢{{ item.love }}</span>
                    <span class="person">人数{{ item.person }}</span>
                </div>
            </div>
            <div class="location">
                <div class="logo">
                    <img class="fcc-logo" v-bind:src="item.fcclogoUrl" alt="">
                </div>
                <span v-html="item.location"></span>
            </div>
        </div>
    </div>
    <div class="activites-list"  v-if="listType === 1">
        <!--列表样式-->
        <div class="item-horizontal" v-for="(item, index) in activites" v-bind:key="item.index">
          <div class="horizotal-img">
              <img v-bind:src="item.imgUrl" alt="">
          </div>
          <div class="horizotal-dsc">
              <div class="horizotal-title">
                  <span class="title-span" v-html="item.title"></span>
                  <span>
                      <i class="fcc-heart fcc-icon">{{ item.love }}</i>
                      <i class="fcc-heart fcc-icon">{{ item.person }}</i>
                  </span>
              </div>
              <div class="horizotal-date">
                  <span><i class="fcc-clock fcc-icon">{{ item.date }}</i></span>
              </div>
              <div class="horizotal-location">
                  <span><i class="fcc-地址 fcc-icon" v-html="item.location"></i></span>
              </div>
              <div class="horizotal-city">
                  <div class="h-fcc">
                      <img class="h-fcc-logo" v-bind:src="item.fcclogoUrl" alt="">
                  </div>
                    <span class="h-fcccity-name" v-html="item.location"></span>
              </div>
              <div class="enter">
                  <span>我要报名</span>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  props: {
    activites: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      listType: 0
    };
  },
  methods: {
    changeListType(state) {
      this.listType = state;
      console.log(state);
    },
    toActiveDetils(data) {
      this.$router.push({ name: "activedetils", params: { data: data } });
    }
  }
};
</script>
<style lang="sass" scoped>
$height: 354px
$fcc-logo-height: 27px
$item-width: 255px
$horizotal-height: 243px

.fade-enter-active,.fade-leave-active
  transition: opacity 0.5s;

.fade-enter,.fade-leave-to
  opacity: 0


.fcc-icon
    color: #A3A3A3
    font-style: normal
.activites-list
    width: 1080px
    height: $height
    display: flex
    flex-wrap: wrap

    .item
        width: $item-width
        height: $height
        border: 1px solid #EEEEEE
        margin-right: 17px
        margin-bottom: 30px
        &:hover
            cursor: pointer
        &:nth-child(4n)
            margin-right: 0
        .img
            width: $item-width
            height: 152px
            margin-bottom: 12px
            position: relative
            img
                width: $item-width
                height: 152px
        .enter
            background: #4CAF50;
            position: absolute
            bottom: 0
            right: 0
            width: 76px
            height: 27px
            line-height: 27px
            text-align: center
            font-family: PingFangSC-Medium
            font-size: 14px
            color: #FFFFFF
            z-index: 999
        .noenter
            background: #B6B6B6;
            position: absolute
            bottom: 0
            right: 0
            width: 76px
            height: 27px
            line-height: 27px
            text-align: center
            font-family: PingFangSC-Medium
            font-size: 14px
            color: #FFFFFF
            z-index: 999
        .title
            width: 214px
            height: 44px
            margin: 0 auto
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #555555;
        .tag
            height: 22px
            width: 224px
            margin: 12px auto
            font-family: PingFangSC-Light;
            font-size: 16px;
            color: #A3A3A3;
            border-bottom: 1px solid #EEEEEE
            display: flex
            padding-bottom: 2px
            div
                display: inline-block
                text-align: right
                flex: 1
                .love
                    margin-right: 10px
        .location
            height: $fcc-logo-height
            width: 224px
            margin: 12px auto
            display: flex
            .logo
                width: $fcc-logo-height
                img
                    width: $fcc-logo-height
                    height: $fcc-logo-height
            span
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #555555;
                line-height: $fcc-logo-height
                margin-left: 12px 
.item-horizontal
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    width: 1080px
    height: $horizotal-height
    display: flex
    position: relative
    margin-bottom: 33px
    .horizotal-img
        width: 365px
        height: $horizotal-height
        img
            width: 365px
            height: $horizotal-height
    .horizotal-dsc
        margin-left: 36px
        flex: 1
        height: $horizotal-height
        .horizotal-title
            height: 22px
            margin-top: 24px
            margin-bottom: 15px
            .title-span
                margin-right: 24px
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #555555;
        .horizotal-date
            margin-bottom: 11px
        .horizotal-city
            height: $fcc-logo-height
            margin-top: 20px
            font-family: PingFangSC-Light;
            font-size: 14px;
            color: #555555;
            display: flex
            .h-fcc
                width: $fcc-logo-height
                .h-fcc-logo
                    width: $fcc-logo-height
                    img
                        width: $fcc-logo-height
                        height: $fcc-logo-height
            span
                line-height: $fcc-logo-height
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #555555;
                margin-left: 12px
        
        .enter
            position: absolute
            border: 1px solid #4CAF50
            border-radius: 8px
            width: 116px
            height: 39px
            right: 30px
            bottom: 20px
            text-align: center
            span
                line-height: 39px
                color: #4CAF50


</style>

