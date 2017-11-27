<template>
  <div id="con3">
  	<admins></admins>
    <div class="bottom_con">
      <h2>酒店团购</h2>
      <p> 
        <a href="javascript:;">北京酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">上海酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">三亚酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">广州酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">杭州酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">厦门酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">苏州酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">深圳酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">西安酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">成都酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">丽江酒店团购</a><br> 
        <a href="javascript:;">武汉酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">宁波酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">重庆酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">大连酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">南京酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">青岛酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">桂林酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">天津酒店团购</a><span class="pl5">|</span> 
        <a href="javascript:;">沈阳酒店团购</a><span class="pl5">|</span> 
      </p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con3',
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
    font-size:12px;
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