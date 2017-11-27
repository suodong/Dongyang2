<template>
  <div id="con4">
  	<admins></admins>
    <div class="bottom_con">
      <h2>热门城市</h2>
      <p>
        <a href="javascript:;">北京酒店</a><span>|</span>
        <a href="javascript:;">上海酒店</a><span>|</span>
        <a href="javascript:;">杭州酒店</a><span>|</span>
        <a href="javascript:;">成都酒店</a><span>|</span>
        <a href="javascript:;">深圳酒店</a><span>|</span>
        <a href="javascript:;">青岛酒店</a><span>|</span>
        <a href="javascript:;">苏州酒店</a><span>|</span>
        <a href="javascript:;">广州酒店</a><span>|</span>
        <a href="javascript:;">香港酒店</a><span>|</span>
        <a href="javascript:;">厦门酒店</a><span>|</span>
        <a href="javascript:;">天津酒店</a><span>|</span>
        <a href="javascript:;">西安酒店</a><span>|</span>
        <a href="javascript:;">武汉酒店</a><span>|</span>
        <a href="javascript:;">重庆酒店</a><span>|</span>
        <a href="javascript:;">沈阳酒店</a><span>|</span>
        <a href="javascript:;">长沙酒店</a><span>|</span>
        <a href="javascript:;">三亚酒店</a><span>|</span>
        <a href="javascript:;">珠海酒店</a><span>|</span>
        <a href="javascript:;">宁坡酒店</a><span>|</span>
        <a href="javascript:;">南京酒店</a><span>|</span>
        <a href="javascript:;">大连酒店</a><span>|</span>
        <a href="javascript:;">济南酒店</a><span>|</span>
        <a href="javascript:;">昆明酒店</a><span>|</span>
        <a href="javascript:;">合肥酒店</a><span>|</span>
      </p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con4',
  components:{
  	admins
  },
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
.bottom_con{
  width:1000px;
  height:100%;
  background:#f0f0f0;
  margin: 0 auto;
  overflow:hidden;
  h2{
    margin:10px 0 0 20px;
    color:#555
  }
  p{
    margin:0 0 0 20px;
    font-size:13px;
    a{
      text-decoration:none;
      color:#555;
    }
    a:hover{
      text-decoration:underline;
    }
    span{
      color:#ced6e3;
      margin:0 2px 0 4px;
    }
  }
}

</style>