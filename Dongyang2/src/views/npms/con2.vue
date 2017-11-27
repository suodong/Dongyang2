<template>
  <div id="con2">
    <admins></admins>
    <div class="bottom_con">
      <h2>机票查询</h2>
      <p>艺龙旅行网是中航协认证的机票服务提供商，提供国内和国际的特价机票、航班信息、机票查询和预订服务。</p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con2',
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
    span{
      color:#ced6e3;
      margin:0 2px 0 4px;
    }
  }
}

</style>