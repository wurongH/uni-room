<template>
	<view class="page">
		<page-status></page-status>
		<page-header></page-header>
		<view class="index_list">
			
		</view>
	</view>
</template>

<script>
	import http from '../../utils/http.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList() {
				this.request({
					url: http.baseUrl,
					method: 'post',
					data: http.indexdata,
					success: (res => {
						console.log(res.data)
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index_list {
		width: 96%;
		heihgt: 100%;
		height: 200upx;
		background-color: #f5f5f5;
		margin: 16upx auto;
		border-radius: 10upx;
		box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.3)
	}
</style>
