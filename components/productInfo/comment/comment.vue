<template>
 <view class="productInfo-comment-c nqk-flex">
	<image src="../../../static/home/aboutUs.png" mode="" class="userPic"></image>
	<view class="ml20">
		<view class="c-2 f-26">用户昵称</view>
		<view class="c-2 f-30 mt30">
			本店所有产品都是正品行货,我们支持任何方式验货。如有假冒，我们百倍赔偿！请放心购买！
		</view>
		<view class="c-9 f-24 mt20">刚刚17:55</view>
	</view>
 </view>
</template>

<script>
 export default {
  props: {},
  components: {},
  data() {
   return {
    
   }
  },
  methods: {
   
  }
 }
</script>

<style lang="scss" scoped>
	.productInfo-comment-c {
		align-items: flex-start !important; 
		.userPic {
			width: 48rpx;
			height: 48rpx;
			flex-shrink: 0;
		}
	}
</style>