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
     
             
       
        

   
    
    
    
    
    
    
    
    
    
    
});