<template>
  <div id="register">
  	<div class="logo"><i></i></div>
  	<div class="container">
  	  <div class="container_tt">
  		<div class="title">
  			<label>注册新会员</label>
  			<span>已有艺龙账号，</span>
  			<a href="javascript:;">直接登录</a>
  		</div>
  		<div class="coopera"><input id="id" type="checkbox">我有艺龙合作卡</div>
  		<ul id="ul" class="card">
  			<li>
  				<p><span>*</span>卡类型：</p>
                <select name="">
                	<option value="">银行卡类</option>
                	<option value="">酒店合作类</option>
                	<option value="">无线通讯类</option>
                	<option value="">购物消费类</option>
                	<option value="">航空类</option>
                	<option value="">其他</option>
                	<option value="">所有联名卡[按首字拼音排序]</option>
                </select>
  			</li>
  			<li>
  				<p><span>*</span>卡名称：</p>
                <select name="">
                	<!-- <option value="">中国大陆+86</option>
                	<option value="">中国香港+852</option>
                	<option value="">中国澳门+853</option>
                	<option value="">中国台湾+886</option> -->
                </select>
  			</li>
  			<li>
  				<p><span>*</span>卡号：</p>
  				<input class="w150" type="text">
  			</li>
  		</ul>
  		<ul class="fillmge">
  			<li>
  			    <p><span>*</span>手机：</p>
                <select name="">
                	<option value="">中国大陆+86</option>
                	<option value="">中国香港+852</option>
                	<option value="">中国澳门+853</option>
                	<option value="">中国台湾+886</option>
                </select>
  			    <input class="inputs" type="text">
  			    <div class="div"></div>
  		    </li>
  			<li>
  				<p><span>*</span>输入验证码：</p>
  				<input class="inputs" type="text">
  				<span class="num">a8qd</span>
  				<a class="dian" href="javascript:;">看不清，换一张</a>
  				<div class="div"></div>
  			</li>
  			<li>
  				<p><span>*</span>短信验证码：</p>
  				<input class="inputs" type="text">
  				<span class="xin">获取短信验证码</span>
  				<div class="div"></div>
  			</li>
  			<li>
  				<p><span>*</span>邮箱：</p>
  				<input class="w150 inputs" type="text">
  				<div class="div"></div>
  			</li>
  			<li>
  				<p><span>*</span>密码：</p>
  				<input class="w150 inputs" type="text">
  				<div class="div"></div>
  			</li>
  			<li>
  				<p><span>*</span>再次输入密码：</p>
  				<input class="w150 inputs" type="text">
  				<div class="div"></div>
  			</li>
  			<div class="promotion_ipt">
  				<input type="checkbox" checked="checked">同意接受艺龙发送的促销信息
  			</div>
  		</ul>
  		<div class="ml135">填写出行习惯</div>
  		<div class="ml155">
  			<input type="checkbox">同意艺龙旅行网服务条款<a href="">查看条款</a>
  		</div>
  		<div class="ml165">立即注册</div>
  	  </div>
  	</div>
  </div>
</template>
<script>
export default {
	name: "register",
	data (){
	  return {

	  }
	},
	methods:{
    
  },
  watch:{

  },
  mounted(){

  	var put=document.getElementById("id");
    var card=document.getElementById("ul");  
   	var isOk=true; 
    put.onclick=function(){
    	if(isOk){
    		card.style.display="block";
    		isOk=false;
    	}else{
    		card.style.display="none";
    		isOk=true;
    	}
    }

    var inputs=document.getElementsByClassName("inputs");
    var div=document.getElementsByClassName("div")

    function shouji(){
    	var re=/^1[34578]{1}[0-9]{9}$/g;
    	var isok=re.test(inputs[0].value)
    	if( inputs[0].value == "" ){
        	div[0].innerHTML="手机号不能为空"
        	div[0].style.display="block"
        }else if( !isok ){
        	div[0].innerHTML="请输入正确的手机号"
        	div[0].style.display="block"
        }else{
        	div[0].style.display="none"
        }
    }

    var num=document.getElementsByClassName("num")[0];
    
    function yanzheng(){
    	if( inputs[1].value == "" ){
    		div[1].innerHTML="验证码不能为空"
    		div[1].style.display="block"
    	}else if( inputs[1].value != num.innerHTML ){
    		div[1].innerHTML="验证码错误"
    		div[1].style.display="block"
    	}else{
    		div[1].style.display="none"
    	}
    }

    // function youxiang(){
    // 	if( inputs[3].value == "" ){
    // 		div[3].innerHTML="验证码不能为空"
    // 		div[3].style.display="block"
    // 	}else if( inputs[3].value == num.innerHTML ){
    // 		div[3].innerHTML="验证码错误"
    // 		div[3].style.display="block"
    // 	}else{
    // 		div[3].style.display="none"
    // 	}
    // }

    function mm(){
    	if( inputs[4].value == "" ){
    		div[4].innerHTML="验证码不能为空"
    		div[4].style.display="block"
    	}else if( inputs[4].value.length <4 || inputs[4].value.legth > 30 ){
    		div[4].innerHTML="4-30个字符或数字组成"
    		div[4].style.display="block"
    	}else{
    		div[4].style.display="none"
    	}
    }

    function mm2(){
    	if( inputs[5].value != inputs[4].value ){
    		div[5].innerHTML="两次密码不一致"
    		div[5].style.display="block"
    	}else{
    		div[5].style.display="none"
    	}
    }
    
    var ml=document.getElementsByClassName("ml165")[0];
    ml.onclick=function(){
    	shouji()
    	yanzheng()
    	mm()
    	mm2()
    }
    

  }
}
</script>
<style lang="scss" scope>
*{
	padding:0;
	margin:0;
}
html{
	background:#E8EFF6;
}
.logo{
   width:1000px;
   height:100px;
   margin:0 auto;
   // background:red;
   overflow:hidden;
   i{
   	display:block;
   	width:113px;
   	height:48px;
   	background:url(../assets/myelong_login.png) no-repeat 0 0;
    margin:26px 0 0 0;
   }
}
.container{
	width:1000px;
	height:100%;
	background:#fff;
	margin:0 auto;
	overflow:hidden;
	.container_tt{
		width:940px;
		height:100%;
		margin:0 auto;
		margin-top:50px;
		// background:aqua;
		.title{
	        label{
	        	font-weight:bold;
	        	font-size:25px;
	        	color:#555;
	        }
	        span{
	        	padding:0 0 0 30px;
	        	color:#555;
	        }
	        a{
	        	color:#36C;
	        	text-decoration:none;
	        }
	        a:hover{
	        	color:red;
	        }
		}
		.coopera{
			margin:50px 0 0 140px;
		}
		.card{
			width:700px;
			height:170px;
			margin:0 0 0 30px;
			list-style:none;
			display:none;
			li{
				height:30px;
				margin-top:20px;
				p{
				  width:130px;
				  height:30px;
				  float:left;
				  text-align:right;
				  font-size:13px;
				  color:#555;
				  line-height:30px;
				}
				select{
					height:28px;
					width:250px;
				}
				.w150{
					height:22px;
					width:250px;
				}
			}
		}
		.fillmge{
			width:700px;
			height:353px;
			// background:pink;
			border-top:1px dashed gray;
			margin:0 0 0 30px;
			// padding:0px;
			list-style:none;
			li{
				height:30px;
				margin-top:20px;
				div{
					font-size:10px;
					margin:0 0 0 130px;
					color:#999;
				}
				p{
				  width:130px;
				  height:30px;
				  float:left;
				  text-align:right;
				  font-size:13px;
				  color:#555;
				  line-height:30px;
				  span{
				  	color:red;
				  	padding:30px 0 0 0;
				  }
				}
				select{
					width:120px;
					height:30px;
				}
				input{
					width:120px;
					height:27px;
				}
				.w150{
					width:250px;
				}
				.num{
					width:50px;
					height:30px;
					background:#fffffd;
					padding:6px 7px 6px 7px;
					cursor:pointer;
				}
				.dian{
					text-decoration:none;
					font-size:12px;
				}
				.dian:hover{
					color:red;
				}
				.xin{
					width:500px;
					height:30px;
					// display:block;
					background:#37D;
					padding:6px 7px 6px 7px;
					color:#fff;
					cursor:pointer;
				}
				.xin:hover{
					background:#003679;
				}
			}
			.promotion_ipt{
				margin:30px 0 0 130px;
				font-size:13px;
			}
		}
		.ml135{
			width:106px;
			height:32px;
			background:#f8f8f8;
			border:1px solid gray;
			line-height:32px;
			text-align:center;
			cursor:pointer;
			font-size:13px;
			margin:10px 0 0 160px;
		}
		.ml155{
            font-size:12px;
            margin:15px 0 0 160px;
            a{
            	text-decoration:none;
            	margin:0 0 0 5px;
            }
            a:hover{
            	color:red;
            }
		}
		.ml165{
			width:106px;
			height:32px;
			background:#ff8900;
			line-height:32px;
			text-align:center;
			cursor:pointer;
			font-size:15px;
			color:#fff;
			margin:15px 0 30px 160px;
		}
		.ml165:hover{
			background:#ff6000;
		}
	}
}

</style>