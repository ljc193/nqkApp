<template>
	<view class = "nqk_home_card" :style = "{ background: item.bg }">
		<image :src="item.icon" class = "nqk_home_card_icon" />
		<view class="f-26 center">{{ item.name }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object
		}
	}
</script>

<style lang="scss" scoped>
	.nqk_home_card {
		border-radius: 20rpx;
		padding: 30rpx 26rpx;
		background: #FFFCF9;
		display: inline-block;
		text-align: center;
		&_icon {
			width: 72rpx;
			height: 72rpx;
			display: inline-block;
		}
	}
</style>