<template>
	<div class="fcc_footer">
		<img class="logo" src="../assets/logo-navbar.png" alt="logo_navbar">
		<div class="footer_content">
			<div class="footer_content_list">
				<div class="footer_content_list_txt">
					<dl>
						<dd>关于我们</dd>
						<dd>常见问题</dd>
						<dd>学术诚信守则</dd>
					</dl>
				</div>
				<div class="footer_content_list_txt">
					<dl>
						<dd>联系我们</dd>
						<dd>隐私策略</dd>
						<dd>行为准则</dd>
						<dd>服务条款</dd>
					</dl>
				</div>
				<div class="footer_content_list_txt">
					<p>社交媒体</p>
				</div>
			</div>
			<div class="footer_content_code">
				<p>关注我们</p>
				<div class="footer_content_code_img">
					<div class="footer_content_code_QQimg">
						<img src="../assets/HangZhouQQ_code.jpeg" alt="QQ_code">
						<p>杭州FCC交流群</p>
					</div>
					<div class="footer_content_code_VXimg">
						<img src="../assets/HangZhouVX_code.jpg" alt="VX_code">
						<p>杭州FCC公众号</p>
					</div>
					
				</div>
			</div>
		</div>
		<div class="fcc_footer_copyright">
				<p>版权所有 © 杭州 FreeCodeCamp 社区</p>
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
	height: 426px;
	display: block;
	width: 100%;
	color: #FFF;
	background: #676767;
}
.fcc_footer .logo {
	display: block;
	margin-left: 5%;
	padding-top: 20px;
	height: 36px;
	width: 270px;
}
.footer_content_list {
	display: inline-block;
	margin-top: 40px;
}
.footer_content_list .footer_content_list_txt {
	width: 190px;
	padding-right: 25px;
	float: left;
	margin-bottom: 25px;
}
.footer_content_list .footer_content_list_txt dl dd,
.footer_content_list .footer_content_list_txt p  {
	line-height: 44px;
	text-align: right;
}
.fcc_footer .footer_content {
	width: 1080px;
	height: 280px;

	margin: 25px auto;
}
.footer_content_code {
	float: right;
	width: 318px;
}
.footer_content_code p {
	text-align: center;
	margin-bottom: 22px;
}
.footer_content_code .footer_content_code_img {
	display: flex;
	justify-content: space-between;
}
.footer_content_code .footer_content_code_img .footer_content_code_QQimg,
.footer_content_code .footer_content_code_img .footer_content_code_VXimg {
	height: 186px;
	width: 146px;
}
.footer_content_code .footer_content_code_img .footer_content_code_QQimg img,
.footer_content_code .footer_content_code_img .footer_content_code_VXimg img {
	height: 146px;
	width: 146px;
}
.fcc_footer_copyright p {
	text-align: center;
	color: #CACACA;
	font-size: 14px;
}
</style>