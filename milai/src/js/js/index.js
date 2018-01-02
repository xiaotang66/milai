define(["jquery"],function($){
     function init(){
	   getajax()
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
			click();
		}
      })
	}
	
	function insert(data)
	{
		var $str="";
		var $str1="";
		$str="<a href='##' id="+data[0].top[0].id+"><img src="+data[0].top[0].pic+"></a><a href='##' id="+data[0].top[1].id+"><img src="+data[0].top[1].pic+"></a><span><a href='##' class='bot' id="+data[0].top[2].id+"><img src="+data[0].top[2].pic+"></a><a href='' id="+data[0].top[3].id+"><img src="+data[0].top[3].pic+"></a></span>"
	    $("#top-pic").html($str);
		for(var $i=6; $i<data[1].conten.length;$i++)
		{
           $str1+="<li ><a href='##' class='text' id="+data[1].conten[$i].id+"><img src="+data[1].conten[$i].pic+"><p><em>"+data[1].conten[$i].pric+"</em><b>"+data[1].conten[$i].intruct+"</b></p></a></li>"
		}
		 $("#cont").html($str1);
		 var $str2=""
		 for( var $i=0;$i<5;$i++)
		 {
		 	$str2+="<h4><img src="+data[2].life[$i].pic+"> </h4><div class='bigpic'><a href='##' id="+data[2].life[$i].id+"><img src="+data[2].life[$i].bigpic+"></a></div><ul >";
		 	for(var $j=$i*8;$j<Math.min(($i+1)*8,data[3].shop.length);$j++)
		 	{
                $str2+="<li ><a href='##'  id="+data[3].shop[$j].id+"><img src="+data[3].shop[$j].pic+" class='animate'><div class='backimg'></div></a></li>"
		 	}
             $str2+="</ul>"
		 }
         $("#conten-list1").html($str2);
	}
	function click(){
		var $obj={};
        $(".aclick").on("click","a",function(e){
        	if(this.id)
        	{
        	   window.open("detail.html"+"?"+this.id);
        	}
        })
        $("#conten-list1").on("mouseover","a",function(){
        	$(this).children('.backimg').css("display","block");
           $(this).children('.animate').stop(true).animate({
           	"width": "300", 
			"height":"300", 
			},)
			
		});
	    $("#conten-list1").on("mouseout","a",function()	{
	    	$(this).children('.backimg').css("display","none");
	    	 $(this).children('.animate').stop(true).animate({
				"width": "280", 
				"height": "280", 
			   });
	    })
}
return{
		init:init
	}	
	return {
		getajax:getajax
	}

})



