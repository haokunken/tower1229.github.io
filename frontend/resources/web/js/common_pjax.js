/*
 * name: common-pjax
 * version: v3.0.2
 * update: 同步common.js v3.0.0
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
	}
	/*
	* 常用工具
	*/
	//返回顶部
	$('body').on('click','.gotop',function(){$('html,body').stop(1).animate({scrollTop:'0'},300);return false});
	//关闭当前页
	$('body').on('click','.closewin',function(){window.opener=null;window.open("","_self");window.close()});
	//打印当前页
	$('body').on('click','.print',function(){window.print()});

	//PJAX预取
	var ic = require('instantclick');
	var ic_scroll;
	ic.on('fetch', function(){
		ic_scroll = $(window).scrollTop();
	});
	ic.on('receive', function(url, body, title) {
		var scrollfixed = base.getUrlParam('scrollfixed',url);
		if (!scrollfixed) {
			ic_scroll = null;
		}
		return {
			body: body,
			title: title
		};
	});
	ic.on('change', function(){
		if(ic_scroll){
			$('body,html').scrollTop(ic_scroll);
			ic_scroll = null;
		}	
	});
	ic.init();

	/*
	* 输出
	*/
	module.exports = {
		init:function(){

			// placeholder
			$('input, textarea').placeholder();
			//textarea限制字数
			$('textarea[max-length]').on('change blur keyup',function(){
				var _val=$(this).val(),_max=$(this).attr('max-length');
				if(_val.length>_max){
					$(this).val(_val.substr(0,_max));
				};
			});
			//按需渲染
			setTimeout(function(){
				base.scanpush();
			},0);
			//响应图片
			base.resImg();
			/*
			* 站内公用
			*/
		 
			console.log('pjax init');




		}
	}	
});