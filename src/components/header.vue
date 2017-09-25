<template>
	<div id="header">
		<div id="header-img">
		<img src="../assets/logo-navbar.png" alt="">
	</div>
			<ul>
				<li><a href="">首页</a></li>
				<li><a href="">活动中心</a></li>
				<li><a href="">前端工具</a></li>
				<li><a href="">成员博客</a></li>
				<li><a href="">关于我们</a></li>
			</ul>
	</div>
</template>

<script>
	export default {
		name: 'header',
		data () {
			return {
			}
		},
		methods: {

		}
	}
</script>
<style scoped>
#header {
	height: 50px;
	width: 100%;
}
#header #header-img {
	float: left;
	width: 160px;
	padding: 10px 5px;
	margin-left: 4%;
}
#header #header-img img {
	display: block;
	width: 100%;
	height: 100%;
}
#header ul {
	height: 50px;
	float: right;
}
#header ul li {
	float: left;
	list-style: none;
}
#header ul li a {
	display: inline-block;
	text-decoration: none;
	padding: 10px 25px;
	color: #00b800;
}
</style>