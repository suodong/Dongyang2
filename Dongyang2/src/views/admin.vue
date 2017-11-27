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
              <span><a @click="toenter" href="javascript:;">登录</a></span>
              <b>|</b>
              <span><a @click="toregister" href="javascript:;">注册</a></span>
            </div>
            <div class="drop_log">
              <div @click="toenter" class="new_bth"><a href="javascript:;">登录</a></div>
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
    <!-- 中间的 -->
    <div class="banner_n">
      <div class="banner_wrap">
        <swipers></swipers>
      </div>
      <div class="all_search">
        <ul class="left">
          <li><i class="ei_icon1"></i>酒店</li>
          <div></div>
          <li><i class="ei_icon2"></i>机票</li>
          <div></div>
          <li><i class="ei_icon3"></i>火车票</li>
          <div></div>
          <li><i class="ei_icon4"></i>手机版</li>
        </ul>
        <div class="cate_channel">
          <div class="wrap_ts">
            <div class="title_tab">
              <span class="tab_span span1">国内酒店
                <i></i>
              </span>
              <span class="span1">国际酒店
                <i></i>
              </span>
            </div>
            <div class="keywords ds1">
              <dl class="clearfix">
                <dt>目的地</dt>
                <dd class="te"><input type="text" value="黄山市"></dd>
              </dl>
              <dl class="clearfix fix">
                <dt>入住</dt>
                <dd><input type="text" value="2017-11-22"><i></i></dd>
                <dt>退房</dt>
                <dd><input type="text" value="2017-11-23"><i></i></dd> 
              </dl>
              <dl class="clearfix">
                <dt>关键词</dt>
                <dd class="te"><input type="text" placeholder="如位置\酒店名\品牌"></dd>
              </dl>
              <div class="submit_wrap">
                <span><i></i>搜索</span>
              </div>
            </div>
            <div class="keywords ds1">
              <dl class="clearfix">
                <dt>目的地</dt>
                <dd class="te"><input type="text" value="首尔"></dd>
              </dl>
              <dl class="clearfix fix">
                <dt>入住</dt>
                <dd><input type="text" value="2017-11-26"><i></i></dd>
                <dt>退房</dt>
                <dd><input type="text" value="2017-11-27"><i></i></dd> 
              </dl>
              <dl class="clearfix">
                <dt>关键词</dt>
                <dd class="te"><input type="text" placeholder="商圈\位置\酒店名"></dd>
              </dl>
              <div class="submit_wrap">
                <span><i></i>搜索</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cate_channel">
          <div class="wrap_ts">
            <div class="title_tab">
              <span class="tab_span span2">国内机票
                <i></i>
              </span>
              <span class="span2">国际机票
                <i></i>
              </span>
            </div>
            <div class="keywords ds2">
              <dl class="clearfix">
                <dt>目的地</dt>
                <dd class="te"><input type="text" value="黄山市"></dd>
              </dl>
              <dl class="clearfix fix">
                <dt>入住</dt>
                <dd><input type="text" value="2017-11-22"><i></i></dd>
                <dt>退房</dt>
                <dd><input type="text" value="2017-11-23"><i></i></dd> 
              </dl>
              <dl class="clearfix">
                <dt>关键词</dt>
                <dd class="te"><input type="text" placeholder="如位置\酒店名\品牌"></dd>
              </dl>
              <div class="submit_wrap">
                <span><i></i>搜索</span>
              </div>
            </div>
            <div class="keywords ds2">
              <dl class="clearfix">
                <dt>目的地</dt>
                <dd class="te"><input type="text" value="黄山市"></dd>
              </dl>
              <dl class="clearfix fix">
                <dt>入住</dt>
                <dd><input type="text" value="2017-11-22"><i></i></dd>
                <dt>退房</dt>
                <dd><input type="text" value="2017-11-23"><i></i></dd> 
              </dl>
              <dl class="clearfix">
                <dt>关键词</dt>
                <dd class="te"><input type="text" placeholder="如位置\酒店名\品牌"></dd>
              </dl>
              <div class="submit_wrap">
                <span><i></i>搜索</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cate_channel">
          <div class="wrap_ts">
            <div class="keywords ds3">
              <dl class="clearfix fix">
                <dt class="chu">往返城市</dt>
                <dd><input type="text" value="北京"></dd>
                <i class="is"></i>
                <dd><input type="text" value="上海"></dd> 
              </dl>
              <dl class="clearfix">
                <dt class="chu">出发日期</dt>
                <dd class="te in"><input type="text" value="2017-11-24"></dd>
              </dl>
              <div class="submit_wrap">
                <span><i></i>搜索</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cate_channel">
          <div class="wrap_ts ap">
          </div>
        </div>
      </div>
    </div>
    <br/>

    <div class="no_record">
      <div class="left">
        <i></i>
        <a href="javascript:;">登录</a>
        <span>展示你的个性化内容</span>
      </div>
    </div>
    <br/>

    <div class="fold">
      <div class="fold_wrap">
        <ul>
          <li>
            <p>
              <span>园林酒店</span>
            </p>
            <div class="mask_a"></div>
          </li>
          <li>
            <p>
              <span>情侣酒店</span>
            </p>
            <div class="mask_b"></div>
          </li>
          <li>
            <p>
              <span>设计师酒店</span>
            </p>
            <div class="mask_c"></div>
          </li>
          <li>
            <p>
              <span>青年旅馆</span>
            </p>
            <div class="mask_d"></div>
          </li>
          <li>
            <p>
              <span>克色客栈</span>
            </p>
            <div class="mask_e"></div>
          </li>
          <li>
            <p>
              <span>海岛酒店</span>
            </p>
            <div class="mask_f"></div>
          </li>
          <li>
            <p>
              <span>海外温泉</span>
            </p>
            <div class="mask_g"></div>
          </li>
        </ul>
      </div>
    </div>
    
    <br/>
    <div class="termini">
      <div class="termini_wrap">
        <div class="title">
          <span>目的地指数</span>
          <span>覆盖全球75万家酒店，你想住的，我们都有</span>
        </div>
        <div class="domestic">
          <div class="clearfix">
            <b>
              <i></i>
              <span>国内</span>
            </b>
            <span class="no ss w11">登高踏青</span>
            <a class="ss w11">小憩温泉</a>
            <a class="ss w11">天然氧吧</a>
            <a class="ss w11">草原撒欢</a>
            <a class="ss w11">小镇时光</a>
            <a class="ss w11">美食之城</a>
            <span class="right">更多>></span>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div @click="tohuangshan" class="pic_add">
                  <img src="../assets/dgtq-hs.jpg" alt="">
                  <div>黄山</div>
                </div>
                <div class="scale_tour">
                  <span>春意撩人</span>
                  <span>登高踏青赏春色</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/dgtq-ems.jpg" alt="">
                  <div>峨眉山</div>
                </div>
                <div class="scale_tour">
                  <span>阳春三月</span>
                  <span>闻着茶香去峨眉</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/dgtq-wts.jpg" alt="">
                  <div>五台山</div>
                </div>
                <div class="scale_tour">
                  <span>迎春</span>
                  <span>祈福</span>
                  <span>登五台</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/dgtq-ls.jpg" alt="">
                  <div>庐山</div>
                </div>
                <div class="scale_tour">
                  <span>亲近自然</span>
                  <span>春游庐山</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-tianmuhu.jpg" alt="">
                  <div>江苏天目湖</div>
                </div>
                <div class="scale_tour">
                  <span>古树错落</span>
                  <span>帝王温泉</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-tianmuweihai.jpg" alt="">
                  <div>威海天沐威海温泉</div>
                </div>
                <div class="scale_tour">
                  <span>森林温泉</span>
                  <span>草本养生</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-zhongshan.jpg" alt="">
                  <div>广东中山温泉</div>
                </div>
                <div class="scale_tour">
                  <span>毗邻港澳</span>
                  <span>商务养生</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-anbo.jpg" alt="">
                  <div>辽宁大连安波温泉</div>
                </div>
                <div class="scale_tour">
                  <span>延年益寿</span>
                  <span>名誉中外</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-lasa.jpg" alt="">
                  <div>拉萨</div>
                </div>
                <div class="scale_tour">
                  <span>高原古城</span>
                  <span>圣山天湖</span>
                  <span>沁人心脾</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-dali.jpg" alt="">
                  <div>大理</div>
                </div>
                <div class="scale_tour">
                  <span>文献名邦</span>
                  <span>彩云之南</span>
                  <span>空谷幽兰</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-zhoushan.jpg" alt="">
                  <div>舟山</div>
                </div>
                <div class="scale_tour">
                  <span>东海翡翠</span>
                  <span>舟山群岛</span>
                  <span>气候宜人</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/hbtl-xiamen.jpg" alt="">
                  <div>厦门</div>
                </div>
                <div class="scale_tour">
                  <span>天风海涛</span>
                  <span>鼓浪岛屿</span>
                  <span>鸟语芬芳</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/cysh-xlgl.jpg" alt="">
                  <div>锡林郭勒</div>
                </div>
                <div class="scale_tour">
                  <span>草原</span>
                  <span>牧民</span>
                  <span>小马驹</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/cysh-bs.jpg" alt="">
                  <div>坝上</div>
                </div>
                <div class="scale_tour">
                  <span>帝都最近的草原</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/cysh-reg.jpg" alt="">
                  <div>若尔盖</div>
                </div>
                <div class="scale_tour">
                  <span>高原上的绿洲</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/cysh-qls.jpg" alt="">
                  <div>祁连山</div>
                </div>
                <div class="scale_tour">
                  <span>风景如画</span>
                  <span>醉美祁连山</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t3_xt.jpg" alt="">
                  <div>西塘</div>
                </div>
                <div class="scale_tour">
                  <span>烟雨长廊</span>
                  <span>景色好似宣纸画</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t3_hs.jpg" alt="">
                  <div>和顺</div>
                </div>
                <div class="scale_tour">
                  <span>古风犹存</span>
                  <span>如诗如画</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t3_wz.jpg" alt="">
                  <div>乌镇</div>
                </div>
                <div class="scale_tour">
                  <span>推窗见水</span>
                  <span>小桥人家</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t3_py.jpg" alt="">
                  <div>平遥</div>
                </div>
                <div class="scale_tour">
                  <span>晋商遗风</span>
                  <span>古城探幽</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab_themes">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t4_xg.jpg" alt="">
                  <div>香港</div>
                </div>
                <div class="scale_tour">
                  <span>只有想不到，没有找不到</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t4_cd.jpg" alt="">
                  <div>城都</div>
                </div>
                <div class="scale_tour">
                  <span>不只有火锅，吃是头等事</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t4_yz.jpg" alt="">
                  <div>扬州</div>
                </div>
                <div class="scale_tour">
                  <span>吴侬软语 淮味养人</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_t4_cs.jpg" alt="">
                  <div>长沙</div>
                </div>
                <div class="scale_tour">
                  <span>美食怕不辣，湘味最十足</span>
                </div>
              </li>
            </ul>
          </div>
          <br/>
         <div class="clearfix">
            <b>
              <i class="shu"></i>
              <span>海外</span>
            </b>
            <span class="no ss w15">文艺清新</span>
            <a class="ss w15">面朝大海</a>
            <a class="ss w15">别样建筑</a>
            <a class="ss w15">浪漫主义</a>
            <a class="ss w15">魅力都市</a>
            <span class="right">更多>></span>
          </div>
          <div class="tabs">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it1_ld.jpg" alt="">
                  <div>伦敦</div>
                </div>
                <div class="scale_tour">
                  <span>风情英伦，帝国余韵</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it1_qm.jpg" alt="">
                  <div>清迈</div>
                </div>
                <div class="scale_tour">
                  <span>泰北玫瑰，满行古城</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it1_jzd.jpg" alt="">
                  <div>济州岛</div>
                </div>
                <div class="scale_tour">
                  <span>最传统的浪漫，最神秘的自然</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it1_qm.jpg" alt="">
                  <div>罗马</div>
                </div>
                <div class="scale_tour">
                  <span>永恒之城，魅力无限</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tabs">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it2_pjd.jpg" alt="">
                  <div>普吉岛</div>
                </div>
                <div class="scale_tour">
                  <span>海岛胜地，天人合一</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it2_medf.jpg" alt="">
                  <div>马尔代夫</div>
                </div>
                <div class="scale_tour">
                  <span>一岛一世界</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it2_sb.jpg" alt="">
                  <div>沙巴</div>
                </div>
                <div class="scale_tour">
                  <span>纯净之极的原生态梦幻岛屿</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it2_xwy.jpg" alt="">
                  <div>夏威夷</div>
                </div>
                <div class="scale_tour">
                  <span>凝聚着东方妩媚与西方性感</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tabs">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it3_bsln.jpg" alt="">
                  <div>巴塞罗那</div>
                </div>
                <div class="scale_tour">
                  <span>天使之城，艺术之都</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it3_ml.jpg" alt="">
                  <div>米兰</div>
                </div>
                <div class="scale_tour">
                  <span>在时尚与古典间穿梭</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it3_msk.jpg" alt="">
                  <div>莫斯科</div>
                </div>
                <div class="scale_tour">
                  <span>畅饮伏特加的英雄之城</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it3_ystbe.jpg" alt="">
                  <div>伊斯坦布尔</div>
                </div>
                <div class="scale_tour">
                  <span>古老与现代辉映，东方与西方交融</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tabs">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it4_medf.jpg" alt="">
                  <div>马尔代夫</div>
                </div>
                <div class="scale_tour">
                  <span>一岛一世界</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it4_stln.jpg" alt="">
                  <div>圣托里尼</div>
                </div>
                <div class="scale_tour">
                  <span>蓝白色的人间伊甸园</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it4_bl.jpg" alt="">
                  <div>巴黎</div>
                </div>
                <div class="scale_tour">
                  <span>浪漫如斯，热情如是</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it4_plws.jpg" alt="">
                  <div>普罗旺斯</div>
                </div>
                <div class="scale_tour">
                  <span>薰衣草之乡</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tabs">
            <ul class="tab_theme">
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it5_xjp.jpg" alt="">
                  <div>新加坡</div>
                </div>
                <div class="scale_tour">
                  <span>乐享狮城，多彩四季</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it5_amstd.jpg" alt="">
                  <div>阿姆斯特丹</div>
                </div>
                <div class="scale_tour">
                  <span>郁金香绽放的水都</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it5_lsj.jpg" alt="">
                  <div>洛杉矶</div>
                </div>
                <div class="scale_tour">
                  <span>好莱坞的风情</span>
                </div>
              </li>
              <li>
                <div class="pic_add">
                  <img src="../assets/termini_it5_jlp.jpg" alt="">
                  <div>吉隆坡</div>
                </div>
                <div class="scale_tour">
                  <span>双子塔上，气度非凡</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
    <br/>
    <div class="discount">
      <div class="discount_wrap">
        <div class="title">
          <h2>超值特价票</h2>
        </div>
        <div class="discount_tricket">
          <div class="clearfix">
            <b>
              <i></i>
              <span>机票</span>
            </b>
            <span class="no">北京出发</span>
            <a class="ss">上海出发</a>
            <a class="ss">广州出发</a>
            <a class="ss">杭州出发</a>
            <a class="ss">深圳出发</a>
            <a class="ss">成都出发</a>
            <span class="right">更多>></span>
          </div>
          <div class="tab_rebate">
            <ul>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">大连</b>  
                  </div>
                  <div class="data_tp">
                    <b>12月09日</b>
                    <span class="s">1.6折</span>
                    <b class="s">￥140</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">烟台</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月25号</b>
                    <span class="s">2折</span>
                    <b class="s">￥140</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">鄂尔多斯</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月21日</b>
                    <span class="s">2折</span>
                    <b class="s">￥160</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">银川</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月20日</b>
                    <span class="s">1.5折</span>
                    <b class="s">￥180</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">太原</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月18日</b>
                    <span class="s">1.8折</span>
                    <b class="s">￥200</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i></i>
                    <b class="b">青岛</b>  
                  </div>
                  <div class="data_tp">
                    <b>12月29日</b>
                    <span class="s">1.5折</span>
                    <b class="s">￥210</b>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <br/>
          <div class="clearfix">
            <b>
              <i class="huo"></i>
              <span>火车票</span>
            </b>
            <span class="no">北京出发</span>
            <a class="ss">上海出发</a>
            <a class="ss">广州出发</a>
            <a class="ss">深圳出发</a>
            <a class="ss">天津出发</a>
            <a class="ss">厦门出发</a>
            <span class="right">更多>></span>
          </div>
          <div class="tab_rebate">
            <ul>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i class="tou"></i>
                    <b class="b">上海</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月19日</b>
                    <!-- <span class="s">1.6折</span> -->
                    <b class="s">￥156.5</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京西</b>
                    <i class="tou"></i>
                    <b class="b">太原</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月19号</b>
                    <!-- <span class="s">2折</span> -->
                    <b class="s">￥72.0</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京西</b>
                    <i class="tou"></i>
                    <b class="b">西安</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月21日</b>
                    <!-- <span class="s">0折</span> -->
                    <b class="s">￥148.5</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京西</b>
                    <i class="tou"></i>
                    <b class="b">合肥</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月20日</b>
                    <!-- <span class="s">1.5折</span> -->
                    <b class="s">￥138.5</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京</b>
                    <i class="tou"></i>
                    <b class="b">杭州</b>  
                  </div>
                  <div class="data_tp">
                    <b>11月18日</b>
                    <!-- <span class="s">1.8折</span> -->
                    <b class="s">￥189.5</b>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <div class="data_tp">
                    <b class="b">北京西</b>
                    <i class="tou"></i>
                    <b class="b">郑州</b>  
                  </div>
                  <div class="data_tp">
                    <b>12月29日</b>
                    <!-- <span class="s">1.5折</span> -->
                    <b class="s">￥93.0</b>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="raiders">
      <div class="raiders_wrap">
        <div class="title">
          <h2>旅游指南</h2>
        </div>
        <div class="pic_rad">
          <div class="pic_shaw">
            <ul>
              <li>
                小朋友超爱的三亚酒店
                <img class="block" src="../assets/17072891.jpg" alt="">
              </li>
              <li>
                7条航线带你&nbsp;"邮"&nbsp;世界
                <img src="../assets/17072892.jpg" alt="">
              </li>
              <li>
                盘点国内52处世界遗产
                <img src="../assets/17072893.jpg" alt="">
              </li>
              <li>
                青岛七星酒店住一晚
                <img src="../assets/17051704.jpg" alt="">
              </li>
            </ul>
            <!-- <ol>
              <li>
                <a href="javascript:;">
                  <img src="../assets/17072891.jpg" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../assets/17072892.jpg" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../assets/17072893.jpg" alt="">
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="../assets/17051704.jpg" alt="">
                </a>
              </li>
            </ol> -->
          </div>
          <div class="tab_pic_show">
            <ul>
              <li>
                <img src="../assets/17080254.jpg" alt="">
                <div>
                  <a href="javascript:;">神秘海岛，赵薇在象岛开的中餐厅</a>
                </div>
              </li>
              <li>
                <img src="../assets/17030505.jpg" alt="">
                <div>
                  <a href="javascript:;">毛里求斯&nbsp;还是山盟</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div class="service_us">
      <div class="service_wrap">
        <div class="service_inf">
          <ul>
            <li>
              <i class="icon1 wr"></i>
              <span>全球75万家酒店</span>
            </li>
            <li>
              <i class="icon2 wr"></i>
              <span>订酒店返现金高达20%</span>
            </li>
            <li>
              <i class="icon3 wr"></i>
              <span>国际酒店8折起</span>
            </li>
            <li>
              <i class="icon4 wr"></i>
              <span>7×24小时服务</span>
            </li>
          </ul>
        </div>
        <div class="booking_email">
          <div class="service_agreemet">
            <div></div>
          </div>
          <div class="input_email">
            <span>亲，留下您的邮箱，会有惊喜呦~</span>
            <input type="text" value="请输入您的E-mail">
            <input type="button" value="立即订阅">
          </div>
          <div class="ei_icon">
            <a href="javascript:;">艺龙服务协议</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 尾部 -->
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
        © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved.京ICP证010011号 <span></span>&nbsp;&nbsp;&nbsp;&nbsp;京公网安备11010502026059号经营执照
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
    <div class="bottom_nav">
      <span class="con1">酒店预订</span>
      <span class="con1">机票查询</span>
      <span class="con1">酒店团购</span>
      <span class="con1">热门城市</span>
      <span class="con1">合作伙伴</span>
      <span class="con1">常见酒店</span>
    </div>
    <div class="bottom_con">
      <h2>酒店预订</h2>
      <p>艺龙旅行网提供全球50万家酒店的预订服务和酒店团购服务。通过真实的酒店照片、酒店评价，无论您是和家人一起旅游度假还是商务出行，我们都能为您提供称心如意的酒店。</p>
      <h2>艺龙酒店地标大全</h2>
      <p>为了方便用户快速定位酒店而存在，我们涵盖了北京、西安、上海、成都、广州、武汉、南京、东莞、长沙、深圳、重庆等城市的常见地标类型。</p>
    </div>
    <div class="bottom_con">
      <h2>机票查询</h2>
      <p>艺龙旅行网是中航协认证的机票服务提供商，提供国内和国际的特价机票、航班信息、机票查询和预订服务。</p>
    </div>
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
import swipers from '../components/swipers'
export default {
  name: 'admin',
  components:{
    swipers
  },
  data () {
    return {
      
    }
  },
  methods:{
    toregister(){
      this.$router.push({
        name:"register"
      })
    },
    toenter(){
      this.$router.push({
        name: 'enter'
      })
    },
    tohuangshan(){
      this.$router.push({
        name:'huangshan'
      })
    }
  },
  watch:{

  },
  mounted(){
    var con=document.querySelectorAll(".bottom_nav span");
    var bottom=document.querySelectorAll(".bottom_con");
    for(let i=0;i<con.length;i++){
      con[i].onclick=function(){
        for(let j=0;j<con.length;j++){
         con[j].style.background="#7c8fa2";
         bottom[j].style.display="none"
        }
         bottom[i].style.display='block';
         con[i].style.background="#c0d2e4";
      }
    }

    
    var a=document.querySelectorAll(".w11");
    var tab=document.querySelectorAll(".tab_themes");  
    tab[0].style.display="block";
    for(let i=0;i<a.length;i++){
      a[i].onclick=function(){
        for(let j=0;j<tab.length;j++){
         tab[j].style.display="none"
         a[j].style.color="#999"
         a[j].style.background="#fff"
        }
         a[i].style.background="#f55"
         tab[i].style.display='block';
         a[i].style.color="#fff"
      }
    }


    var tle=document.querySelectorAll(".title_tab .span1");
    var key=document.querySelectorAll(".ds1");
    key[0].style.display="block";
    tle[0].style.borderBottom="2px solid #37D";
    for(let i=0;i<tle.length;i++){
      tle[i].onclick=function(){
        for(let j=0;j<key.length;j++){
         key[j].style.display="none"
         tle[j].style.borderBottom="none"
        }
        key[i].style.display='block';
        tle[i].style.borderBottom="2px solid #37D"
      }
    }
    var tle2=document.querySelectorAll(".title_tab .span2");
    var key2=document.querySelectorAll(".ds2");
    key2[0].style.display="block";
    tle2[0].style.borderBottom="2px solid #37D";
    for(let i=0;i<tle2.length;i++){
      tle2[i].onclick=function(){
        for(let j=0;j<key2.length;j++){
         key2[j].style.display="none"
         tle2[j].style.borderBottom="none"
        }
        key2[i].style.display='block';
        tle2[i].style.borderBottom="2px solid #37D"
      }
    }
  
    var key3=document.querySelectorAll(".ds3");
    key3[0].style.display="block";
   


    var lis=document.querySelectorAll(".left li");
    var channel=document.querySelectorAll(".cate_channel");
    channel[0].style.display="block";
    lis[0].style.background="#fff";
    lis[0].style.color="#37d";
    for(let i=0;i<lis.length;i++){
      lis[i].onclick=function(){
        for(let j=0;j<channel.length;j++){
         channel[j].style.display="none"
         lis[j].style.background="";
         lis[j].style.color="";
        }
        channel[i].style.display='block';
        lis[i].style.background="#fff";
        lis[i].style.color="#37d";
      }
    }

    
    var w15=document.querySelectorAll(".w15");
    var tabs=document.querySelectorAll(".tabs");   
    tabs[0].style.display="block";
    for(let i=0;i<w15.length;i++){
      w15[i].onclick=function(){
        for(let j=0;j<tabs.length;j++){
         tabs[j].style.display="none"
         w15[j].style.color="#999"
         w15[j].style.background="#fff"
        }
        tabs[i].style.display='block';
        w15[i].style.background="#f55"
        w15[i].style.color="#fff"
      }
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope>

#head{
  background:#fff;
}

.header{
  width:100%;
  height:102px;
  // background:#fff;
  padding:10px 0 0 0 ;
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





.banner_n{
  width:100%;
  height:380px;
  background:yellow;
  position:relative;
  .banner_wrap{
    width:100%;
    height:380px;
    background:aqua;
    overflow:hidden;
  }
  .all_search{
    width:600px;
    height:300px;
    background:#fff;
    position:absolute;
    top:35px;
    left:70px;
    display:flex;
    justify-content: space-between;
    .left{
      width:100px;
      height:300px;
      list-style:none;
      background:#f3f3f3;
      div{
        width:100px;
        height:1px;
        background:#e1e1e1;
      }
      li{
        width:100px;
        height:59px;
        line-height:59px;
        cursor:pointer;
        color:#555;
        i{
          float:left;
          margin:22px 3px 0 10px;
        }
        .ei_icon1{
          display:block;
          width:15px;
          height:15px;
          background:url(../assets/icon_index.png) -584px -345px no-repeat;
        }
        .ei_icon2{
          display:block;
          width:15px;
          height:15px;
          background:url(../assets/icon_index.png) -582px -367px no-repeat;
        }
        .ei_icon3{
          display:block;
          width:16px;
          height:16px;
          background:url(../assets/icon_index.png) -584px -386px no-repeat;
        }
        .ei_icon4{
          display:block;
          width:16px;
          height:19px;
          background:url(../assets/icon_index.png) -581px -317px no-repeat;
        }
      }
    }
    .cate_channel{
      width:500px;
      height:300px;
      background:#fff;
      display:none;
      .wrap_ts{
        width:440px;
        height:257px;
        // background:aqua;
        margin:0 auto;
        overflow:hidden;
        .title_tab{
          height:32px;
          margin:10px 0 0 0;
          border-bottom:2px solid #aaa;
          .tab_span{
            // border-bottom:2px solid #37D;
            i{
              display:block;
              width:7px;
              height:4px;
              // background:url(../assets/icon_index.png) -475px 0 no-repeat;
              position:absolute;
              top:27px;
              left:35px;
            }
          }
          span{
            padding:0 10px 10px 10px;
            float:left;
            position:relative;
            cursor:pointer;
          }
        }
        .keywords{
          width:440px;
          height:140px;
          // background:yellow;
          margin:20px 0 0 0;
          display:none;
          .clearfix{
            width:440px;
            height:32px;
            margin:20px 0 0 0;
            .is{
              display:block;
              width:20px;
              height:12px;
              background:url(../assets/icon201706.png) -267px -762px no-repeat;
              float:left;
              margin:9px 6px 0 6px;
            }
            dt{
              display:block;
              width:50px;
              height:30px;
              line-height:30px;
              text-align:right;
              float:left;
              font-size:15px;
              margin:0 5px 0 0;
            }
            .chu{
              width:60px;
            }
            dd{
              float:left;
              input{
                width:160px;
                height:30px;
              }
            }
            .te{
              input{
                width:380px;
              }
            }
            .in{
              input{
                width:150px;
              }
            }
          }
          .fix{
            dd{
              width:160px;
              height:30px;
              border:1px solid #ccc;
              input{
                width:130px;
                outline:none;
                border:0;
              }
              i{
                display:block;
                width:16px;
                height:16px;
                background:url(../assets/icon201706.png) -480px -763px no-repeat;
                float:right;
                margin:6px 6px 0 0;
              }
            }
          }
          .submit_wrap{
            width:160px;
            height:32px;
            background:#f55;
            margin:20px 0 0 140px;
            cursor:pointer;
            span{
              color:#fff;
              text-align:center;
              line-height:32px;
              i{
                display:block;
                width:18px;
                height:18px;
                background:url(../assets/icon201706.png) -432px -763px no-repeat;
                float:left;
                margin:6px 3px 0 50px;
              }
            }
          }
        }
      }
      .ap{
        width:455px;
        height:260px;
        background:url(../assets/mobile_bg.png)
      }
    }
  }
}



.no_record{
  width:1200px;
  height:32px;
  // background:pink;
  margin:0 auto;
  .left{
    width:200px;
    height:32px;
    border:1px solid gray;
    border-radius:20px;
    padding:0 0 0 15px;
    line-height:32px;
    font-size:13px;
    i{
      display:block;
      width:14px;
      height:14px;
      background:url(../assets/icon_index.png) -583px -16px no-repeat;
      float:left;
      margin:10px 0 0 10px;
    }
    a{
      text-decoration:none;
      padding:0 0 0 5px;
    }
    a:hover{
      color:red;
    }
  }
}
.fold{
  width:100%;
  height:260px;
  // background:pink;
  .fold_wrap{
    width:1200px;
    height:260px;
    // background:yellow;
    margin:0 auto;
    ul{
        width:1200px;
        display:flex;
        justify-content:space-between;
        list-style:none;
      li{
        width:172px;
        overflow:hidden;
        height:260px;
        // background:blue;
        transition:0.3s ease width; 
        p{
          width:100%;
          height:260px;
          background:rgba(0,0,0,0.3);
          float:left;
          span{
            display:block;
            width:30px;
            color:#fff;
            font-size:30px;
            margin:0 auto;
          }
        }
        div{
          width:100%;
          height:100%;
        }
        .mask_a{
          background:url(../assets/20150422_ifold1.jpg) center no-repeat;
        }
        .mask_b{
          background:url(../assets/20150120_ifold2.jpg) center no-repeat;
        }
        .mask_c{
          background:url(../assets/20150120_ifold3.jpg) center no-repeat;
        }
        .mask_d{
          background:url(../assets/20150120_ifold4.jpg) center no-repeat;
        }
        .mask_e{
          background:url(../assets/20150120_ifold5.jpg) center no-repeat;
        }
        .mask_f{
          background:url(../assets/20150120_ifold6.jpg) center no-repeat;
        }
        .mask_g{
          background:url(../assets/20150120_ifold7.jpg) center no-repeat;
        }
      }
      li:hover{
        width:500px;
        p{
          display:none;
        }
      }
    }
  }
}
.termini{
  width:100%;
  height:570px;
  // background:aqua;
  .termini_wrap{
    width:1200px;
    height:566px;
    // background:pink;
    margin:0 auto;
    .title{
      width:1200px;
      height:46px;
      border-bottom:2px solid #f55;
      span:nth-of-type(1){
        color:#f55;
        font-size:25px;
        line-height:46px;
      }
      span:nth-of-type(2){
        color:#999;
        padding:0 0 0 5px;
        font-size:14px;
      }
    }
    .domestic{
      width:1200px;
      height:250px;
      .clearfix{
        width:1200px;
        height:48px;
        // background:yellow;
        b{
          i{
            float:left;
            display:block;
            width:29px;
            height:24px;
            background:url(../assets/icon_index.png) -576px -101px no-repeat;
            margin:10px 0 0 0;
          }
          .shu{
            background:url(../assets/icon_index.png) -576px -131px no-repeat;
          }
          span{
            line-height:48px;
            color:#999;
          }
        }
        .ss{
          font-size:15px;
          margin:0 0 0 10px;
          border:1px solid rgba(0,0,0,0);
          border-radius:15px;
          font-size:13px;
          padding:5px 15px 5px 15px;
          cursor:pointer;
          color:#999;
        }
        .ss:hover{
          border:1px solid #f55;
          // color:#f55;
        }
        .no{
          font-size:15px;
          margin:0 0 0 10px;
          border-radius:15px;
          font-size:13px;
          padding:5px 15px 5px 15px;
          cursor:pointer;
          color:#fff;
          background:#f55;
        }
        .right{
          float:right;
          margin:15px 0 0 0;
          color:#333;
          cursor:pointer;
          font-size:15px;
        }
        .right:hover{
          color:red;
        }
      }
      .tab_themes,.tabs{
          display:none;
        .tab_theme{
          width:1200px;
          height:202px;
          list-style:none;
          display:flex;
          justify-content:space-between;
          // background:red;
          li{
            width:293px;
            height:202px;
            // background:red;
            border-bottom:1px solid #ccc;
            overflow:hidden;
            .pic_add{
              width:293px;
              height:160px;
              overflow:hidden;
              position:relative;
              img{
                // display:block;
                width:293px;
                height:180px;
              }
              div{
                position:absolute;
                top:120px;
                left:10px;
                color:#fff;
                font-weight:bold;
                font-size:25px;
              }
            }
            .scale_tour{
              width:293px;
              height:41px;
              color:#f7f7f7;
              span{
                line-height:41px;
                margin:0 0 0 5px;
                color:#999;
                font-size:13px;
              }
            }
          }
          li:hover{
            border-bottom:2px solid #f55;
            .pic_add{
              img{
                margin-top:-15px;
                transition:0.3s;
              }
            }
          }
        }
      }
    }
  }
}
.discount{
  width:100%;
  height:372px;
  // background:pink;
  .discount_wrap{
    width:1200px;
    height:372px;
    // background:aqua;
    margin:0 auto;
    .title{
      width:1200px;
      height:42px;
      border-bottom:2px solid #49f;
      h2{
        line-height:42px;
        color:#49f;
      }
    }
    .discount_tricket{
      width:1200px;
      height:150px;
      .clearfix{
          width:1200px;
          height:48px;
          line-height:48px;
        b{
          i{
            float:left;
            display:block;
            width:29px;
            height:24px;
            background:url(../assets/icon_index.png) -573px -191px no-repeat;
            margin:10px 0 0 0;
          }
          .huo{
            width:30px;
            height:25px;
            background:url(../assets/icon_index.png) -575px -221px no-repeat;
          }
        }
        .ss{
          font-size:15px;
          margin:0 0 0 10px;
          border:1px solid rgba(0,0,0,0);
          border-radius:15px;
          font-size:13px;
          padding:5px 15px 5px 15px;
          cursor:pointer;
          color:#999;
        }
        .ss:hover{
          border:1px solid #49f;
          color:#49f;
        }
        .no{
          font-size:15px;
          margin:0 0 0 10px;
          border-radius:15px;
          font-size:13px;
          padding:5px 15px 5px 15px;
          cursor:pointer;
          color:#fff;
          background:#49f;
        }
        .right{
          float:right;
          margin:0 0 0 0;
          color:#333;
          cursor:pointer;
          font-size:15px;
        }
        .right:hover{
          color:red;
        }
      }
      .tab_rebate{
        width:1200px;
        height:102px;
        // background:yellow;
        ul{
          display:flex;
          justify-content:space-between;
          list-style:none;
          li{
            width:200px;
            height:100px;
            // background:pink;
            border:1px solid #d8e8fe;
            background:#f4f9ff;
            a{
              text-decoration:none;
              font-size:13px;
              color:#666;
              .data_tp{
                width:170px;
                height:20px;
                // background:green;
                margin:20px 0 0 15px;
                display:flex;
                justify-content:space-between;
                i{
                  display:block;
                  width:30px;
                  height:20px;
                  background:url(../assets/icon_index.png) -569px -163px no-repeat;
                }
                .tou{
                  width:32px;
                  height:32px;
                  background:url(../assets/icon_index.png) -527px -164px no-repeat;
                }
                .b{
                  padding:0 15px 0 15px;
                }
                .s{
                  padding:0 10px 0 0;
                }
                .s:nth-of-type(1){
                  padding:1px 10px 0 10px;
                  background:green;
                  border-radius:10px;
                  color:#fff;
                }
                .s:nth-of-type(2){
                  color:#fc6622;
                }
              }
            }
          }
          li:hover{
            border:1px solid #49f;
          }
        }
      }
    }
  }
}
.raiders{
  width:100%;
  height:274px;
  .raiders_wrap{
    width:1200px;
    height:274px;
    margin:0 auto;
    // background:pink;
    .title{
      width:1200px;
      height:42px;
      border-bottom:2px solid #77cc11;
      h2{
        color:#77cc11;
        line-height:42px;
      }
    }
    .pic_rad{
      width:1200px;
      height:232px;
      display:flex;
      justify-content:space-between;
      margin:8px 0 0 0;
      .pic_shaw{
        width:580px;
        height:220px;
        // background:green;
        // display:flex;
        // justify-content:space-between;
        ul{
          width:580px;
          height:232px;
          list-style:none;
          position:relative;
          li{
            width:220px;
            height:54px;
            cursor:pointer;
            line-height:54px;
            border-bottom:1px solid #ccc;
            padding:0 0 0 10px;
            font-size:15px;
            color:#555;
            img{
              width:360px;
              height:220px;
              position:absolute;
              top:0;
              right:0;
              display:none;
            }
            .block{
              display:block;
            }
          }
          li:nth-of-type(1):hover{
            color:#fff;
            background:#77cc11;
            img{
              display:block;
            }
          }
          li:nth-of-type(2):hover{
            color:#fff;
            background:#77cc11;
            img{
              display:block;
            }
          }
          li:nth-of-type(3):hover{
            color:#fff;
            background:#77cc11;
            img{
              display:block;
            }
          }
          li:nth-of-type(4):hover{
            color:#fff;
            background:#77cc11;
            img{
              display:block;
            }
          }
        }
        // ol{
        //   width:360px;
        //   height:220px;
        //   position:relative;
        //   list-style:none;
        //   li{
        //     width:360px;
        //     height:220px;
        //     // background:red;
        //     position:absolute;
        //     top:0;
        //     left:0;
        //     overflow:hidden;
        //   }
        // }
      }
      .tab_pic_show{
        width:600px;
        height:222px;
        // background:aqua;
        ul{
          display:flex;
          justify-content:space-between;
          list-style:none;
          li{
            width:290px;
            height:220px;
            border-bottom:2px solid #cccccc;
            cursor:pointer;
            img{
              width:290px;
              height:180px;
            }
            div{
              width:290px;
              height:40px;
              a{
                line-height:40px;
                color:#3377ee;
                text-decoration:none;
                font-size:14px;
              }
            }
            div:hover{
              a{
                color:red;
              }
            }
          }
          li:hover{
            border-bottom:2px solid #77cc11;
          }
        }
      }
    }
  }
}
.service_us{
  width:100%;
  height:181px;
  .service_wrap{
    overflow:hidden;
    width:1200px;
    height:181px;
    margin:0 auto;
    background:gray;
    .service_inf{
      width:1200px;
      height:101px;
      background:#f7f7f7;
      overflow:hidden;
      ul{
        margin:20px 0 0 0;
        list-style:none;
        display:flex;
        justify-content:space-between;
        li{
          width:290px;
          height:60px;
          // background:pink;
          span{
            line-height:60px;
            float:left;
            padding: 0 0 0 10px;
          }
          i{
            display:block;
            width:60px;
            height:60px;
            float:left;
          }
          .icon1{
            background:url(../assets/icon_index.png) -91px -4px no-repeat;
          }
          .icon2{
            background:url(../assets/icon_index.png) -159px -4px no-repeat;
          }
          .icon3{
            background:url(../assets/icon_index.png) -228px -4px no-repeat;
          }
          .icon4{
            background:url(../assets/icon_index.png) -295px -6px no-repeat;
          }
        }
        li:hover{
          .wr{
            animation:arr 2s ease;
            -webkit-animation:arr 0.5s ease  2 alternate both;
          }
            @keyframes arr{
              0%{
                transform:rotate(0deg)
              }
              20%{
                transform:rotate(20deg)
              }
              40%{
                transform:rotate(-20deg)
              }
              60%{
                transform:rotate(20deg)
              }
              80%{
                transform:rotate(-20deg)
              }
              100%{
                transform:rotate(0deg)
              }
            }
        }
      }
    }
    .booking_email{
      width:1200px;
      height:80px;
      background:#f7f7f7;
      display:flex;
      justify-content:space-between;
      border-top:1px solid #e5e5e5;
      .service_agreemet{
         width:130px;
         height:80px;
         // background:yellow;
        div{
          width:110px;
          height:80px;
          background:url(../assets/icon_index.png) -384px -20px no-repeat;
          margin:0 0 0 -20px;
        }
      }
      .input_email{
        width:530px;
        height:80px;
        // background:red;
        line-height:80px;
        span{
          color:#71829d;
        }
        input{
          width:200px;
          height:25px;
        }
        input:nth-of-type(2){
          width:80px;
          height:30px;
          background:#3377dd;
          color:#fff;
          border:0;
          margin:0 0 0 -5px;
        }
      }
      .ei_icon{
        width:94px;
        height:80px;
        font-size:13px;
        line-height:80px;
        a{
          text-decoration:none;
        }
        a:hover{
          color:red;
        }
      }
    }
    .booking_email:hover{
      .service_agreemet{
        div{
          margin:0 0 0 0;
          transition:1s;
        }
      }
    }
  }
}


.footer{
  width:100%;
  height:305px;
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
.bottom_nav{
  width:100%;
  height:40px;
  background:#7C8FA2;
  display:flex;
  justify-content:center;
  span{
    display:block;
    width:166px;
    height:40px;
    line-height:40px;
    text-align:center;
    font-size:15px;
    cursor:pointer;
  }
  span:nth-of-type(1){
    background:#C0D2E4;
  }
  // span:hover{
  //   background:#999;
  // }
}
.bottom_con{
  width:1000px;
  height:100%;
  background:#f0f0f0;
  margin: 0 auto;
  overflow:hidden;
  display:none;
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
