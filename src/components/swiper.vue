<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage:'url('+ str.url+')'}"></div>
		</div>
		<div class="swiper-paginaion swiper-pagination-white"></div>
	</div>
</template>
<script>
	import Swiper from 'swiper';
	export default {
		props: ['listImg'],
		mounted() {
			var swiper = new Swiper('.swiper-container',{
				paginaion: '.swiper-paginaion',
				paginaionClickable:true,
				loop:true,
				speed:600,
				autoplay: 4000,
				onTouchEnd: function(){
					swiper.startAutoplay()
				}
			})
		}
	}
</script>