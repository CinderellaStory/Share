<template>
  <div class="home">
   <!--搜索框区-->
    <van-search placeholder="请输入商品或店铺名称" v-model="value" class="search" />
    <!--轮播图区-->
    <van-swipe :autoplay="3000">
      <van-swipe-item><img src="http://www.ysc66.com/Uploads//banner/2017-10-31/59f7f3a334aeb_1920x500.png"></van-swipe-item>
      <van-swipe-item><img src="http://www.ysc66.com/Public/Home/images/infomation/banner.png"></van-swipe-item>
      <van-swipe-item><img src="http://www.ysc66.com/Uploads//banner/2017-11-10/5a054c1c9376b_1920x500.png"></van-swipe-item>
      <van-swipe-item><img src="http://www.ysc66.com/Uploads//banner/2017-12-25/5a40b29eae795_1920x500.png"></van-swipe-item>
    </van-swipe>
    <!--类目导航区-->
    <HomeNavbar></HomeNavbar>
    <!--首页内容区-->
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeNavbar from './HomeNavbar.vue'
import HomeContent from './HomeContent.vue'

export default {
  components: {
    HomeNavbar,HomeContent
  }
}
</script>
<style>
.search{ background:#900000!important;height:0.9rem}
.van-swipe-item img{ height:4rem; width:100%;}
.van-swipe__indicators{bottom: 0.7rem;}
.van-search__input-wrap{border-radius: 0.3rem; height: 0.56rem;  }
.van-search__input{line-height:0.26rem;height: 0.26rem; }
.van-swipe__indicators i{ background:#fff; height: 0.3rem;width:0.3rem; margin-right:0.2rem!important; }
.van-swipe__indicator--active{ background:#900000!important;}
</style>

