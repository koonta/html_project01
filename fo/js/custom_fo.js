$(document).ready(function(){
    
	var myslide = $(".slider").bxSlider({
        auto:true,
        controls:false
       
    });
	
    $(".nextBtn").on("click",function(){
        myslide.goToNextSlide();
    });
    $(".prevBtn").on("click",function(){
        myslide.goToPrevSlide();
    });
	
});

 function menuOpen (){
        var x = document.getElementById('myTopmenu');
        if(x.className == "subgnb01a"){
            x.className += " responsive";
        }else{
            x.className = "subgnb01a";
        }
    }













