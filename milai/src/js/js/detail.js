define(["jquery"],function($){
	var dataurl=window.location.href;
    var arr=dataurl.split("?");
    var n=1;
     var obj={};
	function init(){
		  CloudZoom.quickStart();
		  getajax();
		  
	}
	function getajax(){
		$.ajax({
	url: '../json/milai.json',
	type: 'get',
	data:{
		//需要提交的数据
	},
	dataType:'json',
    success:function(data){
			
			insert(data);
			calader(n);
			setcookie();
			magnifier();
		}
      })
	}
	function insert(data){
		var aa="";
		var $index=0;
			if(arr[1]<=data[0].top.length)
			{
               $index=arr[1]-1;
                aa=data[0].top[$index];
			}
			if(4<arr[1]&&arr[1]<=15)
			{
                $index=arr[1]-data[0].top.length-1;
                 aa=data[1].conten[$index];
                
			}
			if(16<arr[1]&&arr[1]<61)
			{
                $index=arr[1]-data[0].top.length-data[1].conten.length-2;
                aa=data[3].shop[$index];
			}
		var $str="";
		$str="<p class='position'>当前位置: 觅来 > 手机电脑 > 手机通讯 > 手机 > 三星（SAMSUNG）</p><div class='magnifier'><ul><li><img src="+aa.smallpic.small1+" data-url='aa.smallpic.small1'><div class='circle'></div></li><li> <img src="+aa.smallpic.small2+" data-url='aa.smallpic.small2'><div class='circle'></div></li><li><img src="+aa.smallpic.small3+" data-url='aa.smallpic.small3'><div class='circle'></div></li><li><img src="+aa.smallpic.small4+" data-url='aa.smallpic.small4'><div class='circle'></div></li><li><img src="+aa.smallpic.small5+" data-url='aa.smallpic.small5'><div class='circle'></div></li></ul><div class='magnbox'><img src="+aa.smallpic.small1+" class='middlebox'><div class='filter'></div></div></div><div class='magnifier-right'><h3>"+aa.title+"</h3><i>觅来货号："+aa.num+"</i><p><em>"+aa.price+"</em><del>专柜价："+aa.price+"</del><i>赠送觅宝数量：7388</i></p><div class='parameter'><span><i>品牌：</i><b> "+aa.brand+"</b></span><span><i>销量：</i><b>109</b></span><span class='num'><i>数量：</i><div><input type='text' value='1'/><span><a href='##' class='add'>+</a><a href='##' class='reduce'>-</a></span></div></span><div class='shopcar'> <a href='##' class='buy'>立即购买</a><a href='##' class='insert' id='insert1'>加入购物车</a></div></div></div>"
	   $("#content").html($str);
	   var $str1="";
	   $str1="<img src="+aa.shoppic.shop1+"><img src="+aa.shoppic.shop2+"><img src="+aa.shoppic.shop3+"><img src="+aa.shoppic.shop4+"><img src="+aa.shoppic.shop5+">";
	   $("#goods-pic").html($str1);
	}

	function setcookie(){
		$("#insert1").click(function(){
			var obj1 = $.cookie("shopcar");
			if(obj1){
				obj = JSON.parse(obj1)
				if(!obj[arr[1]])
				{
					obj[arr[1]]=1;
				}
				else{
					var n1=obj[arr[1]];
					n1++;
					obj[arr[1]]=n1;
				}
			}else{
				if(!obj[arr[1]])
				{
					obj[arr[1]]=1;
				}
				else{
					var n1=obj[arr[1]];
					n1++;
					obj[arr[1]]=n1;
				}
			}
			console.log(obj)
			 $.cookie.raw = true;
			 $.cookie("shopcar",JSON.stringify(obj), { path: "/", expires: 7 });
             var str3='<div class="box">加入购物车成功</div>';
             $("body").append(str3);
             setTimeout(function(){
             	$(".box").remove();
             },1000)
		})
	}
	function calader(n){
      $(".reduce").click(function(){
 	          n--;
 	       if(n<=1){  
 	       	  n=1;
 	       }
          $(this).parent().siblings().val(n);
           setcookie(n);

      })
      $(".add").click(function(){
           n++;
          $(this).parent().siblings().val(n);
          setcookie(n);
         
	})
   

  }
  function magnifier(){
  	$(".magnbox").mouseover(function(event) {
  		$(this).children('img').stop(true).animate({
  			"width": 800,
  			"height":800},
  			500);
  	})
  	$(".magnbox").mouseout(function(event) {
  		$(this).children('img').stop(true).animate({
  			"width":400,
  			"height":400,
  			"fadeIn":400},500);
  	    $(".middlebox").css({
  			"left":0,
  			"top":0,
  		})
  	});
  	$(".magnbox").mousemove(function(event) {
  		 var e=event;
  		 var l=$(this).scrollTop()+$(this).offset().left+parseInt($(".filter").width())/2;
  		 var t=$(this).offset().top+parseInt($(".filter").height())/2;
  		$(".filter").css({
  			"left":e.screenX-l,
  			"top":e.screenY-t,
  		})
  		$(".middlebox").css({
  			"left":-1.5*(e.screenX-l),
  			"top":-1.5*(e.screenY-t),
  		})
  		 console.log(e.screenX-l,e.screenY);
  	});
  	$(".magnifier li").mouseover(function(){
      var $dataurl=$(this).children('img').attr("src");
       $(".middlebox").attr("src",$dataurl)
  	})
  }
	return{
		init:init
		
	}
})