<template>
	<view class="nqk_home_product">
		<view class="nqk_home_product_pic">
			<view class="product_cover"></view>
			<view class="product_title c-f">
				固发生发养发帽
				<image src="/static/home/right.png" mode="" class="product_title_right"></image>
			</view>
		</view>
		<view class="mt30 pd30">
			本店所有产品都是正品行货,我们支持任何方式验货。
			如有假冒，我们百倍赔偿！请放心购买！
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.nqk_home_product {
		background: #fff;
		border-radius: 20rpx; 
		&_pic {
			position: relative;
			.product_title {
				position: absolute;
				height: 64rpx;   
				line-height: 64rpx;
				padding: 0rpx 10rpx 0rpx 30rpx;
				bottom: -32rpx;
				left: 0;
				background: #1C2632;
				&_right {
					position: absolute; 
					right: -18rpx; 
					top: 0;
					width: 20rpx;
					height: 100%;
				}
			}
			.product_cover {
				width: 100%; 
				height: 388rpx;
				background: #D8D8D8;
				border-radius: 20rpx 20rpx 0px 0px;
			}
		}
	}
</style>