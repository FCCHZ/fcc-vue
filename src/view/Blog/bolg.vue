<template>
	<div id="blog">
		<section class="search">
			<input type="text" name='search' placeholder="请输入想要搜索的博客" @input='search' v-model='searchValue'>
		</section>
		<section class="member_blog">
			<div class="person" v-for="(item, index) in banners">
   			<img :src="imgSrc" @click='goBlog(item.url)'>
				 <div class="content">
					<h4>{{item.name}} 博客</h4>
					<ul class="c_t">
						<li class="html">HTML</li>
						<li class="css">CSS</li>
						<li class="js">JS</li>
					</ul>
					<ul class="c_b">
						<li class="vue">VUE</li>
						<li class="ang">Angular</li>
					</ul>
					<ul>
						<li><img :src="item.imgUrl" class="avr"></li>
						<li>{{item.name}}</li>
					</ul>
				</div>
			</div>		
		</section>
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
						url: 'https://www.shmaur.com'
					},
		  		{ 
						name: '尹一鸣',
						imgUrl: secord,
						url: 'https://yinyimingall.github.io/blog/' 
					},
		  		{ 
						name: '钱凯行',  
						imgUrl: three,
						url: 'https://github.com/Zzhiren/zcpc '

					},
					{ 
						name: '胡光楠',
						imgUrl: four,
						url: 'https://github.com/blankul ' 
					},
					{ 
						name: '杨扬',
						imgUrl: five,
						url: 'https://github.com/pecora9264' 
					},
					{ 
						name: '郑斌',
						imgUrl: six,
						url: 'http://www.jianshu.com/u/7ee022573352'
					}
				]
			}
		},
		methods: {
			goBlog(url){
				window.location.href = url
			},

			search() {
				this.banners = window.banners.filter((v, i) => {
					return v.name.indexOf(this.searchValue) !== -1
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
		input {
			width: 420px;
			border: 1px solid #e1e1e1;
			height: 100%;
			text-indent: 20px;
			font-size: 14px;
		}
	}
	.member_blog{
	
		display: flex;
	  justify-content: center;
		flex-wrap:wrap;
		.person{
			margin: 15px;
			.content{
				border:1px	solid #eeeeee;
				h4{
				padding: 15px;
				color: #797772;
			}
			ul{
				display: flex;
				justify-content: center;
				li{
					margin: 10px 20px;
				}
				.html{
					color: #35CE23;
				}
				.css{
					color: #17B7CF;
				}
				.js{
					color: #F06A0B;
				}
				.vue{
					color: #48A88A;
				}
				.ang{
					color: #BC519B;
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