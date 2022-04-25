<template>
 <view class="productInfo-discount f-24 c-f">
	{{ num}}折
 </view>
</template>

<script>
 export default {
  props: {
	  num: Number
  },
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
	.productInfo-discount {
		background: #F33D3D;
		border-radius: 8rpx;
		padding: 6rpx 4rpx;
		display: inline-block;
	}
</style>