<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<style>
	/* utils.scss */
	@import "/utils/utils.scss";
	page {
		min-height: 100% !important;
		background: #F6F6F6;
		position: relative;
	}
</style>

