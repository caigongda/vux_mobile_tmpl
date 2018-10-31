<template>
	<header class="main-pub-header">
		<div @click="gotoindex" class="header-logo"><img src="@/assets/logo.png"></div>
		<span class="icon icon-menu"></span>
	</header>
</template>
<script>
	import { XHeader } from 'vux'
	export default{
		components: {
		    XHeader
		},
		data(){
			return{
				leftoption:{
					showBack:false,
				}
			}
		},
		methods:{
			gotoindex(){
				console.log("ss")
			}
		}
	}
</script>
<style lang="less">
	.main-pub-header{
		height: 50px;
		width: 100%;
		display: flex;
		align-items: center;
		background: #fff;
		justify-content: space-between;
		.header-logo{
			display: flex;
			align-items: center;
		}
		.icon-menu{
			margin-right: 10px;
			font-size: 18px;
			color:#000;
			font-weight: bolder;
		}
	}
</style>