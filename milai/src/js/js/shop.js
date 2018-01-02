define(["jquery"],function(){
	function init(){
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
			insert(data);//将数据插入页面
			check();//全选反选
			calader1();//商品加减
			remove();//单个商品删除
			clearcar();//删除全部商品
			getsum()//获取已选订单总金额
		}
      })
	}
	function insert(data)
	{
      var str4=""
      var aa="";
      var obj={};
      var sum=0;
      var obj1 = $.cookie("shopcar");
			if(obj1){
				obj = JSON.parse(obj1);
				for(var $i in obj)
				{
					if($i<=data[0].top.length)
					{
					for(var $j in data[0].top)
						{
							
							if($i==$j)
							{
							$index=$i-1;
							aa=data[0].top[$index];
							str4="<li> <div class='detail'><input type='checkbox'  class='acheck'><a href='#'' class='pic'><img src="+aa.pic+"></a><a href='#'' class='detail-title'>"+aa.title+"</a></div><p>￥<em>"+aa.price+"</em></p> <div class='calender'><a href='##'' class='reduce'>-</a><input type='text' value="+obj[$i]+" class='n' id="+$i+"> <a href='##' class='add'>+</a></div><p>￥<em>"+parseInt(aa.price)*obj[$i]+"</em>.00</p><span class='delbox'><a href='##' class='delet' id="+$i+">删除</a><a href='##'>移入收藏夹</a></span> </li>"
	                        $("#shop-list").append(str4); 
							}
						}
						
					}
					if(4<$i&&$i<=15)	
					{

					for(var $j in data[1].conten)
						{
							
							 $index=$i-data[0].top.length-1;
							
							if($index==$j)
							{
							  $index=$i-data[0].top.length-1;
							  aa=data[1].conten[$index];
							  str4="<li> <div class='detail'><input type='checkbox'  class='acheck'><a href='#'' class='pic'><img src="+aa.pic+"></a><a href='#'' class='detail-title'>"+aa.title+"</a></div><p>￥<em>"+aa.price+"</em></p> <div class='calender'><a href='##'' class='reduce'>-</a><input type='text' value="+obj[$i]+" class='n' id="+$i+"> <a href='##' class='add'>+</a></div><p>￥<em>"+parseInt(aa.price)*obj[$i]+"</em>.00</p><span class='delbox'><a href='##' class='delet' id="+$i+">删除</a><a href='##'>移入收藏夹</a></span> </li>"
	                          $("#shop-list").append(str4); 
							}	
						}
					}
					if(16<$i&&$i<61)
					{
					for(var $j in data[3].shop)
						{
							if($i==$j)
							{
							  $index=$i-data[0].top.length-data[1].conten.length-2;
							  aa=data[3].shop[$index];
							  str4="<li> <div class='detail'><input type='checkbox'  class='acheck'><a href='#'' class='pic'><img src="+aa.pic+"></a><a href='#'' class='detail-title'>"+aa.title+"</a></div><p>￥<em>"+aa.price+"</em></p> <div class='calender'><a href='##'' class='reduce'>-</a><input type='text' value="+obj[$i]+" class='n' id="+$i+"> <a href='##' class='add'>+</a></div><p>￥<em>"+parseInt(aa.price)*obj[$i]+"</em>.00</p><span class='delbox'><a href='##' class='delet' id="+$i+">删除</a><a href='##'>移入收藏夹</a></span> </li>"
	                          $("#shop-list").append(str4); 
							}
						}
						
					}
				}
		 }
	}
	function getsum(){
		var $count=0
	  $(".acheck").click(function(){
	  	$count++;
	  	 var $sum= parseInt($(".sum").html());
	  	 $sum=$sum+parseInt($(this).parent().siblings().eq(2).children('em').html());
	     $(".sum").html($sum);
	     $(".count").html($count)
	  })
	 
	}
	function calader1(){
		var $obj1 = $.cookie("shopcar");
		var $obj = JSON.parse($obj1);
         $(".reduce").click(function(){
         	var $id=$(this).next().attr("id");
           for(var $i in $obj)
		{
         	if($id==$i)
         	{
 	          $obj[$id]--;
 	           if($obj[$id]<=1){  
 	       	     $obj[$id]=1;
 	         }
 	          $(this).next().val($obj[$id]); 
 	         var $persum = parseInt($(this).parent().prev().children('em').html())*$obj[$id];
 	        console.log( $(this).parent().next().children('em').html());
 	         $(this).parent().next().children('em').html($persum)
 	              
         	}
        }
          $.cookie("shopcar",JSON.stringify($obj), { path: "/", expires: 7 });
      })

      $(".add").click(function(){
      	var $id=$(this).prev().attr("id");
      	  for(var $i in $obj){
         	if($id==$i)
         	{
 	          $obj[$id]++;
 	           $(this).prev().val($obj[$id]); 
 	            var $persum = parseInt($(this).parent().prev().children('em').html())*$obj[$id];
 	            $(this).parent().next().children('em').html($persum)    
         	}
         }
          $.cookie("shopcar",JSON.stringify($obj), { path: "/", expires: 7 });
         
	})
	}
	function remove(){
      $(".delet").click(function() {
        var $obj1 = $.cookie("shopcar");
		var $obj = JSON.parse($obj1);
        $(this).parent().parent().remove();
        var $id=$(this).attr("id");
        console.log($id)
        for(var $i in $obj)
        {
           if($id==$i)
           {
           	delete $obj[$id];
           }
        }
         $.cookie("shopcar",JSON.stringify($obj), { path: "/", expires: 7 });  
      });
	}
	function clearcar(){
		$(".clearcar").click(function(){
			$("#shop-list>li").remove();
			$.cookie("shopcar","", { path: "/", expires: -1 }); 
		})
	}
	function check(){
		var stop=true;
			$(".allcheck").click(function(){
				  if($(".allcheck").prop("checked")){
						$(".acheck").prop("checked",true);
				}
				else{
					$(".acheck").prop("checked",false);
				}
				
			})	
			$(".detail input:checkbox").on('click', function() {	
			if($(".detail input:checkbox").length === $(".detail input:checked").length) {
                $(".allcheck").prop("checked", true);
            } else {
                $(".allcheck").prop("checked", false);
            }
         })
	}
	return {init:init}
})