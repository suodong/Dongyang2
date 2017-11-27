<template>
  <div id="head">
   <div class="header">
      <div class="header_top">
        <a href="" class="logo"></a>
        <div class="right">
          <div class="branch_menu">
            <span><a href="javascript:;">积分商城</a></span>
            <b>|</b>
            <span><a href="javascript:;">礼品卡</a></span>
            <b>|</b>
            <span><a href="javascript:;">在线客服</a></span>
            <b>|</b>
            <span>
              <a href="javascript:;">English<i></i>
                <p><a href="javascript:;">简体版</a><a href="javascript:;">繁体版</a></p>
              </a>
            </span>
          </div>
          <div class="one">
            <a href="javascript:;">
              <i></i>
              <div class="zi">
                <p>小程序</p>
                <p>体验更轻松</p>
              </div>
            </a>
            <div class="one_1"></div>
            <a href="javascript:;">
              <i></i>
              <div class="zi">
                <p>手机版</p>
                <p>专享五折起</p>
              </div>
            </a>
            <div class="one_2"></div>
            <span>
              <i></i>
              <div class="zi">
                <p>7×24&nbsp;客服电话</p>
                <em>4009-333-333</em>
                <span></span>
              </div>
            </span>
            <div class="one_3">
              <div>国内：4009-333-333</div>
              <b></b>
              <div>
                香港：852-8131-8883 <p>852-8131-8983</p> 
              </div>
              <b></b>
              <div>海外：86-10-6432-9999</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <div class="nav_box">
        <div class="response_wrap">
          <ul class="link">
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">国际酒店</a></li>
            <li><a href="javascript:;">国际酒店<div></div></a></li>
            <li><a href="javascript:;">机票<div></div></a></li>
            <li><a href="javascript:;">火车票</a></li>
            <li><a href="javascript:;">汽车票<div></div></a></li>
            <li><a href="javascript:;">旅游指南</a></li>
          </ul>
          <div class="account">
            <div class="log">
              <span><a href="javascript:;">登录</a></span>
              <b>|</b>
              <span><a href="javascript:;">注册</a></span>
            </div>
            <div class="drop_log">
              <div class="new_bth"><a href="javascript:;">登录</a></div>
              <ul class="clx">
                <li>
                  <b class="tu"></b>
                  <a href="javascript:;">酒店订单</a>
                </li>
                <li>
                  <b class="tu3"></b>
                  <a href="javascript:;">机票订单</a>
                </li>
                <li>
                  <b class="tu4"></b>
                  <a href="javascript:;">火车票订单</a>
                </li>
                <li>
                  <b class="tu5"></b>
                  <a href="javascript:;">现金账户</a>
                </li>
                <li>
                  <b class="tu6"></b>
                  <a href="javascript:;">汽车票订单</a>
                </li>
                <li>
                  <b class="tu2"></b>
                  <a href="javascript:;">酒店收藏</a>
                </li>
                <li>
                  <b class="tu7"></b>
                  <a href="javascript:;">我的点评</a>
                </li>
                <li>
                  <b class="tu8"></b>
                  <a href="javascript:;">个人设置</a>
                </li>
                <li>
                  <b></b>
                  <a href="javascript:;"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
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
.header{
  width:100%;
  height:102px;
  // background:red;
  margin-top:10px;
  .header_top{
    width:1200px;
    height:62px;
    // border:1px solid aqua;
    margin:0 auto;
    .logo{
      display:block;
      width:130px;
      height:48px;
      background:url(../assets/icon201706.png)-658px 0px no-repeat;
      float:left;
    }
    .right{
      width:860px;
      height:42px;
      // background:yellow;
      float:right;
      .branch_menu{
        width:350px;
        // background:aqua;
        float:left;
        span:last-of-type{
          display:block;
          height:20px;
          margin-left:250px;
          margin-top:-18px;
          position: relative;
          i{
            display:inline-block;
            width:9px;
            height:8px;
            background:url(../assets/icon201706.png) -378px -770px;
            color:#999;
          }
          p{
            position: absolute;
            top:-10px;
            left:0px;
            width:70px;
            height:102px;
            display:none;
            a{
              width: 70px;
              height:30px;
              display:block;
              border-top:1px dashed gray;
              margin-left:0px;
              text-align:center;
              padding-top:5px;
            }
            a:nth-of-type(1){
              margin-top:30px;
            }
          }
        }
        span:last-of-type:hover p{
          border:1px solid gray;
          display:block;
          a{
            background:#fff;
          }
        }
        span a{
          text-decoration:none;
          color:#999;
          margin-left:10px;
          margin-right:10px;
          font-size:14px;
        }
        a:hover{
          color:red;
        }
        b{
          color:#C5C5C5;
        }
      }
      .one{
        width:470px;
        height:42px;
        // background:green;
        float:right;
        display:flex;
        justify-content:space-between;
        position:relative;
        .one_1{
          width:240px;
          height:120px;
          // background:red;
          position:absolute;
          top:55px;
          background:url(../assets/icon201706.png) 512px -174px;
          display:none;
        }
        a:nth-of-type(1){
          display:inline-block;
          width:130px;
          height:42px;
          // background:pink;
          color:#09BB07;
          i{
          display:inline-block;
          width:42px;
          height:42px;
          background:url(../assets/icon201706.png) -127px -763px; 
          }
          .zi{
            float:right;
          }
        }
        a:nth-of-type(1):hover+.one_1{
          display:block;
        }
        a:nth-of-type(2){
          display:inline-block;
          width:130px;
          height:42px;
          // background:pink;
          color:#207CD7;
          i{
          display:inline-block;
          width:40px;
          height:40px;
          background:url(../assets/com_icon01.gif) no-repeat; 
          }
          .zi{
            float:right;
          }
        }
        .one_2{
          width:220px;
          height:100px;
          // background:red;
          position:absolute;
          left:140px;
          top:55px;
          background:url(../assets/icon201706.png) 444px -55px;
          z-index:3;
          display:none;
        }
        a:nth-of-type(2):hover+.one_2{
          display:block;
        }
        span{
          display:inline-block;
          width:160px;
          height:42px;
          // background:pink;
          color:#09BB07;
          i{
          display:inline-block;
          width:42px;
          height:42px;
          background:url(../assets/icon201706.png) -42px -762px; 
          }
          .zi{
            float:right;
            p{
              color:#9999B2;
            }
            em{
              color:#2064D2;
            }
            span{
              display:inline-block;
              width:9px;
              height:8px;
              background:url(../assets/icon201706.png) -378px -772px;
            }
          }
        }
        span:hover+.one_3{
          display:block;
        }
        .one_3{
          width:180px;
          height:100px;
          background:#fff;
          position:absolute;
          left:310px;
          top:55px;
          z-index:3;
          border:1px solid gray;
          padding-left:10px;
          display:none;
          div{
            font-size:15px;
            p{
              padding-left:45px;
            }
          }
          b{
            display:block;
            border-top:1px dashed gray;
            padding-top:5px;
          }
        }
      }
    }
  }
  .nav_box{
    width:100%;
    height:40px;
    background:#2064C8;
    .response_wrap{
      width:1200px;
      height:40px;
      margin:0 auto;
      display:flex;
      justify-content:space-between;
      .link{
        width:483px;
        display:flex;
        justify-content:space-between;
        li{
          height:40px;
          list-style:none;
          line-height:40px;
          text-align:center;
          a{
            text-decoration:none;
            color:#fff;
          }
        }
        li:nth-of-type(1){
          width:53px;
          background:#003679;
        }
        li:nth-of-type(1):hover{
          background:#003679;
        }
        li:nth-of-type(2){
          width:81px;
        }
        li:nth-of-type(3){
          position:relative;
          width:81px;
          a div{
            display:inline-block;
            width:21px;
            height:20px;
            background:url(../assets/icon201706.png) no-repeat;
            background-position: -511px 0px;
            position:absolute;
            top:-10px;
            left:50px;
          }
        }
        li:nth-of-type(4){
          width:53px;
          position:relative;
          a div{
            display:inline-block;
            width:40px;
            height:41px;
            background:url(../assets/icon201706.png) no-repeat;
            background-position: -588px 0px;
            position:absolute;
            top:-10px;
            left:30px;
          }
        }
        li:nth-of-type(5){
          width:67px;
        }
        li:nth-of-type(6){
          width:67px;
          position:relative;
          a div{
            display:inline-block;
            width:39px;
            height:20px;
            background:url(../assets/icon201706.png) no-repeat;
            background-position: -540px 0px;
            position:absolute;
            top:-10px;
            left:30px;
          }
        }
        li:nth-of-type(7){
          width:81px;
        }
        li:hover{
          background:#1F52AE;
        }
      }
      .account{
        width:120px;
        height:40px;
        background:#003679;
        position:relative;
        .log{
          width:80px;
          margin:0 auto;
          span a{
            text-decoration:none;
            color:#fff;
            line-height:40px;
          }
          b{
            color:#fff;
          }
          span a:hover{
            color:yellow;
          }
        }
        .drop_log{
          width:210px;
          height:280px;
          background:#fff;
          position:absolute;
          top:40px;
          left:-90px;
          padding-top:10px;
          display:none;
          z-index:1;
          .new_bth{
            width:180px;
            height:34px;
            background:#FF8800;
            margin-top:110px;
            margin:0 auto;
            text-align:center;
            cursor:pointer;
            a{
              text-decoration:none;
              line-height:34px;
              color:#fff;
            }
          }
          .new_bth:hover{
            background:#FF5201;
          }
          .clx{
            width:200px;
            height:230px;
            margin:0 auto;
            // background:red;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            margin-top:15px;
            li{
              list-style:none;
              width:60px;
              height:70px;
              text-align:center;
              .tu{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -146px -684px no-repeat;
              }
              .tu2{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -147px -574px no-repeat;
              }
              .tu3{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -212px -684px no-repeat;
              }
              .tu4{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -146px -628px no-repeat;
              }
              .tu5{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -210px -627px no-repeat;
              }
              .tu6{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -272px -624px no-repeat;
              }
              .tu7{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -276px -572px no-repeat;
              }
              .tu8{
                display:block;
                width:60px;
                height:43px;
                background:url(../assets/icon201706.png) -276px -682px no-repeat;
              }
              a{
                text-decoration:none;
                font-size:12px;
                color:#999
              }
            }
            li:hover a{
              color:#2064C8;
            }
            li:hover .tu{
              background:url(../assets/icon201706.png) 14px -684px no-repeat;

            }
            li:hover .tu2{
              background:url(../assets/icon201706.png) 13px -574px no-repeat;
            }
            li:hover .tu3{
              background:url(../assets/icon201706.png) -43px -684px no-repeat;
            }
            li:hover .tu4{
              background:url(../assets/icon201706.png) 14px -628px no-repeat;
            }
            li:hover .tu5{
              background:url(../assets/icon201706.png) -42px -627px no-repeat;
            }
            li:hover .tu6{
              background:url(../assets/icon201706.png) -94px -624px no-repeat;
            }
            li:hover .tu7{
              background:url(../assets/icon201706.png) -95px -572px no-repeat;
            }
            li:hover .tu8{
              background:url(../assets/icon201706.png) -95px -682px no-repeat;
            }
          }
        }
      }
      .account:hover .drop_log{
        display:block;
      }
    }
  }
}
</style>
