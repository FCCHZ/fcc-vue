<template>
    <div class="active-template">
        <div class="header">
            <span class="title" v-html="activites.title"></span>
            <router-link to="/activecenter" tag="span" class="more">更多>></router-link>
        </div>
        <div class="content">
            <swiper :swiperOption="swiperOption" :activites="activites">
            </swiper>
        </div>
    </div>
</template>
<script>
import Swiper from 'view/Active/ActiveAbstract/swiper'

export default {
    props: {
        activites: {
            type: Object,
            default: {}
        },
        swiperOption: {
            type: Object,
            default: {}
        }
    },
    components: {
        Swiper
    }
}
</script>
<style lang="sass" scoped>
$width: 1080px
$height: 420px
$margin-auto: 0 auto
$title-font-size: 24px
$title-font-color: #FF9900
$title-font-family: PingFangSC-Medium
$title-margin-right: 32px
$more-font-size: 18px
$more-font-color: #A3A3A3
$more-font-family: PingFangSC-Light

.active-template 
      width: $width
      margin: $margin-auto
      position: relative
      margin-bottom: 24px
      .header
        margin-top: 36px
        position: relative
        .title
            font-size: $title-font-size
            color: $title-font-color
            font-family: $title-font-family
            margin-right: $title-margin-right
        .more
            font-size: $more-font-size
            color: $more-font-color
            font-family: $more-font-family
            &:hover
                cursor: pointer
      .content
        margin-top: 24px
        height: $height
        

  
</style>
