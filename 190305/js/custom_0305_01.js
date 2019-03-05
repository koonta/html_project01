$(document).ready(function(){
      
    
//    1번
    
//    var ch = $("#child")
//      
//	$("#btn").click(function(){
//      ch.css({'width':'500px', 'height': '500px'});
//    });
	
    
//    2번
//    var current = 0;
//    var image = $("#image>p");
//    var thumnail = $("#thumnail");
//    var container = thumnail.find("div.container > ul");
//    var thumb = container.find("li.thumb");
//    
//    var prev = thumnail.find("div.left");
//    var next = thumnail.find("div.right");
//    
//    next.on("click",function(){
//        if(current <=2){
//            current++;
//            if(current ==3){
//                current = 0}
//            console.log(current);
//                listMove();
//            
//        }
//    });
//    function listMove(){
//        var tl = 760 * current *-1;
//        container.stop().animate({left:tl});
//    }
//    
//    prev.on("click", function(){
//        if(current>=0)
//            current--;
//        if(current== -1) {current = 2}
//        console.log(current);
//        listMove();
//    });
//    function listMove(){
//        var tl = 760 * current *-1 ;
//        container.stop().animate({left:tl});
//    }
//    
//    
//    thumb.on("click",function(){
//        var i = $(this).index();
//        image.css("display","none");
//        image.eq(i).css("display","block");
//    });
    
//   3번 
//    var info = $("#info>p.1");
//    var info2 = $("#info>p.2");
//    
//    $(".car").click(function(){
//        var local = $(this).position(); //상대좌표, 지역좌표(부모기준)
//        var global = $(this).offset(); //절대좌표, 전역좌표(브라우저기준)
//        var str = "상대좌표 x : "+local.left + ", y : "+ local.top+ ", Id :  "+$(this).attr("id")+"<br>";
//        info.html(str);
//        var str2 = "절대좌표 x : "+global.left + ", y : "+ global.top+ ", Id :  "+$(this).attr("id")+"<br>";
//        info2.html(str2);
//    });
    
//    4번
//    var car = $("#car")
//    $("#parent").click(function(e){
//        var left = e.clientX;
//        var top = e.clientY;
//        
//        car.offset({left:left, top:top});
//        
//        
//    });
    
//    5번
    
//    var $info = $("#info");
//    var $panel = $("#panel");
//    var $car = $("#car");
//    
//    $panel.click(function(e){
//        var str = "pageX = "+e.pageX+", pageY = "+e.pageY;
//        $info.html(str);
//        
//        $("#panel").click(function(){
//            var left = e.pageX;
//            var top = e.pageY;
//            
//            
//            $car.stop(e).animate({left:left-160, top:top-130}, 1000);
//        });
//        $("#close").click(function(){
//            window.close();
//        });
//    });
    
//    6번
    
//    $(window).on("scroll",function(){
//        var info = $("#info");
//        var str = "window.pageYOffset="+window.pageYOffset+"<br>";
//        str += "window.pageOffset= "+window.pageXOffset;
//        
//        info.html(str);
//    });
//    $("#gototop").click(function(){
////        window.scrollTop(0,0);
//        $("html, body").stop().animate({scrollTop:0}, 100);
//    });
    
//    7번
    var menu = $("#top_menu>ul>li");
    var contents = $("#contents>div");
    menu.click(function(e){
        e.preventDefault();
        var i = $(this).index();
        var section = contents.eq(i);
        var tt = section.offset().top-114;
        $("html, body").stop().animate({scrollTop:tt},300);
        menu.removeClass("on");
        menu.eq(i).addClass("on");
                        
    });
    $(window).scroll(function(){
        var sct = $(window).scrollTop()+114;
        
        contents.each(function(){
            var tg = $(this);
            var i = tg.index();
            if(tg.offset().top <= sct){
                menu.removeClass('on');
                menu.eq(i).addClass('on');
            }
        });
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
});















