<template>
	<div class="fcc_footer">
		<img class="logo" src="../assets/logo-navbar.png" alt="logo_navbar">
		<div class="fcc_footer_txt">
				<p>地址：浙江省杭州市西湖区    |     版权所有：杭州FreeCodeCamp版权所有  </p>
				<p>杭州FreeCodeCamp社区 v1.0 © hz.freecodeCamp.com All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer',
		data () {
			return {
			}
		},
		methods: {

		}
	}
</script>
<style scoped>
.fcc_footer{
	margin-top: 30px;
	height: 150px;
	display: block;
	width: 100%;
	color: #FFF;
	background: #676767;
}
.fcc_footer .logo {
	display: block;
	margin: 0 auto;
	padding-top: 25px;
	height: 36px;
	width: 270px;
}
.fcc_footer .fcc_footer_txt {
	margin-top: 10px;
}
.fcc_footer .fcc_footer_txt p {
	display: block;
	text-align: center;
	line-height: 30px;
	font-size: 14px;
	color: #FFF;
}
</style>