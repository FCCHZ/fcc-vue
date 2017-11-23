<template>
	<div id="header">
		<div id="header-img">
		<img src="../assets/logo-navbar.png" alt="">
	</div>
	<div class="nav">
		<router-link class="nav-list" to="/">首页</router-link>
		<router-link class="nav-list" to="/active">活动中心</router-link>
		<router-link class="nav-list" :to="{name:'Tool',params:{id:666,nam:'黄金良'}}">前端工具</router-link>
		<router-link class="nav-list" to="/blog">成员博客</router-link>
		<router-link class="nav-list" to="/about">关于我们</router-link>
	</div>
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
	position:fixed; 
	top:0; 
	left: 0;
	background-color: #FFF;
	z-index: 99;
	    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.1);
    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.1);
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
.nav {
	height: 50px;
	float: right;
}

#header .nav-list {
	display: inline-block;
	text-decoration: none;
	padding: 10px 25px;
	color: #00b800;
}
</style>