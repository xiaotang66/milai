define(["jquery"],function(){
	function init(){
    $(function(){
     new Swiper ('.swiper-container', {
    autoplay:3000,
    speed:800,
    loop: true,
    effect : 'fade',
     fade: {
    crossFade:false,
        },
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
   
   }) 
    })
     
	}
	return {
		init:init
	}
})


