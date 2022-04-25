<template>
	<u-swiper
		:list="list5"
		@change="e => current = e.current"
		:indicatorStyle="indicatorStyle"
		:radius = "radius"
		:height="height + 'rpx'"
		:autoplay="false"
	>
		<view
			slot="indicator"
			class="indicator"
			v-if = "type == 1"
		>
			<view
				class="indicator__dot"
				v-for="(item, index) in list5"
				:key="index"
				:class="[index === current && 'indicator__dot--active']"
			>
			</view>
		</view>
		<view
			slot="indicator"
			class="indicator-num"
			v-if = "type == 2"
		>
		<text class="indicator-num__text">{{ current + 1 }}/{{ list5.length }}</text>
	</view>
	</u-swiper>
</template>

<script>
	export default {
		props: {
			type: {
				type: [Number,String],
				default: 1
			},
			indicatorStyle: {
				type: String,
				default: "right: 20rpx;bottom: 20rpx"
			},
			radius: {
				type: Number,
				default: 4
			},
			height: {
				type: [Number,String],
				default: 250
			}
		},
		data() {
			return {
				current: 0,
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.indicator {
		@include flex(row);
		justify-content: center;
	
		&__dot {
			 height: 6px;
			 width: 6px;
			 border-radius: 100px;
			 background-color: rgba(255, 255, 255, 0.35);
			 margin: 0 5px;
			 transition: background-color 0.3s;
	
			&--active {
				 background-color: #ffffff;
			 }
		}
	}
	
	.indicator-num {
		padding: 2rpx 16rpx;
		background-color: rgba(0, 0, 0, 0.35);
		border-radius: 100px;
		@include flex;
		justify-content: center;
	
		&__text {
			 color: #FFFFFF;
			 font-size: 12px;
		 }
	}
</style>