require(["config"],function(){
	require(["jquery","cookie","swiper","conmmon","banner","index","detail","cloudzoom","shop"],function(jquery,cookie,swiper,conmmon,banner,index,detail,cloudzoom,shop){
		banner.init();
		conmmon.init();
		index.init();
		detail.init();
		shop.init();
		
	})
})