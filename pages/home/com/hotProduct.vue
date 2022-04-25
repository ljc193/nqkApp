<template>
	<view class="nqk_home_hotP nqk-flex">
		<view class="nqk-flex-base">
			<image src="/static/home/answer.png" mode="" class="nqk_home_hotP_pic"></image>
			<view class="nqk_home_hotP_center">
				<text class="c-2 f-34 blod">固发生发养发帽</text>
				<text class="c-9 f-28 mt10">固发生发养发帽</text>
			</view>
		</view>
		<view>
			<Num :num="998" unit="/件" />
		</view>
	</view>
</template>

<script>
	import Num from "@/components/productInfo/num.vue"
	export default {
		components: {Num},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nqk_home_hotP {
		padding: 30rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		&_center {
			display: flex;
			flex-direction: column;
			margin-left: 30rpx; 
		}
		&_pic {
			width: 160rpx;
			height: 160rpx;
		}
	}
</style>