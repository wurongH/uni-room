<template>
	<view class="header">
		{{title}}
	</view>
</template>

<script>
	export default {
		data () {
			return {
				title: '机房列表'
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		line-height: 100upx;
		background-color: #4169E1;
		color: #fff;
		font-size: 32upx;
		text-align: center;
		letter-spacing: 2upx;
	}
</style>
