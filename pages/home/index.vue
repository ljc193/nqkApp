<template>
	<view class="nqk_home">
		<view class="status_bar"><!-- 这里是状态栏 --></view>
		<!-- 头部 -->
		<Header/>
		<!-- 轮播 -->
		<view class = "mt30">
			<Swiper/>
		</view>
		<!-- 操作 -->
		<view class = "mt30 nqk-flex">
			<Card v-for = "i in cardList" :key = "i.icon" :item = "i"/>
		</view>
		<!-- 热销 -->
		<view class="mt50">
			<view class="nqk-flex-base nqk_home_hot">
				<image src="/static/home/hot.png" mode="" class="nqk_home_hot_icon"/>
				<text class="c-2 f-34 blod">热销产品</text>
			</view>
			<view class="mt30">
				<HotProduct/>
			</view>
		</view>
		<!-- 产品介绍 -->
		<view class="mt50">
			<view class="c-2 f-34 blod">产品介绍</view>
			<view class="mt30" v-for="i in 5" :key = "i">
				<Product/>
			</view>
		</view>
	</view>
</template>

<script>
	import Header from "./com/header"
	import HotProduct from "./com/hotProduct.vue"
	import Card from "./com/card"
	import Product from "./com/product"
	import Swiper from "@/components/swiper/index.vue"
	export default {
		components: {
			Header,Swiper,Card,HotProduct,Product
		},
		data() {
			return {
				cardList:[
					{
						icon: "/static/home/answer.png",
						name: "解疑答惑",
						bg: "#FFFCF9"
					},
					{
						icon: "/static/home/aboutUs.png",
						name: "关于我们",
						bg: "#F9FAFE"
					},
					{
						icon: "/static/home/video.png",
						name: "视频介绍",
						bg: "#FBF9FF"
					},
					{
						icon: "/static/home/shop.png",
						name: "我要开店",
						bg: "#F9FAFE"
					}
				]
			}
		},
		onLoad() {
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.nqk_home {
		padding: 0 30rpx 60rpx;
		background: #F6F6F6;
		min-height: 100%;
		box-sizing: border-box;
		&_hot {
			&_icon {
				width: 64rpx;
				height: 36rpx;
				margin-right: 8rpx;
			}
		}
	}
</style>
