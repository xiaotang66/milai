jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return-h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return-h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return-h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return-h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return-h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return-h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return-h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return-(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return-0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});;
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery.min'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));}
var result=key?undefined:{};var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));;(function(a){a.fn.RoamHoverDelay=function(c){var e={hoverDuring:200,outDuring:200,hoverEvent:function(){a.noop()},outEvent:function(){a.noop()}};var d=a.extend(e,c||{});return a(this).each(function(){var f,g,h=this;a(this).hover(function(){clearTimeout(g);f=setTimeout(function(){d.hoverEvent.apply(h)},d.hoverDuring)},function(){clearTimeout(f);g=setTimeout(function(){d.outEvent.apply(h)},d.outDuring)})})};a.fn.RoamTab=function(d){var c={trigger:"mouseenter",menu:"h4 span",con:"item",cur:"hover"};var e;if(typeof d==="string"){e=a.extend(c,{trigger:d})}else{e=a.extend(c,d)}return this.each(function(){var g=a(this);var h=g.find(e.menu);var f=g.find("."+e.con);h.first().addClass(e.cur);f.hide();f.first().show();h.each(function(i,j){h.bind(e.trigger,function(){a(this).addClass(e.cur).siblings().removeClass(e.cur);f.eq(h.index(this)).show().siblings().hide()})});return false})};a.fn.RoamPic=function(e){var c={effect:1,con:".info",way:"left",opacity:0.7,zoom:"2",time:"300"};var d=a.extend(c,e);return this.each(function(){var i=a(this);var o=i.find("li");var f=i.find(d.con);switch(d.effect){case 2:j();break;case 3:p();break;case 4:g();break;case 5:h();break;case 6:q();break;case 7:n();break;case 8:l();break;case 9:k();break;default:m()}function m(){var v,u,s;var t=o.width();var r=o.height();switch(d.way){case"bottom":v="0";u="-"+r;a(f).css("bottom","-"+r+"px");break;case"left":v="0";u="-"+t;a(f).css({left:"-"+t+"px",top:"0"});break;case"top":v="0";u="-"+r;a(f).css("top","-"+r+"px");break;case"right":v="0";u="-"+t;a(f).css({right:"-"+t+"px",top:"0"});break;default:marigin=a(f).height();a(f).css("bottom",marigin)}var w={};a(f).css("opacity",d.opacity);o.each(function(){a(this).hover(function(){w[d.way]=v;s=a(this).find("a").attr("href");a(this).find(f).stop(false,false).animate(w,d.time);a(this).append("<a href='"+s+"' class='focus' style='position:absolute; width:"+t+"px; height:"+r+"px; display:block; top:0;left:0'></a>")},function(){w[d.way]=u;a(this).find(f).stop(false,false).animate(w,d.time);a(this).find("a.focus").remove()})})}function j(){o.hover(function(){a(this).css("border-radius","20px")},function(){a(this).css("border-radius","0")})}function p(){var x=d.zoom;var s=a(f).width();var v=a(f).height();var r=-(s*x-s)/2;var u=-(v*x-v)/2;o.hover(function(){a(this).find(f).css({"z-index":"99",width:s*x,height:v*x,left:r,top:u});a(this).find("img").css({width:s*x,height:v*x})},function(){a(this).find(f).css({left:"0",top:"0","z-index":"0",width:s,height:v});a(this).find("img").css({width:s,height:v})})}function g(){o.hover(function(){var r=a(this).position();var t=a(this);var s=a(this).find("a").attr("href");if(a(f).attr("deta-switch")!=="true"){a(f).attr("deta-switch","true");a(f).css({width:"100%",height:a(window).height(),left:"0px",top:"0px",opacity:0,display:"block"})}a(f).attr("href",s);a(f).stop(false,false).animate({opacity:0.8,left:r.left+10,top:r.top+10,width:t.width(),height:t.height()},d.time)})}function h(){var v=o.width();var r=o.height();var s=a(f).width();var u=a(f).height();var t;o.hover(function(){t=a(this).find("a").attr("href");a(this).find(f).stop(false,false).animate({opacity:"0",left:"-=10px",top:"-=10px",width:v,height:r},d.time);a(this).append("<a href='"+t+"' class='focus' style='position:absolute; width:"+v+"px; height:"+r+"px; display:block; top:0;left:0'></a>")},function(){a(this).find(f).stop(false,false).animate({opacity:"1",left:"0",top:"0",width:s,height:u},d.time);a(this).find("a.focus").remove()})}function q(){}function n(){o.hover(function(){a(this).stop().animate({opacity:1},d.time);a(this).siblings().stop().animate({opacity:d.opacity},d.time)},function(){a(this).stop().animate({opacity:1},d.time);a(this).siblings().stop().animate({opacity:1},d.time)})}function l(){var x=d.zoom;var s=i.find("img").width();var v=i.find("img").height();var r=-(s*x-s)/2;var u=-(v*x-v)/2;o.hover(function(){a(this).find("img").stop(false,false).animate({width:s*x,height:v*x,left:r,top:u},d.time);a(this).find(f).stop(false,false).slideDown()},function(){a(this).find("img").stop(false,false).animate({width:s,height:v,left:"0",top:"0"},d.time);a(this).find(f).stop(false,false).slideUp()})}function k(){var r=o.find("img").width();var t=o.find("img").height();var s;o.hover(function(){s=a(this).find("img");s.data({out:s.attr("src"),over:s.attr("data-src")});s.attr("src",s.data("over"))},function(){s.attr("src",s.data("out"))})}return false})};a.fn.RoamFocus=function(e){var d={thumb:null,control:null,thumbNowClass:"now",slideWay:"left",isBg:false,isTitle:false,isNum:false,slideTime:800,autoChange:true,changeTime:3000};var c=a.extend(d,e);return this.each(function(){var n=a(this);var i=0;var A;var r;var q=n.find(".focusCon");var o=n.find("li");var p=n.find("ul");var j=o.size();var t=o.first().width();var s=o.first().height();q.css("overflow","hidden");var l=t*(j+1);var w=s*(j+1);var h={};p.css({position:"absolute",width:l,height:w});var x="<div class='btnBg clearfix'><div class='title'></div><div class='btn'><div></div>";var k="",B="",y="";o.find("a.pic").each(function(C){k+=c.isNum?("<span>"+(C+1)+"</span>"):"<span> </span>";y+=c.isTitle?("<a href='"+a(this).attr("href")+"'>"+a(this).attr("title")+"</a>"):"<a> </a>"});q.append(x);q.find(".btn").append(k);q.find(".title").append(y);var v=n.find("span");var m=n.find(".title a");if(c.isBg){q.find(".btnBg").css("background","none")}if(c.control&&c.slideWay!="rand"){q.append("<div class='control'><div class='prev'></div><div class='next'></div></div> ")}switch(c.slideWay){case"left":r="-"+t;o.addClass("fl");break;case"top":r="-"+s;break;case"right":r="-"+t;o.addClass("fr");break;case"bottom":r="-"+s;break;case"rand":o.addClass("rand");o.hide();break;default:r="-"+t;o.addClass("fl")}v.mouseenter(function(){i=v.index(this);u()}).eq(0).trigger("mouseenter");n.find(".prev").click(function(){f()});n.find(".next").click(function(){g()});n.hover(function(){clearInterval(A)},function(){if(c.autoChange){A=(c.slideWay=="rand")?setInterval(u,c.changeTime):setInterval(g,c.changeTime)}}).trigger("mouseleave");function f(){i--;if(i==-1){i=j-1}u()}function g(){i++;if(i==j){z();i=0}else{u()}}function u(){marginSlide=i*r;v.removeClass("on").eq(i).addClass("on");o.removeClass(c.thumbNowClass).eq(i).addClass(c.thumbNowClass);m.hide().eq(i).show();if(c.isBg){n.css("background",o.eq(i).attr("role")).stop(true,true).fadeIn(c.slideTime)}h[c.slideWay]=marginSlide;if(c.slideWay=="rand"){o.eq(i).stop(true,true).fadeIn(c.slideTime).siblings().fadeOut(c.slideTime);i=(i+1)%j}else{p.animate(h,500)}}function z(){p.append(o.first().clone());marginSlide=i*r;h[c.slideWay]=marginSlide;p.stop(true,false).animate(h,500,function(){p.css(c.slideWay,"0");n.find("li").last().remove()});v.removeClass("on").eq(0).addClass("on");o.removeClass(c.thumbNowClass).eq(0).addClass(c.thumbNowClass);if(c.isBg){n.css("background",o.eq(0).attr("role")).stop(true,true).fadeIn(c.slideTime)}m.hide().eq(0).show()}return false})};a.fn.RoamScrool=function(d){var e={direction:"top",speed:3000,noStep:true,speedPx:1,showNum:1,rollNum:1,aniSpeed:"slow",aniMethod:"swing"};var c=a.extend(e,d);return this.each(function(){var l=a(this);var h=l.find("ul");var f=l.find("li");l.css({overflow:"hidden",position:"relative"});h.css({position:"absolute",top:0,left:0});if(c.noStep){c.speed=30}var j=0;var k=new Object();switch(c.direction){case"left":j=f.outerWidth(true);f.addClass("fl");break;case"top":j=f.outerHeight(true);break;case"right":j=f.outerHeight(true);f.addClass("fr");break;case"bottom":j=f.outerHeight(true);break;default:j=f.outerHeight(true)}var g=-j*f.length;if(c.rollNum){j*=c.rollNum}k[c.direction]="-="+j;f.slice(0,c.showNum).clone(true).appendTo(h);l.hover(function(){clearInterval(scroolTimer)},function(){scroolTimer=setInterval(i,c.speed)}).trigger("mouseleave");function i(){if(parseInt(h.css(c.direction))<=g){h.css(c.direction,"0px")}if(c.noStep){h.css(c.direction,(parseInt(h.css(c.direction))-c.speedPx+"px"))}else{h.animate(k,c.aniSpeed,c.aniMethod)}}return false})};a.fn.RoamAd=function(c){var e={effect:1,isClose:0,isCookie:0,con:".close",effectCss:"",timeout:5000};var d=a.extend(e,c);return this.each(function(){var i=a(this);var g=i.find("img");i.height(g.height());i.width(g.width());if(!a.cookie("cookieAd")){switch(d.effect){case 1:f();break;case 2:h();break}function f(){i.css("position","absolute");i.addClass(d.effectCss);i.fadeIn(500).delay(d.timeout).fadeOut(500);if(d.isClose){i.find(d.con).click(function(){i.hide()})}if(d.isCookie){a.cookie("cookieAd","yes")}}function h(){i.css("position","relative");i.addClass(d.effectCss);i.slideDown(500).delay(d.timeout).slideUp(500);if(d.isClose){i.find(d.con).click(function(){i.hide()})}if(d.isCookie){a.cookie("cookieAd","yes")}}}})};a.fn.RoamTip=function(d){var e={color:"yellow",isThis:true,con:"",timeout:500};var h;if(typeof options==="string"){h=a.extend(e,{trigger:d})}else{h=a.extend(e,d)}var g=["red","green","blue","white","yellow","black"];function f(){}f.prototype={set:function(i,j){this.timer=setTimeout(i,j)},clear:function(){clearTimeout(this.timer)}};function c(i,j){this.content=i;this.shown=false}c.prototype={generate:function(){return this.tip||(this.tip=a('<div class="tip">'+this.content+'<span class="pointyTipShadow"></span><span class="pointyTip"></span></div>'))},show:function(){if(this.shown){return}this.tip.css("margin-left",-this.tip.outerWidth()/2).fadeIn("fast");this.shown=true},hide:function(){this.tip.fadeOut("fast");this.shown=false}};return this.each(function(){var n=a(this);var l=false;for(var k=0;k<g.length;k++){if(n.hasClass(g[k])){l=true;break}}if(!l){n.addClass(h.color)}var o="";if(h.isThis){if(!n.attr("title")){return}o=n.attr("title")}else{if(!h.con){return}o=a("."+h.con).html()}var j=new f();var m=new c(o);n.append(m.generate()).addClass("TipContainer");n.hover(function(){n.removeAttr("title");m.show();j.clear()},function(){j.set(function(){m.hide();n.attr("title",o)},h.timeout)});return false})};var b=a(window);a.fn.RoamLoad=function(c){var e=this;var f;var d={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:""};function g(){var h=0;e.each(function(){var i=a(this);if(d.skip_invisible&&!i.is(":visible")){return}if(a.abovethetop(this,d)||a.leftofbegin(this,d)){}else{if(!a.belowthefold(this,d)&&!a.rightoffold(this,d)){i.trigger("appear");h=0}else{if(++h>d.failure_limit){return false}}}})}if(c){if(undefined!==c.failurelimit){c.failure_limit=c.failurelimit;delete c.failurelimit}if(undefined!==c.effectspeed){c.effect_speed=c.effectspeed;delete c.effectspeed}a.extend(d,c)}f=(d.container===undefined||d.container===window)?b:a(d.container);if(0===d.event.indexOf("scroll")){f.bind(d.event,function(){return g()})}this.each(function(){var h=this;var i=a(h);h.loaded=false;if(i.attr("src")===undefined||i.attr("src")===false){if(i.is("img")){i.attr("src",d.placeholder)}}i.one("appear",function(){if(!this.loaded){if(d.appear){var j=e.length;d.appear.call(h,j,d)}a("<img />").bind("load",function(){var l=i.attr("data-"+d.data_attribute);i.hide();if(i.is("img")){i.attr("src",l)}else{i.css("background-image","url('"+l+"')")}i[d.effect](d.effect_speed);h.loaded=true;var k=a.grep(e,function(n){return!n.loaded});e=a(k);if(d.load){var m=e.length;d.load.call(h,m,d)}}).attr("src",i.attr("data-"+d.data_attribute))}});if(0!==d.event.indexOf("scroll")){i.bind(d.event,function(){if(!h.loaded){i.trigger("appear")}})}});b.bind("resize",function(){g()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){b.bind("pageshow",function(h){if(h.originalEvent&&h.originalEvent.persisted){e.each(function(){a(this).trigger("appear")})}})}a(document).ready(function(){g()});return this};a.belowthefold=function(d,e){var c;if(e.container===undefined||e.container===window){c=(window.innerHeight?window.innerHeight:b.height())+b.scrollTop()}else{c=a(e.container).offset().top+a(e.container).height()}return c<=a(d).offset().top-e.threshold};a.rightoffold=function(d,e){var c;if(e.container===undefined||e.container===window){c=b.width()+b.scrollLeft()}else{c=a(e.container).offset().left+a(e.container).width()}return c<=a(d).offset().left-e.threshold};a.abovethetop=function(d,e){var c;if(e.container===undefined||e.container===window){c=b.scrollTop()}else{c=a(e.container).offset().top}return c>=a(d).offset().top+e.threshold+a(d).height()};a.leftofbegin=function(d,e){var c;if(e.container===undefined||e.container===window){c=b.scrollLeft()}else{c=a(e.container).offset().left}return c>=a(d).offset().left+e.threshold+a(d).width()};a.inviewport=function(c,d){return!a.rightoffold(c,d)&&!a.leftofbegin(c,d)&&!a.belowthefold(c,d)&&!a.abovethetop(c,d)};a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0})},"in-viewport":function(c){return a.inviewport(c,{threshold:0})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0})}})})(jQuery);;(function($){'use strict';var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var pairs,k,name,val,type=$.type(o);if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return String(o);}
if(type==='string'){return $.quoteString(o);}
if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(type==='date'){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||'null');}
return'['+pairs.join(',')+']';}
if(typeof o==='object'){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type!=='function'&&type!=='undefined'){val=$.toJSON(o[k]);pairs.push(name+':'+val);}}}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){return eval('('+str+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+str+')');}
throw new SyntaxError('Error parsing JSON, source is not valid.');};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+str+'"';};}(jQuery));;$("#headerCategoryItems .headerCategoryItem").RoamHoverDelay({hoverDuring:200,outDuring:200,hoverEvent:function(){$(this).find(".categoryMore").stop().animate({display:"show",left:"200px"})},outEvent:function(){$(this).find(".categoryMore").stop().hide().css("left","190px");}});function addToCart(goodsId,parentId,isLimit,buyNow)
{var goods=new Object();var spec_arr=new Array();var quick=0;var spec=$('.goodnavright .size li.selected').find('input').attr('value');if(spec!=''&&spec!=null)
spec_arr[0]=spec;var number=$('#buy-num').attr('value');if(typeof(number)=='undefined')
{quick=0;number=1;}
if(!/^[0-9]*$/.test(number)||number==0)
{number=1;quick=1;}
if(isLimit==1&&$('#can_buy').attr('value')<number)
{layer.alert("对不起，您购买的数量已超过本活动的限制，请重新输入购买数量");return;}
goods.quick=quick;goods.spec=spec_arr;goods.goodsId=goodsId;goods.number=number;goods.isLimit=isLimit;goods.buyNow=buyNow;goods.parent=(typeof(parentId)=="undefined")?0:parseInt(parentId);$.post("flow.html?act=addToCart",{goods:$.toJSON(goods)},addToCartResponse,'JSON');}
function addToCartResponse(data)
{layer.closeAll();if(data.result==0)
{if(data.error==99){imeLai_Box.imeLar_LoginBox();}
else if(data.error==2){layer.confirm(data.msg,function(){window.location.href="user.html?act=add_booking&id="+data.goodsId+"&spec="+data.goodsSpec;});}
else if(data.error==6){cartLayer=layer.open({type:1,title:false,closeBtn:0,area:'auto',maxWidth:'auto',fix:true,content:data.html});}else{layer.msg(data.msg,{time:2000});}}
else
{if(data.oneStepBuy=='1'||data.buyNow==1)
{if(data.buyNow==1){window.location.href=data.url;}}else{cartLayer=layer.open({type:1,title:false,closeBtn:0,area:['420px','200px'],fix:true,content:data.html});}}}
function gotoBuy(goodsId,parentId)
{var goods=new Object();var spec_arr=new Array();var fittings_arr=new Array();var number=1;var input_arr=document.getElementsByTagName('input');var quick=1;var spec_arr=new Array();var j=0;for(i=0;i<input_arr.length;i++)
{var prefix=input_arr[i].name.substr(0,5);if(prefix=='spec_'&&(((input_arr[i].type=='radio'||input_arr[i].type=='checkbox')&&input_arr[i].checked)))
{spec_arr[j]=input_arr[i].value;j++;}}
goods.quick=quick;goods.spec=spec_arr;goods.goodsId=goodsId;goods.number=number;goods.parent=(typeof(parentId)=="undefined")?0:parseInt(parentId);$.post('flow.html?act=addToCart',{goods:$.toJSON(goods)},addToCartResponse,'JSON');}
function cancelToCart(){layer.close(cartLayer);window.location.reload();}
var imeLai_Box={imeLar_Side:function(countGoods){if(countGoods){var imbar_with=$(".imelaiSider").css("width");if(imbar_with=='42px')
{$(".imBarwarp").addClass("imBarwarpbg");$(".imelaiSider").animate({width:"300px"});$(".imBarcontent").animate({width:"258px"});$("body").on("click.imBarplus",function(){imeLai_Box.imeLar_Side(countGoods);});$(document).on("#imeBarcartlist","click",function(event){event.stopPropagation();})}
else
{$(".imBarwarp").removeClass("imBarwarpbg");$(".imelaiSider").animate({width:"42px"});$(".imBarcontent").animate({width:"0px"});$("body").unbind(".imBarplus");}}else{return false;}},imeLar_LoginBox:function(){$("#imeShadow").addClass("imeShadowcurrent");$("#imeMask").fadeIn();$("#imeShadow").show();$(".goodbody").addClass("imeBlue");var username=$.cookie("imelai[username]");if(username)
{$("#iuusername").val(username);$("#iuremember").attr("checked","checked");}
else{$("#iuremember").removeAttr("checked");}
return;},imeLar_LoginBox_close:function(){$("#imeShadow").removeClass("imeShadowcurrent");$("#imeMask").fadeOut();$("#imeShadow").hide();$(".goodbody").removeClass("imeBlue");}}
$(".imelaiSider").animate({right:"0px"});$(".imeGotop").click(function(){$('html,body').animate({'scrollTop':0},100);})
$(window).scroll(function(){if($(this).scrollTop()>50){$(".imeGotop").show(100);}
else{$(".imeGotop").hide(100);}})
$("#loginSubmitBtn").click(function(){imeLogin();});$(".imeuserClose i").click(function(){imeLai_Box.imeLar_LoginBox_close();})
function imeLogin()
{$("#iuusername").removeClass("null");$("#iupassword").removeClass("null");var uname=$("#iuusername").val();var upwd=$("#iupassword").val();if(uname.length<=0){$("#iuusername").addClass("null");$("#iuusername").focus();return;}
if(upwd.length<=0){$("#iupassword").addClass("null");$("#iupassword").focus();return;}
var loginData={objLogin:uname,password:upwd,remember:($("#iuremember").attr("checked")=="checked")?1:0,backAct:'',};doLogin(loginData);}
function doLogin(loginData)
{$.ajax({async:false,type:'POST',url:"passport.php?act=doLogin",dataType:"json",data:loginData,success:function(data)
{if(data.result==1)
{if(data.nextUrl){window.location.href=data.nextUrl+"?backurl"+window.location.href;}
else if(data.backAct){window.location.href=data.backAct+"?backurl"+window.location.href;}
else{window.location.reload();}}
else
{$("#errLogin").html("觅来用户名和密码不匹配,请重新输入");}},error:function()
{$("#errLogin").html("登陆错误，请稍后再试");}});};var j=-1;var temp_str;var cookieName="IMSearch";function ajax_keyword(V)
{if($.trim(V).length<1)
{HistoryRead();return;}
$.ajax({url:"http://www.imelai.com:6662/CacheImelai/GetSearchSuggest?keywords="+encodeURI($.trim(V))+"&invoke=search_response",type:"get",dataType:"jsonp",success:function(data){},error:function(jqXHR,textStatus,errorThrown){}});}
function search_response(result)
{var ele=$("#hsearchSuggest");if(result.content!=null&&result.content!="")
{var content="";var li="<li onmouseout='javascript:suggestOut(this);' onmouseover='javascript:suggestOver(this);' onclick='javascript:form_submit(this);'><span class='suggest-key'>[keywords]</span><span class='suggest-count'>约[num]商品</span></li>";var liSn="<li onmouseout='javascript:suggestOut(this);' onmouseover='javascript:suggestOver(this);'><a href='javascript:addToCart([goods_id])'>[[goods_sn]]</a><span class='suggest-key'><a href='javascript:ShowConCat(3,[goods_id]);'>[goods_name]</a></span></li>";$(result.content).each(function(index){var sgtLi=result.content[index];catRemark="";switch(sgtLi.type)
{case 1:catRemark="&nbsp;&nbsp;查看分类：";content+=li.replace("[keywords]",catRemark+"<font color=red>"+sgtLi.title+"</font>").replace("[num]",sgtLi.sum).replace("onclick='javascript:form_submit(this);'","onclick='javascript:ShowConCat(1,"+sgtLi.remark+");'");content+="<hr/>";break;case 2:catRemark="&nbsp;&nbsp;查看品牌:";content+=li.replace("[keywords]",catRemark+"<font color=red>"+sgtLi.title+"</font>").replace("[num]",sgtLi.sum).replace("onclick='javascript:form_submit(this);'","onclick='javascript:ShowConCat(2,"+sgtLi.remark+");'");;content+="<hr/>";break;case 3:catRemark="";content+=li.replace("[keywords]","").replace("[num]",sgtLi.sum);break;case 5:content+=liSn.replace(/\[goods_id\]/g,sgtLi.sum).replace(/\[goods_sn\]/g,sgtLi.remark.toUpperCase()).replace(/\[goods_name\]/g,sgtLi.title);break;default:catRemark="";content+=li.replace("[keywords]",catRemark+sgtLi.title).replace("[num]",sgtLi.sum);break;}});ele.innerHTML="<ol>"+content+"</ol>";$("#hsearchSuggest").style.display="block";}
else
{closediv();return;}}
function keyupdeal(e,V)
{initdiv();if(temp_str==V)return;if(V==""){temp_str="";closediv();HistoryRead();return;}
var keyc;if(window.event){keyc=e.keyCode;}else if(e.which){keyc=e.which;}
if(keyc==1)return;if(keyc!=40&&keyc!=38){ajax_keyword(V);temp_str=V;}}
function form_submit(obj)
{$("#keyword").value=obj.childNodes[0].firstChild.nodeValue;$("#headerSearchForm").submit();}
function keydowndeal(e)
{var keyc;var obj=$("#hsearchSuggest");if(window.event){keyc=e.keyCode;}else if(e.which){keyc=e.which;}
if(keyc==40||keyc==38)
{if(keyc==40)
{if(j<$N(obj,"li").length){j++;if(j>=$N(obj,"li").length){j=-1;}}
if(j>=$N(obj,"li").length){j=-1;}}
if(keyc==38)
{if(j>=0){j--;if(j<=-1){j=$N(obj,"li").length;}}else{j=$N(obj,"li").length-1;}}
set_style(obj,j);if(j>=0&&j<$N(obj,"li").length){$("#keyword").value=$N(obj,"li")[j].childNodes[0].firstChild.nodeValue;}
else{$("#keyword").value=temp_str;}}}
function set_style(obj,num)
{for(var i=0;i<$N(obj,"li").length;i++){var li_node=$N(obj,"li")[i];li_node.className="";}
if(j>=0&&j<$N(obj,"li").length){var i_node=$N(obj,"li")[j];$N(obj,"li")[j].className="selected";}}
function closediv()
{document.getElementById("hsearchSuggest").innerHTML="";document.getElementById("hsearchSuggest").style.display="none";}
function initdiv(){var x=0,y=0;p=$("#keyword");while(p)
{x+=p.offsetLeft||0;y+=p.offsetTop||0;p=p.offsetParent;}}
function suggestOver(obj)
{_over();obj.className='selected';}
function suggestOut(obj)
{_out();obj.className='';}
function AddEvent(a,b,c){!document.all?a.addEventListener(b,c,false):a.attachEvent("on"+b,c);}
function DelEvent(a,b,c){!document.all?a.removeEventListener(b,c,false):a.detachEvent("on"+b,c);a.onblur="";}
function _over()
{DelEvent($$('keyword'),'blur',closediv);}
function _out()
{AddEvent($$('keyword'),'blur',closediv);}
window.onresize=function(){initdiv();}
$(function(){if($("#keyword").val()==""||$("#keyword").val()==" ")
{$.ajax({async:true,url:"http://www.imelai.com:6662/CacheImelai/GetSearchSuggest?keywords=&invoke=hotkeywords_response",dataType:"jsonp",data:'',success:function(data){},error:function(){}});}
$("#headerSearchForm").submit(function()
{if($("#keyword").val()==""||$("#keyword").val()==" ")
{$("#keyword").val($("#keyword").attr("placeholder"));HistoryRead();}
else
{HistoryWrite($("#keyword").val());}});});var hotContent;function hotkeywords_response(result)
{if(result.content!=null&&result.content!="")
{hotContent=result.content;$("#keyword").attr("placeholder",result.content[0].title);}}
function ShowConCat(t,id){if(id>0){if(t==1){document.location="category-"+id+".html";}
else if(t==2){document.location="brand-"+id+"-c0.html";}else if(t==3){window.open("goods-"+id+".html","_blank","");}}}
function ClearHi()
{$.cookie(cookieName,"",{expires:30,path:'/'});$("#hsearchSuggest").hide();}
function HistoryWrite(key)
{key=key.trim();if(key<2)
return;var old=$.cookie(cookieName);var vals=key+",";if(old!=null&&old!=""){var items=old.split(',');var pos=$.inArray(key,items);if(pos==-1){$(items).each(function(index){if(index<9&&items[index].length>=2){vals+=items[index]+",";}});}
else{vals+=old.replace(key+",","");}}
$.cookie(cookieName,vals,{expires:30,path:'/'});}
function HistoryRead()
{var old=$.cookie(cookieName);if(old!=null&&old!=""){var items=old.split(',');var content="<li style='color:#bbb; width:100px;padding:10px 0px;font-weight:bolder;'>&nbsp;&nbsp;&nbsp;&nbsp;<span onclick='ClearHi()'>(清空)最近搜过:</span></li>";var li="<li onmouseout='javascript:suggestOut(this);' onmouseover='javascript:suggestOver(this);' onclick='javascript:form_submit(this);' style='width:100px;'><span class='suggest-key'>[keywords]</span></li>";var hotLi="<a onclick='javascript:form_submit(this);' style='margin:6px; padding:5px 10px;border:1px solid #e1e1e1;display:block;float:left;cursor:pointer;'><span>[keywords]</span></a>";var hotDiv="<div style='border-left: 1px solid #f3f3f3; border-image: none; width: 200px; height: 300px; float: right;background-color:#fefefe'><span  style='color:#bbb;width: 100%; padding:3px 20px; display:block;float:left;font-weight:bolder;'>正在热搜中</span>";$(items).each(function(index){if(items[index].length>=2){content+=li.replace("[keywords]",items[index]).replace("[num]",0);}});content="<ol style='clear: both; float: left;'>"+content+"</ol>";if(hotContent!=null)
{content+=hotDiv
$(hotContent).each(function(index){content+=hotLi.replace("[keywords]",hotContent[index].title);});content+="</div>";}
$("#hsearchSuggest").css("padding","5px 0px");$("#hsearchSuggest").html(content);$("#hsearchSuggest").show();}}