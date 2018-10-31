<template>
  <div id="app">
  	<pubheader/>
    <router-view></router-view>
  </div>
</template>

<script>
	import pubheader from '@/components/public/header';
export default {
	components:{pubheader},
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
