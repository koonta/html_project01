$(document).ready(function(){

//	$("button.b1").click(function(){
//        $("img").animate({width: '100px'})
//    });
//	$("button.b2").click(function(){
//        $("img").animate({width: '200px'})
//    });
//    $("button.b3").click(function(){
//        $("img").animate({width: '300px'})
//    });
//    
//    
//    $("button.move").click(function(){
//        $("img").animate({
//            left: '300px',
//            height: '300px',
//            width: '350px'
//        })
//    });
//    
//    $("button.init").click(function(){
//        $("img").animate({
//            left: '0px',
//            height: '100px',
//            width: '130px'
//        })
//    });
    
   // 2번
    
//    $("button#out").click(function(){
//        $("img").fadeOut("slow");
//    });
//    $("button#in").click(function(){
//        $("img").fadeIn("slow");
//    });
//    $("button#toggle").click(function(){
//        $("img").fadeToggle("slow");
//    });
//    $("button#to50").click(function(){
//        $("img").fadeTo("slow", 0.5);
//    });
//    $("button#to10").click(function(){
//        $("img").fadeTo("slow", 0.1);
//    });
//    $("button#to100").click(function(){
//        $("img").fadeTo("slow", 1.0);
//    });
    
//    3번
//    $("#slide").click(function(){
//        $("#panel").slideDown(4000);
//    });
//    $("#flip").click(function(){
//        $("#panel").slideUp(4000);
//    });
//    $("#stop").click(function(){
//        $("#panel").stop();
//    });
//});

//4번
    
//    $("#slide").click(function(){
//        $("#panel").css("color", "red")
//        .slideDown(2000)
//        .slideUp(6000)
//        .fadeTo("slow", 0.3);
//    });

    
    
        
    
    
});

//5번
function move(obj, time){
        $(obj).stop().animate({
            right:-600,
            top:0
        }, time);
    }
    
function back(a) {
    $(a).stop().animate({
       right:0,
        top:0
    });
}








