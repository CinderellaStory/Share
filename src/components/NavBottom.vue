<template>
	<footer class="white">
      <router-link v-for="item in NavData" :to="item.to">
        <i class="iconfont" :class="item.class"></i>
        <p>{{item.text}}</p>
      </router-link>
    </footer>
</template>

<script>
	export default {
		data: function(){
		return {
			NavData: [
				{
					to:'/',
					class:'icon-shouye',
					text:'首页'
				},
				{
					to:'/boutique',
					class:'icon-jingpin',
					text:'精品'
				},
				{
					to:'/shop',
					class:'icon-dianming',
					text:'名店'
				},
				{
					to:'/my',
					class:'icon-wode',
					text:'我的'
				}
				]
		  }
		}
	}
</script>

<style>

</style>
