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
						<img v-bind:src="item.imgUrl" alt="" v-on:click="toActiveDetils(item.id)">
					</swiper-slide>
					<!-- <div class="swiper-pagination" slot="pagination"></div> -->
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
import ActivitesSwiperTemplate from 'components/ActiveAbstract/ActivitesSwiperTemplate'
import ActivitesListTemplate from 'components/ActiveAbstract/ActivitesListTemplate'
import ActivitySiteSwiper from 'components/ActiveAbstract/swiper'
import 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import fcclogo from "assets/android-chrome-192x192.png"
import active04_16 from "assets/active04_16.jpg"
import active05_06 from "assets/active05_06.jpg"
import activity_img01 from "assets/activity_img01.jpg"
import activity_img02 from "assets/activity_img02.jpg"
import activity_img03 from "assets/activity_img03.jpg"
import activity_img04 from "assets/activity_img04.jpg"
import activity_img05 from "assets/activity_img05.jpg"
import activity_img06 from "assets/activity_img06.jpg"

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
						{"id": 0, "fcclogoUrl": fcclogo, "imgUrl": active04_16, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 1, "fcclogoUrl": fcclogo, "imgUrl": active05_06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 2, "fcclogoUrl": fcclogo, "imgUrl": activity_img01, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 3, "fcclogoUrl": fcclogo, "imgUrl": activity_img02, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 4, "fcclogoUrl": fcclogo, "imgUrl": activity_img03, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 5, "fcclogoUrl": fcclogo, "imgUrl": activity_img04, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 6, "fcclogoUrl": fcclogo, "imgUrl": activity_img05, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 7, "fcclogoUrl": fcclogo, "imgUrl": activity_img06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "data": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1}
					],
				},
				historyActivites: {
					title: '历史活动',
					data: [
						{"id": 0, "fcclogoUrl": fcclogo, "imgUrl": active04_16, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 1, "fcclogoUrl": fcclogo, "imgUrl": active05_06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 2, "fcclogoUrl": fcclogo, "imgUrl": activity_img01, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 3, "fcclogoUrl": fcclogo, "imgUrl": activity_img02, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 4, "fcclogoUrl": fcclogo, "imgUrl": activity_img03, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 5, "fcclogoUrl": fcclogo, "imgUrl": activity_img04, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 6, "fcclogoUrl": fcclogo, "imgUrl": activity_img05, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 7, "fcclogoUrl": fcclogo, "imgUrl": activity_img06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1}
					],
				},
				activitSite: {
					title: '活动现场',
					data: [
						{"id": 0, "fcclogoUrl": fcclogo, "imgUrl": active04_16, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 1, "fcclogoUrl": fcclogo, "imgUrl": active05_06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 2, "fcclogoUrl": fcclogo, "imgUrl": activity_img01, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 3, "fcclogoUrl": fcclogo, "imgUrl": activity_img02, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 4, "fcclogoUrl": fcclogo, "imgUrl": activity_img03, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 5, "fcclogoUrl": fcclogo, "imgUrl": activity_img04, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 6, "fcclogoUrl": fcclogo, "imgUrl": activity_img05, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 7, "fcclogoUrl": fcclogo, "imgUrl": activity_img06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1}
					],
				},
				fccCityActivites: {
					title: 'FCC城市社区活动',
					data: [
						{"id": 0, "fcclogoUrl": fcclogo, "imgUrl": active04_16, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 1, "fcclogoUrl": fcclogo, "imgUrl": active05_06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 0},
						{"id": 2, "fcclogoUrl": fcclogo, "imgUrl": activity_img01, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 3, "fcclogoUrl": fcclogo, "imgUrl": activity_img02, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 4, "fcclogoUrl": fcclogo, "imgUrl": activity_img03, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 5, "fcclogoUrl": fcclogo, "imgUrl": activity_img04, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 6, "fcclogoUrl": fcclogo, "imgUrl": activity_img05, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1},
						{"id": 7, "fcclogoUrl": fcclogo, "imgUrl": activity_img06, "title": "麦尖天台open mic音乐会——你可以成为歌手","city": "杭州", "location": "杭州知味书屋", "date": "9-12", "startTime": "2017年10月7日 19:30", "endTime": "2017年10月7日 19:30", "auota": "200", "content": "", "love": 666, "person": 666, "enterState": 1}
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
        toActiveDetils(id) {
            this.$router.push({ name: "activedetils", params: { id } });
        }
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