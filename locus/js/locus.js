$(document).ready(function(){
    var dd = 0;
    var vb = -4;
    
    $(".next").on("mousedown",function(){
        dd -= 72;
        
        $('.slide-cube').animate(
            { deg: dd },
            { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
            });

        var bn = $(".slide-all").eq(vb).index();
        console.log(bn);
        vb ++;
        if(vb == -4){
            vb = 4;
        }
        $(".slide-all").removeClass("full");
        $(".slide-all").eq(bn).addClass("full");
     });
    
     $(".prev").on("mousedown",function(){
        dd += 72;
//        console.log(dd);
        
        $('.slide-cube').animate(
            { deg: dd },
            { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
            });

        var bn = $(".slide-all").eq(vb).index();
        console.log(bn);
        vb --;
        if(vb == 0){
            vb = 4;
        }
        $(".slide-all").removeClass("full");
        $(".slide-all").eq(bn).addClass("full");
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