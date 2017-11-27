<template>
  <div id="app">
 
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
// 	ak:'BMNxfyPMMsx0XaeSUdrCHH6tjvd8u8Es'
// })

Vue.use(Element);
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  background: #fff;*/
}
</style>
