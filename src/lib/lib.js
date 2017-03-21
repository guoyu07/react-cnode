import merged from 'obj-merged';

const env = process.env.NODE_ENV !== 'production' ? '' : 'https://cnodejs.org';
const Lib = {};

/**
 * ajax 请求默认配置
 * @param {object} options
 */

Lib.ajax = function(options) {

 	var defaultOptions = {
 		url: window.location.pathname,
 		async: true, //默认异步
 		type: 'GET', //默认GET请求
 		data: {}, //发送给服务器的数据
 		dataType: 'json', //数据类型
 		success: function(data) {}, //成功回调
 		error: function(e){ console.log(e)} // 出错回调
 	}

 	var pData = []; //存储数据
 	var sData = ''; //拼接数据

 	//属性覆盖
 	for(var option in options) {
 		defaultOptions[option] = options[option];
 	}
 	for(var item in options.data) {
 		pData.push(item + '=' + escape(options.data[item]));
 	}
 	//拼接查询字符串
 	sData = pData.join('&');
 	defaultOptions.type = options.type.toUpperCase();

 	var xhr = new XMLHttpRequest();
 	try{
 		if(defaultOptions.type === 'GET') {
 			sData = defaultOptions.url + '?' + sData;
 			xhr.open(defaultOptions.type,sData + '&t=' + new Date().getTime(),defaultOptions.async);
 			xhr.send();
 		} else { //post 请求方式
 			xhr.open(defaultOptions.type,defaultOptions.url,defaultOptions.async);
 			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 			xhr.send(sData);
 		}
 	} catch(e){
 		//放弃请求
 		xhr.abort();
 	}
 	//判断是否异步
 	if(defaultOptions.async) {
 		xhr.addEventListener('readystatechange', httpEnd, false);
 	} else { //同步
 		httpEnd();
 	}
    //移除监听事件
 	xhr.end = function() {
 		xhr.removeEventListener('readystatechange', httpEnd, false);
 	}

 	function httpEnd() {
 		if(xhr.readyState === 4) {
 			var header = xhr.getAllResponseHeaders();
 			var response = xhr.responseText;
 			//将服务器返回的数据转回为json 数据
 			if(/application\/json/.test(header) || defaultOptions.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
 				response = JSON.parse(response);
 			}
 			if((xhr.status >= 200 && xhr.status <= 300) || xhr.status == 304) {
 				defaultOptions.success(response, defaultOptions, xhr);
 			} else {
 				defaultOptions.error(defaultOptions, xhr);
 			}
 		}
 	}
 	//特殊符号转义
 	function escape(str) { 
 	    str += ''; //隐式转换
 	    str = str.replace(/%/g, '%25');
 	    str = str.replace(/\+/g, '%2B');
 	    str = str.replace(/ /g, '%20');
 	    str = str.replace(/\//g, '%2F');
 	    str = str.replace(/\?/g, '%3F');
 	    str = str.replace(/&/g, '%26');
 	    str = str.replace(/\=/g, '%3D');
 	    str = str.replace(/#/g, '%23');
 	    return str;
 	}
 	return xhr;
}

 /**
  * ajax post 请求封装
  * 
  */
Lib.post = function(url,data,success,error) {
  	var options = {
  		url: env + url,
  		type: 'POST',
      data: data,
  		success: success || function() {},
  		error: error || function() {}
  	};
  	return Lib.ajax(options);
}
 /**
  * ajax get 请求封装
  * 
  */
Lib.get = function(url,data,success,error) {
  	var options = {
  		url: env + url,
  		type: 'GET',
      data: data,
  		success: success || function() {},
  		error: error || function() {}
  	};
  	return Lib.ajax(options);
}

 /**
  * 格式化时间
  * 
  */
Lib.formatDate = function(string) {
  	var date = new Date(string);
  	var time = (new Date().getTime() - date.getTime())/1000; //相差时间，单位秒
  	if(time < 0) {
  		return ''
  	} else if(time < 60) {
  		return '刚刚'
  	} else if((time/60) < 60) {
  		return parseInt(time/60) + '分钟前'
  	} else if((time/3600) < 24) {
  		return parseInt(time/3600) + '小时前'
  	} else if((time/86400) < 31) {
  		return parseInt(time/86400) + '天前'
  	} else if((time/2592000) < 12) {
  		return parseInt(time/2592000) + '月前'
  	} else {
  		return parseInt(time/31536000) + '年前'
  	}
}
 /**
  * localstorge 存储封装
  */
Lib.setLocalStorge = function(key,value) {
 		return localStorage.setItem(key,value);
}
Lib.getLocalStorge = function(key) {
        return localStorage.getItem(key);
}
Lib.removeLocalStorge = function(key) {
 	if(key) {
 		return localStorage.removeItem(key);
 	} else {
 		return localStorage.removeItem();
 	}
}

export { Lib, merged }


