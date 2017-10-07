<template>
	<div id="tool">
		<p>{{msg}}</p>
		<p>{{ $route.params.id}} ---  {{$route.params.nam}}</p>
	</div>
</template>
<script>
	export default {
		name: 'tool',
		data() {
			return {
				msg: "这里是 前端工具 页面"
			}
		}
	}
</script>
<style scoped>
	
</style>