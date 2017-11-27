import Vue from 'vue'
import axios from 'axios'
import router from './router'
//查自己电脑的ip配置 cmd命令行输入ipconfig

// 发送请求的配置
const axiosInstance = axios.create({
	baseURL : 'http://172.20.10.12:8080',
	headers : {
		// 'Content-Type' : 'application/x-www-form-urlencoded;charset = UFT-8',
		'Content-Type' : 'application/json'
		// 请求头部的设置和后台有关,看后台给你返回的是什么数据
	},
	// 此处为true时是跨域的确认,为false是取消跨域
	withCredentials:true, 
	// crossDomain:true, // 此属性也是为了解决跨域的问题
	// timeout 是响应超时的时间
	timeout:5000
})

// 响应的配置如下
axiosInstance.interceptors.response.use(
	response => {
		if(response.data.errorCode === 10000){
			// 执行的逻辑代码
		};
		return response;  // 不写的话 会打断
	},
	error => {
		if(error){
			// 执行的逻辑代码
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;  // 出口