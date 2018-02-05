<template>
  <div id="app">
    <NavBottom></NavBottom>
    <router-view/>
  </div>
</template>

<script>
import './assets/js/viewport'
import NavBottom from './components/NavBottom'

export default {
  name: 'app',
  components:{
  	NavBottom
  }
}
</script>

<style>
@import './assets/css/index.css';
@import './assets/css/common.css';
@import './assets/css/reset.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
