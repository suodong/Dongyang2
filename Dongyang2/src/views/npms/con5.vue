<template>
  <div id="con5">
  	<admins></admins>
    <div class="bottom_con">
      <h2>合作伙伴</h2>
      <p>
        <a href="javascript:;">住哪网</a><span>|</span>
        <a href="javascript:;">TripAdvisor</a><span>|</span>
        <a href="javascript:;">吉祥航空</a><span>|</span>
        <a href="javascript:;">北京房产</a><span>|</span>
        <a href="javascript:;">装修家居</a><span>|</span>
        <a href="javascript:;">住哲酒店管理系统</a>
      </p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con5',
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