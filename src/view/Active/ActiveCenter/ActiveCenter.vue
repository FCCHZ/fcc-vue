<template>
    <div class="active-center">
        <div class="label">
            <div class="type">
                <ul class="items">
                    <li class="item-type">时间:</li>
                    <li class="item" v-on:click="changeItemState('timeState', item)" v-bind:class="{ itemactive: timeState === item }" v-for="(item, index) in time" v-bind:key="item.index">{{ item }}</li>
                </ul>
            </div>
            <div class="type">
                <ul class="items">
                    <li class="item-type">城市:</li>
                    <li class="item" v-on:click="changeItemState('cityState', item)" v-bind:class="{ itemactive: cityState === item }" v-for="(item, index) in cities" v-bind:key="item.index">{{ item }}</li>
                </ul>
            </div>
        </div>
        <div class="sort">
            <div class="sort-item">
                <ul class="sort-ul">
                    <li class="common comprehensive"  v-bind:class="{ sortactive: sortState === '综合排序' }" v-on:click="changeItemState('综合排序', '综合排序')">综合排序</li>
                    <li class="common newest"  v-bind:class="{ sortactive: sortState === '最新发布' }" v-on:click="changeItemState('最新发布', '最新发布')">最新发布</li>
                </ul>
            </div>
            <div class="sort-item">
                <ul class="sort-type">
                    <li class="sort-type-li" v-on:click="changeSortTypeState(0)" v-bind:class="{active: sortTypeState === 0}"><i class="fcc-carnav"></i></li>
                    <li class="sort-type-li" v-on:click="changeSortTypeState(1)" v-bind:class="{active: sortTypeState === 1}"><i class="fcc-listnav"></i></li>
                </ul>
            </div>
        </div>
        <div class="content">
            <activites-list-template :activites="listData" ref="activitesList"></activites-list-template>
        </div>
        <fcc-footer-two></fcc-footer-two>
    </div>
</template>
<script>
import ActivitesListTemplate from 'components/ActiveAbstract/ActivitesListTemplate'
import FccFooterTwo from 'components/FCC_footer_two'

export default {
    data() {
        return {
            timeState: '全部',
            cityState: '全部',
            sortState: '综合排序',
            sortTypeState: 0,
            time:['全部', '今天', '明天', '本周', '本月'],
            // time:['全部', '今天', '明天', '本周', '本月', '指定日期'],
            cities: ['全部', '北京', '上海', '广州', '深圳', '杭州', '成都', '西安', '郑州'],
            listData:[],
            activites: {
				recentActivites: {
					title: '近期活动',
					data: [
						{ 'id': 1, imgUrl: require('../../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 2, imgUrl: require('../../../assets/active05_06.jpg'), "linkUrl": '' },
						{ 'id': 3, imgUrl: require('../../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 4, imgUrl: require('../../../assets/active05_06.jpg'), "linkUrl": '' }
					],
				},
				historyActivites: {
					title: '历史活动',
					data: [
						{ 'id': 1, imgUrl: require('../../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 2, imgUrl: require('../../../assets/active05_06.jpg'), "linkUrl": '' },
						{ 'id': 3, imgUrl: require('../../../assets/active04_16.jpg'), "linkUrl": '' },
						{ 'id': 4, imgUrl: require('../../../assets/active05_06.jpg'), "linkUrl": '' }
					],
				},
				activitSite: {
					title: '活动现场',
					data: [
						{ 'id': 1, imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '' },
						{ 'id': 2, imgUrl: require('../../../assets/activity_img02.jpg'), "linkUrl": '' },
						{ 'id': 3, imgUrl: require('../../../assets/activity_img03.jpg'), "linkUrl": '' },
						{ 'id': 4, imgUrl: require('../../../assets/activity_img04.jpg'), "linkUrl": '' },
						{ 'id': 5, imgUrl: require('../../../assets/activity_img05.jpg'), "linkUrl": '' },
						{ 'id': 6, imgUrl: require('../../../assets/activity_img06.jpg'), "linkUrl": '' }
					],
				},
				fccCityActivites: {
					title: 'FCC城市社区活动',
					data: [
						{ 'id': 1, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 2, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 3, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 4, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 5, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 6, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 7, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '1', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 8, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '1', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 9, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '1', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
						{ 'id': 10, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '1', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
					],
				}
			},
            beijing:[
                { 'id': 1, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
				{ 'id': 2, title:'麦尖天台open mic音乐会——你可以成为歌手', location: "FCC杭州社区", love: 666, person: 666, enterState: '0', date: '9-12', imgUrl: require('../../../assets/activity_img01.jpg'), "linkUrl": '', fcclogoUrl: require('../../../assets/android-chrome-192x192.png') },
            ],
            shanghai:[],
            guangzhou:[],
            shenzheng:[],
            hangzhou:[],
            chengdu:[],
            xian:[],
            zhengzhou:[],
            newest:[]
        }
    },
    components: {
        ActivitesListTemplate,
        FccFooterTwo
    },
    mounted() {
        this.init()
    },
    methods: {
        init(){
            this.listData = this.activites.fccCityActivites.data
        },
        changeItemState(state, item) {
            if(state == 'timeState') {
                this.timeState = item
                switch (item) {
                    case '今天':
                        this.listData = this.tody
                        break;
                    case '明天':
                        this.listData = this.tomorrow
                        break;
                    case '本周':
                        this.listData = this.week
                        break;
                    case '本月':
                        this.listData = this.month
                        break;
                    default:
                        this.listData = this.activites.fccCityActivites.data
                        break;
                }
            }else if (state == 'cityState') {
                this.cityState = item
                switch (item) {
                    case '北京':
                        this.listData = this.beijing
                        break;
                    case '上海':
                        this.listData = this.shanghai
                        break;
                    case '广州':
                        this.listData = this.guangzhou
                        break;
                    case '深圳':
                        this.listData = this.shenzheng
                        break;
                    case '杭州':
                        this.listData = this.hangzhou
                        break;
                    case '成都':
                        this.listData = this.chendu
                        break;
                    case '西安':
                        this.listData = this.xian
                        break;
                    case '郑州':
                        this.listData = this.zhengzhou
                        break;
                    default:
                        this.listData = this.activites.fccCityActivites.data
                        break;
                }
            }else if (state == '综合排序') {
                this.sortState = item
                this.listData = this.activites.fccCityActivites.data
            }else if (state == '最新发布') {
                this.sortState = item
                this.listData = this.newest
            }
        },
        changeSortTypeState(state) {
            this.sortTypeState = state
            this.$refs.activitesList.changeListType(state)
        }
    }
}

</script>
<style lang="sass" scoped>
$width: 1080px
$margin-auto: 0 auto
.label
    width: $width
    height: 132px
    margin: $margin-auto
    display: flex
    flex-direction: column
    border: 1px solid #EEEEEE;
    .type
        width: $width
        flex: 1
        .items
            display: flex
            margin-left: 26px
            .item-type
                margin-right: 30px
                margin-top: 16px
                line-height: 30px
                font-family: PingFangSC-Light;
                font-size: 14px;
                color: #A3A3A3;
            .item
                margin-right: 30px
                margin-top: 16px
                line-height: 30px
                ont-family: PingFangSC-Light
                font-size: 14px
                color: #555555
                &:hover
                    cursor: pointer
                    border-bottom: 1px solid #FF9900
                    color: #FF9900
            .itemactive
                border-bottom: 1px solid #FF9900
                color: #FF9900
.sort
    width: $width
    height: 66px
    border: 1px solid #EEEEEE
    margin: $margin-auto
    margin-top: 24px
    display: flex
    .sort-item
        flex: 1
        height: 66px
        .sort-ul
            display: flex
            line-height: 66px
            text-align: right
            .common
                margin-right: 30px
                margin-top: 16px
                line-height: 30px
                font-family: PingFangSC-Light
                font-size: 14px
                &:hover
                    cursor: pointer
            .comprehensive
                margin-left: 40px
            .sortactive
                border-bottom: 1px solid #FF9900
                color: #FF9900
        .sort-type
            display: flex
            line-height: 66px
            margin-left: 450px
            .sort-type-li
                font-size: 24px
                float: right
                color: #D8D8D8
                &:hover
                    cursor: pointer
            .active
                color: #FF9900
                
.content
    width: $width
    margin: $margin-auto
    height: 100%
    margin-top: 30px
    
</style>