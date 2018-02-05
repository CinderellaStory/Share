<template>
    <nav class="white">
			<ul>
				<li v-for="todo in todos">{{todo.text}}</li>
			</ul>
		</nav>
</template>
<script>
 export default{
     data:function() {
         return {
             todos:[
                {text:'销量优先'},
                {text:'价格区间'},
                {text:'分类'},
                {text:'发货地'}
             ]
         }
     }
 }
</script>
<style>
nav{ height: 0.7rem; line-height: 0.7rem; }
nav ul {margin: 0 auto;text-align: center;}
nav ul li{color: #333;margin: 0 0.3rem; display: inline-block;vertical-align: top; }
nav ul li.on{ color: #900000; }



</style>