<template>
    <div  class="active-detils">
        <div class="item-horizontal">
          <div class="horizotal-img">
              <img v-bind:src="detils.imgUrl" alt="">
          </div>
          <div class="horizotal-dsc">
              <div class="horizotal-title">
                  <span class="title-span" v-html="detils.title"></span>
                  <span>
                      <i class="fcc-heart fcc-icon">{{ detils.love }}</i>
                      <i class="fcc-heart fcc-icon">{{ detils.person }}</i>
                  </span>
              </div>
              <div class="horizotal-date">
                  <span><i class="fcc-clock fcc-icon">{{ detils.date }}</i></span>
              </div>
              <div class="horizotal-location">
                  <span><i class="fcc-地址 fcc-icon" v-html="detils.location"></i></span>
              </div>
              <div class="horizotal-city">
                  <div class="h-fcc">
                      <img class="h-fcc-logo" v-bind:src="detils.fcclogoUrl" alt="">
                  </div>
                    <span class="h-fcccity-name" v-html="detils.location"></span>
              </div>
              <div class="enter">
                  <span>我要报名</span>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            detils: {}
        }
    },
    // computed: {
    //     initDetils() {
    //         console.log(this.$router.params.title)
    //         return this.detils = this.$router.params.title
    //     }
    // },
    created() {
        
    },
    mounted() {
        this._initData()
    },
    methods: {
        _initData() {
            // this.detils = this.$router.params
            // console.log(this.$router.params)
        }
    }
 }
</script>
<style lang="sass" scoped>
$height: 354px
$fcc-logo-height: 27px
$item-width: 255px
$horizotal-height: 243px
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