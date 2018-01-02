require(["config"],function(){
	require(["jquery","cookie","swiper","conmmon","banner","index","detail","cloudzoom","shop","login"],function(jquery,cookie,swiper,conmmon,banner,index,detail,cloudzoom,shop,login){
		banner.init();
		conmmon.init();
		index.init();
		detail.init();
		shop.init();
		login.init();
		
	})
})