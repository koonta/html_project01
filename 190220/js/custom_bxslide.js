$(document).ready(function(){

	var myslide = $(".slider").bxSlider({
        auto:false,
        controls:false
       
    });
	
    $(".nextBtn").on("click",function(){
        myslide.goToNextSlide();
    });
    $(".prevBtn").on("click",function(){
        myslide.goToPrevSlide();
    });
    
});















