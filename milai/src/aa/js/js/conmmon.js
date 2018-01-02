
define(["jquery"],function(){
	 function init(){
		$("#header").load("head.html");
        $("#footer").load("foot.html");
	 
	}
	return{
		init:init
	}
})