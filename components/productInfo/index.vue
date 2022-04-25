<template>
	<view class="nqk-productInfo">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<!-- swiper -->
		<view class="nqk-productInfo-swiper">
			<Swiper type = "2" :radius = "0" height = "662" />
			<div class = "backIcon" @click = "back">
				<u-icon name="arrow-left"></u-icon>
			</div>
		</view>
		<!-- content -->
		<view class="nqk-productInfo-c">
			<MainInfo></MainInfo>
			<view class="mt20">
				<ParamInfo/>
			</view>
			<view class="mt20">
				<Comment/>
			</view> 
			<!-- 详情 -->
			<view class="mt40">
				<view class="nqk-productInfo-dtitle">
					<view class="dtitle-line"></view> 
					<view class="c-2 f-30 blod dtitle-t">商品详情</view>
					<view class="dtitle-line"></view>
				</view>
				<view class="mt20">
					<image src="../../static/home/top_title.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- bottom bar --> 
		<Bottom/>
	</view>
</template>

<script>
	import Swiper from "@/components/swiper/index.vue"
	import MainInfo from "./mainInfo"
	import ParamInfo from "./paramInfo"
	import Comment from "./comment"
	import Bottom from "./bottom"
	export default {
		components: { Swiper,MainInfo,ParamInfo,Comment,Bottom},
		data() {
			return{
				
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nqk-productInfo {
		&-dtitle {
			display: flex;
			align-items: center;
			justify-content: center;
			.dtitle-t {
				margin: 0 20rpx;
			}
			.dtitle-line {
				width: 60rpx;
				height: 4rpx;
				background: #000000;
				opacity: 0.1;
			}
		}
		&-c {
			padding: 20rpx; 
		}
		&-swiper {
			position: relative;
			.backIcon {
				position: absolute;
				display: inline-block;
				top: 30rpx;
				left: 30rpx;
			}
		}
	}
</style>