<template>
  <div id="con6">
  	<admins></admins>
    <div class="bottom_con">
      <h2>常见酒店</h2>
      <p>
        <a href="javascript:;">如家酒店官网</a><span>|</span>
        <a href="javascript:;">布丁酒店</a><span>|</span>
        <a href="javascript:;">酒店预订</a><span>|</span>
        <a href="javascript:;">汉庭酒店官网</a><span>|</span>
        <a href="javascript:;">七天连锁酒店官网</a><span>|</span>
        <a href="javascript:;">希尔顿酒店</a><span>|</span>
        <a href="javascript:;">书香府邸酒店</a><span>|</span>
        <a href="javascript:;">情侣酒店</a><span>|</span>
        <a href="javascript:;">桔子酒店</a><span>|</span>
        <a href="javascript:;">格林豪泰连锁酒店官网</a><span>|</span>
        <a href="javascript:;">香格里拉酒店</a><span>|</span>
        <a href="javascript:;">维也纳酒店</a><span>|</span>
        <a href="javascript:;">喜来登酒店</a><span>|</span>
        <a href="javascript:;">酒店式公寓</a><span>|</span>
        <a href="javascript:;">广州长隆酒店</a><span>|</span>
        <a href="javascript:;">四季酒店</a><span>|</span>
        <a href="javascript:;">万豪酒店</a><span>|</span>
        <a href="javascript:;">皇冠假日酒店</a><span>|</span>
        <a href="javascript:;">书香世家酒店</a><span>|</span>
        <a href="javascript:;">凯宾斯基酒店</a><span>|</span>
        <a href="javascript:;">锦江之星连锁酒店官网</a><span>|</span>
        <a href="javascript:;">洲际酒店</a><span>|</span>
        <a href="javascript:;">全季酒店</a><span>|</span>
        <a href="javascript:;">广州大学城附近酒店</a><span>|</span>
        <a href="javascript:;">威斯丁酒店</a><span>|</span>
        <a href="javascript:;">杭州西湖附近的酒店</a><span>|</span>
        <a href="javascript:;">w酒店</a><span>|</span>
        <a href="javascript:;">速8酒店官网</a><span>|</span>
        <a href="javascript:;">星程酒店</a><span>|</span>
        <a href="javascript:;">丽思卡尔顿酒店</a><span>|</span>
        <a href="javascript:;">华天酒店</a><span>|</span>
        <a href="javascript:;">半岛酒店</a><span>|</span>
        <a href="javascript:;">国宾酒店</a><span>|</span>
        <a href="javascript:;">凯悦酒店</a><span>|</span>
        <a href="javascript:;">宜必思酒店</a><span>|</span>
        <a href="javascript:;">千岛湖洲际度假酒店</a><span>|</span>
        <a href="javascript:;">盘古七星酒店</a><span>|</span>
        <a href="javascript:;">北戴河刘庄家庭旅店</a><span>|</span>
        <a href="javascript:;">公寓</a><span>|</span>
        <a href="javascript:;">家庭旅馆</a><span>|</span>
        <a href="javascript:;">青年旅社</a><span>|</span>
        <a href="javascript:;">情侣酒店</a><span>|</span>
        <a href="javascript:;">农家乐</a><span>|</span>
        <a href="javascript:;">短租公寓</a><span>|</span>
        <a href="javascript:;">主题酒店</a><span>|</span>
      </p>
    </div>
  </div>
</template>

<script>
import admins from '../admin'
export default {
  name: 'con6',
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