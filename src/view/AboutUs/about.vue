<template>
	<div id="about">
		<p>{{msg}}</p>
		<p>{{ $route.name}}</p>
	</div>
</template>
<script>
	export default {
		name: 'about',
		data() {
			return {
				msg: "这里是 关于我们 页面"
			}
		}
	}
</script>
<style scoped>
	
</style>