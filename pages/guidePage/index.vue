<template>
	<view class="text-area">
		<u-button text="立即跳转" @click = "handleGo"></u-button>
	</view>
</template>

<script>
	import storage from "@/utils/storage.js"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleGo() {
				uni.reLaunch({
					url: "/pages/home/index"
				})
			}
		}
	}
</script>

<style>
</style>
