<template>
 <view class="productInfo-bottom nqk-flex">
  <view class="nqk-flex-base">
	  <image src="/static/product/collection.png" mode="" class="productInfo-bottom-icon"/>
	  <image src="/static/product/share.png" mode="" class="productInfo-bottom-icon ml40"/>
	  <image src="/static/product/cart.png" mode="" class="productInfo-bottom-icon ml40"/>
  </view>
  <view class="nqk-flex-base">
	  <view class="productInfo-bottom-btn">加购物车</view>
	  <view class="productInfo-bottom-btn productInfo-bottom-btns ml20">立即购买</view>
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
	.productInfo-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10rpx 30rpx 20rpx;
		box-sizing: border-box;
		background: #fff;
		border-top: 1px solid rgba(0, 0, 0, .1);
		&-btns {
			color: #fff !important;
			background: #1C2632;
			border-color: #1C2632 !important;
		}
		&-btn {
			width: 220rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 40rpx;
			border: 2rpx solid #AAAAAA;
			font-size: 30rpx;
		}
		&-icon {
			width: 36rpx;
			height: 36rpx;
		}
	}
</style>