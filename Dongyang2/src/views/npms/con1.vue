<template>
  <div id="con1">
  	<admins></admins>
    <div class="bottom_con">
      <h2>酒店预订</h2>
      <p>艺龙旅行网提供全球50万家酒店的预订服务和酒店团购服务。通过真实的酒店照片、酒店评价，无论您是和家人一起旅游度假还是商务出行，我们都能为您提供称心如意的酒店。</p>
      <h2>艺龙酒店地标大全</h2>
      <p>为了方便用户快速定位酒店而存在，我们涵盖了北京、西安、上海、成都、广州、武汉、南京、东莞、长沙、深圳、重庆等城市的常见地标类型。</p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con1',
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
    span{
      color:#ced6e3;
      margin:0 2px 0 4px;
    }
  }
}

</style>
