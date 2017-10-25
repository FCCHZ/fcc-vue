<template>
	<div id="active">
		<!-- 历史活动 -->
		<activites-swiper-template :swiperOption="normalSwiper" :activites="activites.recentActivites">
		</activites-swiper-template>
		<!-- 历史活动 -->
		<activites-swiper-template :swiperOption="normalSwiper" :activites="activites.historyActivites">
		</activites-swiper-template>
		<!-- 活动现场 -->
		<div class="active-site">
			<div class="header">
				<span class="title">活动现场</span>
				<router-link to="/activecenter" tag="span" class="more">更多>></router-link>
			</div>
			<div class="content">
				<swiper :options="activitSiteSwiper" ref="mySwiper">
					<swiper-slide class="swiper-img" v-for="(item, index) in activites.activitSite.data" v-bind:key="item.id">
						<img v-bind:src="item.imgUrl" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
					<!-- <div class="swiper-button-next" slot="button-next"></div> -->
					<!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
				</swiper>
			</div>
		</div>
		<!-- FCC -->
		<div class="active-site">
			<div class="header">
				<span class="title">FCC城市社区活动</span>
				<router-link to="/ActiveCenter" tag="span" class="more">更多>></router-link>
			</div>
			<activites-list-template :activites="activites.fccCityActivites.data.slice(0, 4)"></activites-list-template>
		</div>
	</div>
</template>
<script>
import ActivitesSwiperTemplate from 'view/Active/ActiveAbstract/ActivitesSwiperTemplate'
import ActivitesListTemplate from 'view/Active/ActiveAbstract/ActivitesListTemplate'
import ActivitySiteSwiper from 'view/Active/ActiveAbstract/swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'active',
	data() {
		return {
			msg: "这里是 活动中心 页面",
			recentActivit: '近期活动',
			historyActivit: '历史活动',
			activitySite: '活动现场',
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
			activitSiteSwiper: {
				notNextTick: true,
				autoplay: false,
				grabCursor: true,
				setWrapperSize: true,
				pagination: '',
				paginationClickable: true,
				prevButton: '.swiper-button-prev',
				nextButton: '.swiper-button-next',
				mousewheelControl: false,
				observeParents: true,
				autoplayDisableOnInteraction: true,
				// loop: true,
				slidesPerView : 'auto',
				spaceBetween : 16,
				freeMode : true
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
				historyActivites: {
					title: '历史活动',
					data: [
						{ 'id': 1, imgUrl: require('../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 2, imgUrl: require('../../assets/active05_06.jpg'), "linkUrl": '' },
						{ 'id': 3, imgUrl: require('../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 4, imgUrl: require('../../assets/active05_06.jpg'), "linkUrl": '' }
					],
				},
				activitSite: {
					title: '活动现场',
					data: [
						{ 'id': 1, imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '' },
						{ 'id': 2, imgUrl: require('../../assets/activity_img02.jpg'), "linkUrl": '' },
						{ 'id': 3, imgUrl: require('../../assets/activity_img03.jpg'), "linkUrl": '' },
						{ 'id': 4, imgUrl: require('../../assets/activity_img04.jpg'), "linkUrl": '' },
						{ 'id': 5, imgUrl: require('../../assets/activity_img05.jpg'), "linkUrl": '' },
						{ 'id': 6, imgUrl: require('../../assets/activity_img06.jpg'), "linkUrl": '' }
					],
				},
				fccCityActivites: {
					title: 'FCC城市社区活动',
					data: [
						{ 'id': 1, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 2, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 3, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 4, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 5, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 6, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 7, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 8, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 9, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
						{ 'id': 10, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../assets/android-chrome-192x192.png') },
					],
				}
			},
		}
	},
	components: {
		ActivitesSwiperTemplate,
		swiper,
		swiperSlide,
		ActivitySiteSwiper,
		ActivitesListTemplate
	},
	mounted() {

	},
	methods: {

	}
}
</script>
<style lang="sass" scoped>
$width: 1080px
$height: 255px
$margin-auto: 0 auto
$title-font-size: 24px
$title-font-color: #FF9900
$title-font-family: PingFangSC-Medium
$title-margin-right: 32px
$more-font-size: 18px
$more-font-color: #A3A3A3
$more-font-family: PingFangSC-Light
.active-site
	width: $width
	margin: $margin-auto
	.header
		margin-top: 32px
		margin-bottom: 24px
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
		height: $height
		margin-top: 24px
		.swiper-img
			width: 383.7px
		img
			width: 383.7px
</style>