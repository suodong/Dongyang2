<template>
  <div id="stern">
    <div class="footer">
      <div class="footer_info">
        <dl>
          <dt>加盟合作</dt>
          <dd><a href="javascript:;">酒店加盟</a></dd>
          <dd><a href="javascript:;">开放平台</a></dd>
          <dd><a href="javascript:;">代理合作</a></dd>
          <dd><a href="javascript:;">广告服务</a></dd>
          <dd><a href="javascript:;">商家中心</a></dd>
        </dl>
        <dl>
          <dt>关于艺龙</dt>
          <dd><a href="javascript:;">酒店大全</a></dd>
          <dd><a href="javascript:;">国际酒店</a></dd>
          <dd><a href="javascript:;">校园招聘</a></dd>
          <dd><a href="javascript:;">联系我们</a></dd>
        </dl>
        <dl>
          <dt>艺龙APP下载</dt>
          <dd> 
            <i></i>
          </dd>
        </dl>
        <dl>
          <dt>艺龙官方微信</dt>
          <dd> 
            <i></i>
          </dd>
        </dl>
        <dl>
          <dt>艺龙官方小程序</dt>
          <dd> 
            <i></i>
          </dd>
        </dl>
      </div>
      <br>
      <div class="footer_copy">
        © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved.京ICP证010011号 <span></span>&nbsp;&nbsp;&nbsp;京公网安备11010502026059号经营执照
      </div>
      <br>
      <div class="footer_safe">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'stern',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>
*{
  padding:0;
  margin:0;
}
.footer{
  width:100%;
  height:100%;
  // background:#abcdef;
  .footer_info{
    width:1000px;
    height:148px;
    // background:yellow;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    dl{
      width:200px;
      height:140px;
      dt{
        border-left:3px solid #5D96C7;
        padding-left:10px;
      }
      dd{
        width:180px;
        height:13px;
        margin-top:10px;
         a{
          font-size:10px;
          text-decoration:none;
          color:#000;
          line-height:13px;
          padding-left:14px;
        }
        a:hover{
          color:red;
          margin-left:10px;
          transition:all 1s;
        }
      }
    }
    dl:nth-of-type(3){
      dd i{
        display:block;
        width:100px;
        height:100px;
        background:url(../assets/icon201706.png) -259px -56px no-repeat;
        margin-left:15px;
      }
    }
    dl:nth-of-type(4){
      dd i{
        display:block;
        width:100px;
        height:100px;
        background:url(../assets/icon201706.png) -362px -58px no-repeat;
        margin-left:15px;
      }
    }
    dl:nth-of-type(5){
      dd i{
        display:block;
        width:100px;
        height:100px;
        background:url(../assets/icon201706.png) -155px -56px no-repeat;
        margin-left:15px;
      }
    }
  }
  .footer_copy{
    width:100%;
    height:27px;
    text-align:center;
    // background:red;
    position:relative;
    span{
      display:block;
      width:20px;
      height:20px;
      background:url(../assets/anbei.png);
      position:absolute;
      top:0;
      left:900px;
    }
  }
  .footer_safe{
    display:flex;
    justify-content:center;
    a{
      margin-left:5px;
    }
    a:nth-of-type(1){
      display:block;
      width:80px;
      height:37px;
      background:url(../assets/icon201706.png) -329px -436px;
    }
    a:nth-of-type(2){
      display:block;
      width:60px;
      height:37px;
      background:url(../assets/icon201706.png) -331px -482px;
    }
    a:nth-of-type(3){
      display:block;
      width:92px;
      height:37px;
      background:url(../assets/icon201706.png) -473px -436px;
    }
    a:nth-of-type(4){
      display:block;
      width:92px;
      height:37px;
      background:url(../assets/icon201706.png) -565px -436px;
    }
    a:nth-of-type(5){
      display:block;
      width:92px;
      height:37px;
      background:url(../assets/icon201706.png) -657px -436px;
    }
    a:nth-of-type(6){
      display:block;
      width:83px;
      height:37px;
      background:url(../assets/icon201706.png) -393px -477px;
    }
    a:hover{
      margin-top:-6px;
      transition:all 1s;
    }
  }
}
</style>
