<template>
    <div class="h_container">
    <!--推荐商品区-->
    <div class="recommend white">
        <div class="title">
            <h1 class="fl reco-text"><span></span>{{RecoText}}</h1>
            <div class="more fr">{{more}}&gt;</div>
        </div>
        <div class="goodslist">
            <ul>
                <li v-for="list in lists">
                    <div class="goods-img">
                    <img :src="list.ProImg">
                    </div>
                    <div class="goods-detail">
                        <div class="ysc">
                            <div class="shoplogo"> 
                                <img :src="list.ShopImg">
                            </div>
                            <div class="goods-name">
                                <p>{{list.GoodsName}}</p>
                                <div class="goods-price">￥<span>{{list.GoodsPrice}}</span>.00</div>
                            </div>
                        </div>
                        <div class="shop-detail overflow">
                            <div class="shop-name fl">{{list.GoodsShop}}</div>
                            <div class="number fr">{{list.Number}}人付款</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!--热门商铺区-->
    <div class="hot-shop white">
        <div class="title">
            <h1 class="fl hot-text"><span></span>{{HotShop}}</h1>
            <div class="more fr">{{more}}&gt;</div>
        </div>
        <div class="hotshop-item">
            <ul>
                <li v-for="hot in hots">
                    <div class="hotshop-list">
                        <div class="shophot-detail">
                            <div class="hotshoplogo"> 
                                <img :src="hot.ShopImg">
                             </div>
                            <div class="hotshop-name">
                                <p class="snames">{{hot.HotName}}</p>
                                <p class="classify"><span>{{hot.Classify}}</span><em>共{{hot.GoodsNumber}}件商品</em></p>
                            </div>
                            <div class="btn fr">
                                <a href="shopindex.html">{{btn}}</a>
                            </div>
                        </div>
                        <div class="hotshop-goods">
                            <div class="item">
                                <div class="goods">
                                    <a href="goods-detail.html"><img :src="hot.GoodsImg1" alt=""></a> <span>¥199.99</span> </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <a href="goods-detail.html"><img :src="hot.GoodsImg2" alt=""></a> <span>¥199.99</span> </div>
                            </div>
                            <div class="item">
                                <div class="goods">
                                    <a href="goods-detail.html"><img :src="hot.GoodsImg3" alt=""></a> <span>¥199.99</span> </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
    export default{
        data:function() {
            return {
                more:'更多',
                RecoText:'推荐商品',
                HotShop:'推荐商铺',
                btn:'进入店铺',
                lists:[
                    {
                        ProImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsName:'秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
                        Number:'20',
                        GoodsPrice:'60',
                        GoodsShop:'盛世鸿祥'
                    },
                    {
                        ProImg:'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsName:'秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
                        Number:'20',
                        GoodsPrice:'60',
                        GoodsShop:'盛世鸿祥'
                    },
                    {
                        ProImg:'https://img.alicdn.com/bao/uploaded/i4/1766047907/TB1.Gl5glcHL1JjSZJiXXcKcpXa_!!0-item_pic.jpg_430x430q90.jpg',
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsName:'秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
                        Number:'20',
                        GoodsPrice:'60',
                        GoodsShop:'盛世鸿祥'
                    },
                    {
                        ProImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsName:'秋季新款女装韩版休闲百搭秋季新款女装韩版休闲百搭',
                        Number:'20',
                        GoodsPrice:'60',
                        GoodsShop:'盛世鸿祥'
                    }
                ],
                hots:[
                    {
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        HotName:'在水一方服饰',
                        Classify:'服装',
                        GoodsNumber:'102',
                        GoodsImg1:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg2:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg3:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                    },
                    {
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        HotName:'在水一方服饰',
                        Classify:'服装',
                        GoodsNumber:'102',
                        GoodsImg1:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg2:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg3:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                    },
                    {
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        HotName:'在水一方服饰',
                        Classify:'服装',
                        GoodsNumber:'102',
                        GoodsImg1:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg2:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg3:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                    },
                    {
                        ShopImg:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        HotName:'在水一方服饰',
                        Classify:'服装',
                        GoodsNumber:'102',
                        GoodsImg1:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg2:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                        GoodsImg3:'http://www.ysc66.com/Uploads//goods/2017-09-14/59ba1daf90c7d_600x600.jpg',
                    }
                ]
            }
        }
    }
</script>
<style>
h1{ font-size: 0.16rem;}
.recommend{margin-top: 0.2rem; }
 /*标题样式*/
.reco-text{ color: #e46600;}
.reco-text span{ background: #e46600; }
.hot-text{ color: #e40076; }
.hot-text span{ background: #e40076; }

.shop-detail{ margin-top:0.2rem; }
.goodslist ul li{margin-right: 0.2rem; margin-bottom: 0.2rem;display: inline-block;width: 3.42rem;border: 1px solid #ccc;}
.goods-detail{padding: 0.1rem; font-size: 0; background: #fff;}
.goods-detail .goods-name{ color: #333; vertical-align: middle; }
.shop-detail .shop-name{font-size: 0.2rem;    color: #666;}
.shop-detail .number{font-size: 0.2rem;    color: #666;}

</style>
