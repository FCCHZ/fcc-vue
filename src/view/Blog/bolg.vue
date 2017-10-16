<template>
	<div id="blog">
		<section class="search">
			<input type="text" name='search' placeholder="请输入想要搜索的博客">
		</section>
		<p>{{msg}}</p>
	</div>
</template>
<script>
	export default {
		name: 'blog',
		data() {
			return {
				msg: "这里是 成员博客 页面"
			}
		}
	}
</script>
<style lang = 'scss' scoped>
#blog {
	.search {

	}
}

</style>