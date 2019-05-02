$(document).ready(function(){
   
    $(".slide-all").click(function(){
        
        var dd = $(this).index();
        console.log("aa"+dd);
        
        if(dd == 0 ){
             $('.slide-cube').animate(
                    { deg: 72 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotateY(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
        }
        if(dd == 1 ){
             $('#section').animate(
                    { deg: 144 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
        }
        if(dd == 2 ){
             $('#section').animate(
                    { deg: -144 },
                    { duration: 800,step: function(now) {$(this).css({ transform: 'rotateX(0deg) rotate(' + now +'deg) rotateZ(0deg)' });}
                    }
                );
        }
    });
    
    
    
    
    
    
    
    
    
    
});