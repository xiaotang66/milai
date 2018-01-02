define(["jquery"],function(){
	function init(){
		login();
		regest();
		loginbtn();
		regestbtn();
	}
	function login(){
		$(".loginbox").on("blur","input:text",function(){
			$(this).next().css("visibility","hidden");
			console.log($(this).val());         
			   switch ($(this).attr("class")) {
            	case 'username':
            	
            		if(!/^[a-z0-9_-]{3,16}$/.test($(this).val()))
					{ 
						$(this).next().css("visibility","visible");
					}
					else{
						$(this).next().css("visibility","hidden");
					}
            		break;
            	case 'password':
            		if(!/^.{6,16}$/.test($(this).val()))
					{ 
						$(this).next().css("visibility","visible");
					}
					else{
						$(this).next().css("visibility","hidden");
					}
            		break;
            }
		})
	}
	function loginbtn(){
      
		$("#loginbtn").click(function(){
			 $.ajax({
			 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			 	type:"get",
			 	dataType:'json',
			 	data:{
			 		"status":"login","userID":$('.username').val(),"password":$('.password').val()
			 	},
			 	success:function(data){
                    if(data==0)
					{
						alert("用户名不存在");
					}
					else if(data==2)
					{
						alert("密码错误");
					}
					else if(typeof(data)==="object"&&$('.username').val()!=""){
						alert("登陆成功");
					}
					else{
						alert("登陆错误！")
					}
			 	}  

			 })

		})
	}
	function regest(){
        $(".regestbar").on("blur","input",function(){    
			   switch ($(this).attr("class")) {
            	case 'username':
            		if(!/^[a-z0-9_-]{3,16}$/.test($(this).val()))
					{ 
						$(this).prev().children('em').css("visibility","visible");
					}
					else{
						$(this).prev().children('em').css("visibility","hidden");
					}
            		break;
            	case 'password':
            		if(!/^.{6,16}$/.test($(this).val()))
					{ 
						$(this).prev().children('em').css("visibility","visible");
					}
					else{
						$(this).prev().children('em').css("visibility","hidden");
					}
            		break;
            	case 'pwd':
            		if($(".pwd").val()!=$(".password").val())
					{ 
						$(this).prev().children('em').css("visibility","visible");
					}
					else{
						$(this).prev().children('em').css("visibility","hidden");
					}
            		break;
            }
		})
	}
	function regestbtn(){
			$("#regesbtn").click(function(){
				console.log(1);
			 $.ajax({
			 	url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			 	type:"get",
			 	dataType:'json',
			 	data:{
			 		"status":"register","userID":$('.username').val(),"password":$('.password').val()
			 	},
			 	success:function(data){
                   switch(data)
					   {
						case 0:
						alert("用户名重复,请重新输入");
						break;
						case 1:
						alert("注册成功");
						break;
						case 2:
						alert("数据库错误");
						break;
					  }
			 	}  

			 })

		})
	}
	return {
		init:init
	}
})