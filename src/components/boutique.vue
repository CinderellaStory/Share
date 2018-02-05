<template>
	<div>
		 <!--搜索框区-->
      <HomeHeader></HomeHeader>
      <BoutiqueNav></BoutiqueNav>
      <Boutcontent></Boutcontent>
	</div>
</template>

<script>
import HomeHeader from './HomeHeader.vue'
import BoutiqueNav from './BoutiqueNav.vue'
import Boutcontent from './Boutcontent.vue'

export default {
  components: {
    HomeHeader,BoutiqueNav,Boutcontent
  }
}
</script>
