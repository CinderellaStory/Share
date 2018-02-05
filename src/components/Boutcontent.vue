<template>
    <div class="boutique">
        <ul>
            <li v-for="todo in todos">
                <a href="goods-detail.html">
                    <div class="goods-img"> <img :src="todo.GoodsImg"> </div>
                    <div class="goods-detail">
                        <div class="goods-name">
                            <p>{{todo.GoodsName}}</p>
                        </div>
                        <div class="goods-price"> ￥<span>{{todo.GoodsPrice}}</span>.00 </div>
                        <div class="shop-detail overflow">
                            <div class="shop-name fl">{{todo.GoodsShop}}</div>
                            <div class="number fr">{{todo.Number}}人付款</div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
 export default{
     data:function() {
         return {
             todos:[
                 {
                 GoodsImg:'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                 GoodsName:'2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
                 GoodsPrice:'449',
                 GoodsShop:'盛世鸿祥',
                 Number:'2333'
             },
             {
                 GoodsImg:'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                 GoodsName:'2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
                 GoodsPrice:'449',
                 GoodsShop:'盛世鸿祥',
                 Number:'2334'
             },
             {
                 GoodsImg:'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                 GoodsName:'2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
                 GoodsPrice:'449',
                 GoodsShop:'盛世鸿祥',
                 Number:'234'
             },
             {
                 GoodsImg:'https://img.alicdn.com/bao/uploaded/i1/TB1bZfLQpXXXXcxXXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
                 GoodsName:'2017春装新款韩版潮宽松学生百搭T恤女衣服露肩长袖打底衫女夏季',
                 GoodsPrice:'449',
                 GoodsShop:'盛世鸿祥',
                 Number:'234'
             }
             ]

         }
     }
 }
</script>
<style>
.boutique{ margin: 0.1rem 0 1rem 0; }
.boutique ul{ text-align: center; margin: 0 auto;font-size: 0; }
.boutique ul li{border: 1px solid #ccc;text-align: left; margin: 0 0.1rem 0.2rem; width: 3.4rem;display: inline-block;vertical-align: top; }

.shop-address,.shop-detail{ font-size: 0.14rem; color: #999; }
.shop-detail{ padding: 0.1rem; }
</style>