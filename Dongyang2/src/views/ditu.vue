<template>
  <div id="admin">
    <div v-if="isMapShow">
        <el-input class="search_input" v-model="mapConfig.keyword" placeholder="搜索地点，并进行选择"></el-input>
        <baidu-map class="map-container"
        :scroll-wheel-zoom="true"
        :center="mapConfig.center"
        :zoom="mapConfig.zoom">
          <bm-view class="bm-view">
          </bm-view>
          <bm-local-search
            :keyword="mapConfig.keyword"
            :auto-viewport="true"
            :location="mapConfig.location"
            @infohtmlset="infohtmlset">
          </bm-local-search>
        </baidu-map>
      </div>
      <!-- <div>我是admin，你是那一个？</div>
      <div>我是NO.{{ $store.state.count }}</div>
      <div>我是帅帅的{{ zimo }}</div>
      <el-button @click="mocktest" type="primary">测试接口</el-button> -->
    <!--   <HelloWorld></HelloWorld> -->

      <!--此标签就代表了HelloWorld这个页面-->
  </div>
</template>

<script>
//import HelloWorld from '../components/HelloWorld'
import { mapState } from 'vuex'
export default {
  name: 'admin',
  components:{
    //HelloWorld
  },
  data () {
    return {
      isMapShow: true,
      currentPath: '',//当前要走的路径
      auths: [],//所有路由的来去监听的数组
      agent_id:'',
      mapConfig: {
        location: '',
        keyword: '',
        center: { lng: 121.59996, lat: 31.197646 },
        zoom: 12,
      }
    }
  },
  methods:{
    mocktest(){
      
    },
    infohtmlset(poi) {
      this.demandInfo.listDemandInterview[this.currentMapIndex].interviewAddress = `${poi.city}${poi.address}${poi.title}`;
      this.demandInfo.listDemandInterview[this.currentMapIndex].latitude = poi.point.lat;
      this.demandInfo.listDemandInterview[this.currentMapIndex].longitude = poi.point.lng;
      this.isMapShow = false;
    }
  },
  watch:{
    $route(to, from) {
      this.currentPath = to.path;//当前路由的监听
    },
  },
  computed:{
    ...mapState([
      'zimo'
      ])
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
  #admin{
    width:100%;
    height: 100%;
    background: #ccc;
    .search_input{
      width:600px;
      display: block;
      height: 40px;
      margin:0 auto;
      padding-top:20px;
    }
    .map-container {
      width: 1200px;
      height: 100%;
      margin:0 auto;
      .bm-view {
        width: 100%;
        height: 400px;
        margin-bottom: 40px;
      }
    }
  }

</style>
