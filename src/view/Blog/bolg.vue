<template>
	<div id="blog">
		<section class="search">
			<input type="text" name='search' placeholder="请输入想要搜索的博客">
		</section>
	</div>
</template>
<script>
	export default {
		name: 'blog',
		data() {
			return {
			}
		}
	}
</script>
<style lang = 'scss' scoped>
#blog {
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
}

</style>