$(document).ready(function(){
    
    
//    1번
//	$("ul.sub").css("display", "none");
//    $("#menu>ul>li").mouseover(function(){
//        var i = $(this).index();
//        $("#menu>ul>li>ul").eq(i).css("display","block");
//    }).mouseout(function(){
//        $("ul.sub").css("display","none")
//    });
	
//    $("ul.sub").hide();
//    $("#menu>ul>li").mouseover(function(){
//        var i=$(this).index();
//        $("#menu>ul>li>ul").eq(i).show();
//    }).mouseleave(function(){
//        $("ul.sub").hide();
//    });
    
//    $("ul.sub").hide();
//    $("#menu>ul>li").mouseover(function(){
//        var i = $(this).index();
//        $("#menu>ul>li>ul").eq(i).stop().slideDown();
//    }).mouseout(function(){
//        $("ul.sub").stop().slideUp();
//    });
    
//    2번
    
//    var current = 0;
//    var banner = $(".banner").find("ul");
//    
//    var wrapWidth = $(window).outerWidth();
//    var liCount = $(".banner>ul>li").length;
//    
//    $(".banner>ul>li").css("width",wrapWidth);
//    $(".banner>ul").css("width",wrapWidth*liCount);
//    
//    $(window).resize(function(){
//        wrapWidth = $(window).outerWidth();
//        $(".banner>ul>li").css("width",wrapWidth);
//        $(".banner>ul").css("width",wrapWidth*liCount);
//        $(".banner>ul").css({left:current*wrapWidth*-1});
//    });
//    
//    $("#btn_next").click(function(){
//        
//        if(current>=0){
//            current++;
//            if(current == 5) { current=0};
//            listMove();
//        }
//
//    });
//    $("#btn_prev").click(function(){
//        
//        if(current>=0){
//            current--;
//            if(current == 0) { current=4};
//            listMove();
//        }
//
//    });
//    
//    $(".bts").click(function(){
//        current = $(this).index();
//        
//        
//        listMove();
//    });
//    function listMove(){
//        $(".banner>ul").stop().animate({left:current*wrapWidth*-1});
//        
//            $(".bts").css("color","white");
//            $(".bts").eq(current).css("color","red");
//       
//    }
//    
//    var timeID;
//    timer();
//    function timer(){
//        timeID = setInterval(function(){
//            $("#btn_next").trigger("click");
//        }, 3000);
//    }
//    
//    $(".banner").on({
//        mouseover:function(){
//            clearInterval(timeID);
//        },
//        mouseleave:function(){
//            timer();
//        }
//    })
    
//    3번
    
    $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");
    $("ul>li>a.modal").click(function(e){
        e.preventDefault();
        $("#glayLayer").show();
        $("#overLayer").show();
        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        return false;
    });
    
    $("#overLayer, #glayLayer").click(function(){
        $("#glayLayer").hide();
        $("#overLayer").hide();
    });
    
//    colorbox
//    $(".modal").colorbox({rel:'modal', slideshow:true});
//    $(".modal").colorbox({rel:'modal1'});
//    $(".youtube").colorbox({
//        ifame:true,
//        innerWidth:560,
//        innerHeight:315
//    })
    
    
    
    
    
    
    
});















