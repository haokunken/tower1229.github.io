/**
 * name: common
 * version: v3.0.1
 * update: ie78 console bug
 * date: 2016-04-30
 */
define(function(require, exports, module) {
	var $ = require('jquery');
	var base = require('base');

	if(base.browser.ie<8){
		alert('您的浏览器版本过低，请升级或使用chrome、Firefox等高级浏览器！');
	}
	//屏蔽ie78 console未定义错误
	if (typeof console === 'undefined') {
	    console = { log: function() {}, warn: function() {} }
	};
	/*
	* 常用工具
	*/
	//返回顶部
	$('body').on('click','.gotop',function(){$('html,body').stop(1).animate({scrollTop:'0'},300);return false});
	//关闭当前页
	$('body').on('click','.closewin',function(){window.opener=null;window.open("","_self");window.close()});
	//打印当前页
	$('body').on('click','.print',function(){window.print()});
	
	//textarea扩展max-length
	$('textarea[max-length]').on('change blur keyup',function(){
		var _val=$(this).val(),_max=$(this).attr('max-length');
		if(_val.length>_max){
			$(this).val(_val.substr(0,_max));
		};
	});
	//延时显示
	$('.opc0').animate({'opacity':'1'},160);
	// placeholder
	$('input, textarea').placeholder();
	//按需渲染
	base.scanpush();
	//响应图片
	base.resImg();
	/*
	* 输出
	*/
	module.exports = {
		demo:function(){
			console.log('hello '+base.getType());
		}
	}

	/*
	* 站内公用
	*/
 

	
	
	
})