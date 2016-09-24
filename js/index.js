$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true,
			    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
				    swiperAnimateCache(swiper); //隐藏动画元素 
				    swiperAnimate(swiper); //初始化完成开始动画
			    }, 
			    onSlideChangeEnd: function(swiper){ 
			        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			    } 
			    
			  })        
  
})
    	      
$(function(){
	var str=""
	for(var i=0;i<25;i++){
		var sec=Math.floor(Math.random()*6+6)
		var R=Math.random()
		str += '<i style="animation:snow '+sec+'s linear infinite; right:'+R*640+'px"></i>'
		$(".snow").append(str)
	}
})
   