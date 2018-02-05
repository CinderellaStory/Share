<template>
   <div class="nav_item">
        <ul>
            <li v-for="item in items">
                <a href="">
                    <div class="nav_list"><img :src="item.NavImg"></div>
                    <p>{{item.message}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data:function(){
        return {
            items:[
                { message: '服饰箱包',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic01.png'},
                { message: '油品鞋类',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic02.png' },
                { message: '数码家电',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic03.png' },
                { message: '美妆洗护',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic04.png' },
                { message: '珠宝饰品',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic05.png' },
                { message: '运动户外',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic06.png' },
                { message: '百货餐厨',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic07.png' },
                { message: '特产美食',NavImg:'https://cinderellastory.github.io/shoppingMall/images/home/icon_pic08.png' }
            ]
        }
    }
}
</script>
<style>
.nav_item{ background:#fff;    padding: 0.32rem 0;}
.nav_item ul{ text-align:center;}
.nav_item ul li{display: inline-block;width: 1.2rem;margin: 0.2rem 0.3rem;vertical-align: top; }
.nav_list img{height: 0.86rem;width: 0.86rem;}
.nav_item ul li a{font-size: 0.14rem;color: #666;}
.nav_item ul li p{margin-top: 0.1rem;}
</style>