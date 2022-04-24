<template>
	<u-swiper
		:list="list5"
		@change="e => current = e.current"
		:autoplay="false"
	>
		<view
			slot="indicator"
			class="indicator"
		>
			<view
				class="indicator__dot"
				v-for="(item, index) in list5"
				:key="index"
				:class="[index === current && 'indicator__dot--active']"
			>
			</view>
		</view>
	</u-swiper>
</template>

<script>
	export default {
		data() {
			return {
				list5: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
			}
		}
	}
</script>

<style>
</style>