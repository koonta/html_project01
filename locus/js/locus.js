$(document).ready(function(){
    var dd = 0;
    $(".next").on("mousedown",function(){
        dd -= 72;
        console.log(dd);
        
        $('.slide-cube').animate(
            { deg: dd },
            { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
            });

        
     });
    
     $(".prev").on("mousedown",function(){
        dd += 72;
//        console.log(dd);
        
        $('.slide-cube').animate(
            { deg: dd },
            { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
            });

        
     });   
    
    
     $(".box").each(function(){
            $(this).on("mousewheel",function(e){
//                e.preventDefault();
                var delta = 0;
                var lk = window.pageYOffset;
                delta = event.wheelDelta/120;
                var moveTop = null; //각페이지의 탑값계산
                if(delta<0){
                   if($(this).next() != undefined){
                      moveTop=$(this).next().offset().top;
                      }
                   }else{
                   if($(this).prev() != undefined){
                      moveTop=$(this).prev().offset().top;
                      }
                   }

                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
        });
    
       
       
        

   
    
    
    
    
    
    
    
    
    
    
});