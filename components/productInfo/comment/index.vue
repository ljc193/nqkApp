<template>
 <view class="productInfo-comment nqk-card">
	<view class="nqk-flex">
		<text class="c-2 f-30 blod">商品评价</text>
		<view class="nqk-flex-base">
			<text class="f-24 c-9">共有100条评论</text> 
			<image src="/static/home/arrow-right.png" mode="" class = "productInfo-comment-icon"></image>
		</view>
	</view>
	<!-- 评论 -->
	<view class="mt30">
		<Comment/>
	</view>
 </view>
</template>

<script>
	import Comment from "./comment"
 export default {
  props: {},
  components: {Comment},
  data() {
   return {
    
   }
  },
  methods: {
   
  }
 }
</script>

<style lang="scss" scoped>
	.productInfo-comment {
		&-icon {
			width: 26rpx;
			height: 26rpx;
		}
	}
</style>