<template>
	<div id="blog">
		<section class="search">
			<input type="text" name='search' placeholder="请输入想要搜索的博客" @input='search' v-model='searchValue'>
			<i class="el-icon-search"></i>
		</section>
		<el-row  :gutter="0" class="member_blog">
			<el-col :span="6" class="person" 
				v-for="(item, i) in banners"
				:key="item.name" 
				:class="{mouse_move: i===index}" >
				<div 
				@mouseenter.prevent="toggleShade(i)" 
				@mouseleave.prevent="toggleShade(-1)">
					<img  class="banner_image" :src="imgSrc" @click='goBlog(item.url)'>
					<div class="connect">  
						<h4>{{item.name}} 博客</h4>
						<el-row justify="space-around" class="skill">
							<el-col v-for='v in item.skillList' :key='v.name' :span="8"><div class='skill_name'>{{ v.name }}</div></el-col>	
						</el-row>
						<ul>
							<li><img :src="item.imgUrl" class="avr"></li>
							<li>{{item.name}}</li>
						</ul>
					</div> 
				</div>
			</el-col>		
		</el-row>
		<vue-Footer></vue-Footer>
	</div>
</template>
<script>
	import fccFooter from '@/components/FCC_footer_one'
	import first from '../../assets/blog_huangjinliang.jpg'
	import secord from '../../assets/blog_yinyiming.png'
	import three from  '../../assets/blog_qiankaixing.jpg'
	import four from  '../../assets/blog_huguangnan.jpg'
	import five from '../../assets/blog_yangyang.jpg'
	import six from '../../assets/blog_zhengbin.jpg'
	import seven from '../../assets/blog_lixukai.jpg'
	import pic from  '../../assets/shmaur.jpg'
	export default {
		name: 'blog',
		data() {
			return {
				imgSrc: pic,
				searchValue: '',
				banners: [
		  		{ 
						name: '黄金良',  
						imgUrl: first,
						url: 'https://www.shmaur.com',
						skillList: [
							{ name:'UI设计' },
							{ name:'HTML' },
							{ name:'anuglar' }
						]
					},
		  		{ 
						name: '尹一鸣',
						imgUrl: secord,
						url: 'https://yinyimingall.github.io/blog/',
						skillList: [
							{ name:'html' },
							{ name:'js' },
							{ name:'css' },
							{ name:'angular' }
						]
					},
		  		{ 
						name: '钱凯行',  
						imgUrl: three,
						url: 'https://github.com/Zzhiren/zcpc ',
						skillList: [
							{ name:'html' },
							{ name:'js' },
							{ name:'css' }
						]

					},
					{ 
						name: '胡光楠',
						imgUrl: four,
						url: 'https://github.com/blankul',
						skillList: [
							{ name:'html' },
							{ name:'js' },
							{ name:'css' },
							{ name:'jquery' },
							{ name:'vue' }
						]
					},
					{ 
						name: '杨扬',
						imgUrl: five,
						url: 'https://github.com/pecora9264',
						skillList: [
							{ name:'html' },
							{ name:'js' },
							{ name:'css' },
							{ name:'jquery' }
						] 
					},
					{ 
						name: '郑斌',
						imgUrl: six,
						url: 'http://www.jianshu.com/u/7ee022573352',
						skillList: [
							{ name:'html' },
							{ name:'js' },
							{ name:'css' },
							{ name:'Vue' }
						]
					},
					{ 
						name: '李序锴',
						imgUrl: seven,
						url: 'http://www.jianshu.com/u/7ee022573352',
						skillList: [
							{ name:'后端' },
							{ name:'前端' }
						]
					}
				],
				index: -1
			}
		},
		methods: {
			goBlog(url){
				window.location.href = url
			},
			toggleShade (type) {
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
		
		components:{
			"vue-Footer": fccFooter
  	},

		created() {
			window.banners = this.banners
		}
	}
</script>
<style lang = 'scss' scoped>
#blog {
	$theme: #18A4CE;
	.search {
		margin: 20px auto;
		width: 460px;
		height: 50px;
		position: relative;
		i{
			position: absolute;
			top: 40%;
		  right: 60px;
		}
		input {
			width: 420px;
			border: 1px solid #e1e1e1;
			height: 100%;
			text-indent: 20px;
			font-size: 14px;
		}

	}
	.member_blog{
		width: 90%;
		margin: 20px auto;
		.person{
			width: 21%;
			margin: 2%;
			border:10px solid white;
			transition:All 0.2s ease-in-out;
			-webkit-transition:All 0.2s ease-in-out;
			-moz-transition:All 0.2s ease-in-out;
			-o-transition:All 0.2s ease-in-out;
			&.mouse_move{
				box-shadow:0px 0px 15px 8px #E6E6E6;
				transform:translate(0,-15px);
				-webkit-transform:translate(0,-15px);
				-moz-transform:translate(0,-15px);
				-o-transform:translate(0,-15px);
				-ms-transform:translate(0,-15px);
			}
		
			.banner_image{
				width: 100%;
			}
			margin-top: 20px;
			.connect{
				
				border:1px solid #eeeeee;
				h4{
					padding: 20px 0 0 10px;
					text-align: left;
				}
				.skill{
					height: 80px;
					color: #6e6e6e;
					.skill_name {
						text-align: center;	
						padding-top: 20px;
					}
				}	
				ul{
					display: flex;
					justify-content: center;
					li{
						margin: 10px 20px;
					}
				
					.avr{
						width: 30px;
						height: 30px;
						border-radius: 15px;
					}
			}
			}
			
		}
	}
}

</style>