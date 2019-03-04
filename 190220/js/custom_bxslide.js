$(document).ready(function(){

	var myslide = $(".slider").bxSlider({
        auto:true,
        controls:false,
        pagerCustom:'.bx-pager'
       
    });
	
    $(".nextBtn").on("click",function(){
        myslide.goToNextSlide();
    });
    $(".prevBtn").on("click",function(){
        myslide.goToPrevSlide();
    });
    
});















