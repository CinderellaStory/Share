<template>
    <header>
        <form action="" method="get">
            <div class="serach fl">
                <i class="iconfont icon-sousuo2"></i>
                <input type="text" placeholder="请输入商品或店铺名称">
            </div>
            <div class="sweep fr"><i class="iconfont icon-saoma1"></i></div>
        </form>
    </header>
</template>
<style>
header{ overflow: hidden; font-size: 0; height: 0.9rem; background: #990000;  }
.serach { font-size: 0; position: relative; }
.serach .icon-sousuo2{font-size: 0.3rem; color: #666; position: absolute; left: 0.5rem;top: 0.34rem;}
.serach input{font-size: 0.3rem;padding-left: 0.6rem;border: none; outline: none; margin-top: 0.2rem;border-radius: 0.3rem; width: 4.8rem; height: 0.56rem; margin-left: 0.35rem; }
.sweep{margin: 0.3rem 0.4rem 0 0;}
.sweep .icon-saoma1{    font-size: 0.3rem; color: #fff;  }
</style>