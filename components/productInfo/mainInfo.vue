<template>
	<view class="productInfo-main nqk-card">
		<view class="c-2 f-34 blod">
			2022固发生发养发帽健康产品固发生发养发帽健康产品固发生发养发帽健康产品产…
		</view>
		<view class="c-9 f-24 mt15">keep特色网红健身推荐套餐，膳食营养保持身材</view>
		<view class="nqk-flex-base mt20">
			<Discount :num = "0.5"></Discount>
			<view class="ml10">
				<Num :num ="9999" unit="¥600" type="2" />
			</view>
		</view>
	</view>
</template>

<script>
	import Discount from "./discount"
	import Num from "./num"
	export default {
		props: {},
		components: {Discount,Num},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.productInfo-main {
		
	}
</style>