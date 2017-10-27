<template>
	<div id="blog">
		<section class="search">
			<input type="text" name='search' placeholder="请输入想要搜索的博客">
		</section>
		<section class="member_blog">
			<div class="person" v-for="(item, index) in banners" :key="index">
   				<img :src="item.imgUrl">
				<h4>Shmaur博客</h4>
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
					<li><img :src="imgSrc" class="avr"></li>
					<li>黄金良</li>
				</ul>
			</div>		
		</section>
	</div>
</template>
<script>
	import first from '../../assets/shmaur.jpg'
	import secord from '../../assets/shmaur.jpg'
	import three from  '../../assets/shmaur.jpg'
	import four from  '../../assets/shmaur.jpg'
	import pic from  '../../assets/logo.png'

	export default {
		name: 'blog',
		data() {
			return {
				imgSrc: pic,
				banners: [
              		{ imgUrl: first },
              		{ imgUrl: secord },
              		{ imgUrl: three },
					{ imgUrl: four }
          		],
				
			}
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
		.person{
			border: 1px solid red;
			margin: 15px;
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
				
				}
			}

		}
	}
}

</style>