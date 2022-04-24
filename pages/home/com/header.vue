<template>
	<view class = "nqk_home_nav">
		<image src="/static/home/top_title.png" alt="" class = "nqk_home_nav_left">
		<view class = "nqk_home_nav_center">
			<u--input
			    placeholder="请输入内容"
			    border="surround"
			    v-model="keyword"
				shape = "circle"
				placeholderStyle = "fontSize:28rpx"
				:custom-style = "inputCustom"
			></u--input>
		</view>
		<image src="/static/home/scan.png" alt="" class = "nqk_home_nav_right">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:"",
				inputCustom: {
					padding: "6rpx 18rpx",
					width: "380rpx"
				},
			}
		}
	}
</script>

<style lang="scss">
	.nqk_home_nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12rpx 0rpx;
		&_left {
			width: 208rpx;
			height: 66rpx;
		}
		&_center {
			/deep/u-input {
				width: 390rpx;
				font-size: 28rpx !important;
				padding: 6rpx 18rpx !important;
			}
		}
		&_right {
			width: 36rpx;
			height: 36rpx;
		}
	}
</style>