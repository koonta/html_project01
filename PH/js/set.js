$(function(){
        var slides = $(".slideshow img"),
//        console.log(slides);
        slidecount = slides.length,
        currentIndex = 0;
    
        slides.eq(currentIndex).fadeIn();
        var timer = setInterval(showNextSlide, 3500);
        
        function showNextSlide(){
            var nextIndex = (currentIndex + 1) % slidecount;
            slides.eq(currentIndex).fadeOut();
            slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
        
        function timeron(){
            setInterval(showNextSlide, 3500);
        }
        function timeroff(){
            clearInterval(timer);
        }
    
        $(".slideshow img").mouseover(function(){
            timeroff();
        })
        .mouseout(function(){
            timeron();
        });
    });