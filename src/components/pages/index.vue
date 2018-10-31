<template>
	<div class="index-wrap">
		<Swiper
		:loop="true"
		:aspect-ratio="ratio"
		:list="imglist"/>
	</div>
</template>
<script>
	import { Swiper } from 'vux'
	import { Marquee, MarqueeItem } from 'vux'
	export default{
		components: {
		    Swiper,
		    Marquee,
    		MarqueeItem
		},
		data(){
			return{
				adminurl:"http://admin.haomawz.com",
				imglist:[],
				ratio:0
			}
		},
		mounted(){
			this.getBanner();
		},
		methods:{
			getBanner(){
				let self=this;
				this.$axios.post(this.$api.getBanner).then(res=>{
					let imglist=[];
					console.log(imglist);
					res.data.forEach(function(item,index){
						imglist.push({
							img: self.adminurl+item.bannerimage,
						});
					});
					self.imglist=imglist;
					console.log(self.imglist);
				})
			},
		}
	}
</script>
<style lang="scss">
	
</style>