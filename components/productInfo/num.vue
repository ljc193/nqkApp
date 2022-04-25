<template>
 <view class="productInfo-num">
	<text class="f-24 c-del">{{ mark }}</text>
	<text class="c-del productInfo-num-center" :style = "{ fontSize: size + 'rpx' }" >{{ num }}</text>
	<text class="c-9 f-24" :style="{ textDecoration: type==2?'line-through':'' }" >{{ unit }}</text>
 </view>
</template>

<script>
 export default {
  props: {
	  mark: {
		  type: String,
		  default: "¥"
	  },
	  size: {
		  type: Number,
		  default: 48 
	  },
	  type: {
		  type: String,
		  default: "1"  // 1正常显示  2中划线
	  },
	  num: Number,
	  unit: String
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
	.productInfo-num {
		&-center {
			margin: 0 4rpx;
		}
	}
</style>