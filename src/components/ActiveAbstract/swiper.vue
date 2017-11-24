<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in activites.data" v-bind:key="item.id">
      <img v-bind:src="item.imgUrl" alt="" v-on:click="toActiveDetils(item.id)">
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>
 
<script>

export default {
  name: 'carrousel',
  props: {
    swiperOption: {
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
      type: Object,
      default: {}
    }
  },
  data() {
    return {
    }
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {

  },
  methods: {
    toActiveDetils(id) {
      this.$router.push({ name: "activedetils", params: { id } });
    }
  }
}
</script>
<style scoped>
/* .swiper{
		width: 10800px!important;
		height: 420px;
		position: absolute;
		color: red;
		overflow: hidden!important;
	} */
</style>
