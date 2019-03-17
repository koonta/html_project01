$(document).ready(function(){

//	$(".snsbox>ul>li").click(function(){
//        $(".ssnswrap").show();
//    });
//    $(".ssbox01>img").click(function(){
//        $(".ssnswrap").css("display","block");
//    });
	
    $("body").append("<div id='glayLayer'></div>");
    
    var t = $(".snsbox>ul>li.li_01>a");
    var s = t.index();
    console.log("ccc");
    
    $(t).click(function(e){
        e.preventDefault();
        $("#glayLayer").css("display","block");
        $(".ssnswrap").css("display","block");
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_01").css({'background': 'white', 'position': 'absolute', 'z-index': "100"});
        return false;
    });
    
    $(".ssbox01>a>img, #glayLayer").click(function(){
        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".ssnswrap").css("display","none");
        $(".snsbox>ul>li.li_01").css({'background':'none','z-index': '0', 'position':'inherit'})
    });
    
    $(".li_02>a").click(function(e){
        e.preventDefault();
        $("#glayLayer").css("display","block");
        $(".ssnswrap02").css("display","block");
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_02").css({'background': 'white', 'z-index': "100"});
        return false;
    });
    
    $(".sss_01>a>img, #glayLayer").click(function(){
        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".ssnswrap02").css("display","none");
        $(".snsbox>ul>li.li_02").css({'background':'none','z-index': '0'})
    });
    
    $(".li_03>a").click(function(e){
        e.preventDefault();
        $("#glayLayer").css("display","block");
        $(".ssnswrap03").css("display","block");
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_03").css({'background-color': 'white', 'z-index': "100"});
        return false;
    });
    
    $(".sss_03>a>img, #glayLayer").click(function(){
//        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".ssnswrap03").css("display","none");
        $(".snsbox>ul>li.li_03").css({'background-color':'#eee', 'z-index': '0'})
    });
    
    
    $(".sss_04>ul.ssss_04>li").click(function(){
        var i = $(this).index();
        
        $(".sss_04>ul.ssss_04>li").removeClass();
        $(".sss_04>ul.ssss_04>li").eq(i).addClass("on");
        console.log(i);
    });
    
    $(".li_04>a").click(function(e){
        e.preventDefault();
        $("#glayLayer").css("display","block");
        $(".f_01").css("display","block");
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_04").css({'background-color': 'white', 'z-index': "100"});
        return false;
    });
    
    $(".f_01>.xbox>a>img, #glayLayer").click(function(){
//        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".f_01").css("display","none");
        $(".snsbox>ul>li.li_04").css({'background-color':'#eee', 'z-index': '0'})
    });
    
    $(".li_05>a").click(function(e){
        e.preventDefault();
//        $("#glayLayer").css({"display":"none", "z-index":"1"});
        $(".f02wrap").css({"display":"block", "z-index": "0"});
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
         $(".smwrap").css("display","none");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_05").css({'background-color': 'white', 'z-index': "100"});
        return false;
    });
    
    $(".fs_01>a>img").click(function(){
        console.log("bbb");
        $(".smwrap").css("display","block");
        $(".f02wrap").css({'display': 'none'});
        $(".snsbox>ul>li.li_05").css({'background-color':'#eee', 'z-index': '0'});
    });
    
    var df = $(this).index();
    var hg = 0;
    var dg = 0;
    
    $(".gnb_ul>.d01").mouseover(function(){
        $(".gwrap").stop().slideDown();

    });
    $(".gnb_ul>.d01").mouseleave(function(){
        $(".gwrap").stop().hide();
    });
    
    $(".gnb_ul>.d02").mouseover(function(){
        $(".gwrap02").stop().slideDown();

    });
    $(".gnb_ul>.d02").mouseleave(function(){
        $(".gwrap02").stop().hide();
    });
    
    $(".gnb_ul>.d03").mouseover(function(){
        $(".gwrap03").stop().slideDown();

    });
    $(".gnb_ul>.d03").mouseleave(function(){
        $(".gwrap03").stop().hide();
    });
    
     $(".gnb_ul>.d04").mouseover(function(){
        $(".gwrap04").stop().slideDown();

    });
    $(".gnb_ul>.d04").mouseleave(function(){
        $(".gwrap04").stop().hide();
    });
    
    $(".gnb_ul>.d05").mouseover(function(){
        $(".gwrap05").stop().slideDown();

    });
    $(".gnb_ul>.d05").mouseleave(function(){
        $(".gwrap05").stop().hide();
    });
    
    $(".gnb_ul>.d06").mouseover(function(){
        $(".gwrap06").stop().slideDown();

    });
    $(".gnb_ul>.d06").mouseleave(function(){
        $(".gwrap06").stop().hide();
    });
    
    $(".gnb_ul>.d07").mouseover(function(){
        $(".gwrap07").stop().slideDown();

    });
    $(".gnb_ul>.d07").mouseleave(function(){
        $(".gwrap07").stop().hide();
    });
    
//    슬라이드
        var current = 0;
    var banner = $(".banner").find("ul");
    
    var wrapWidth = $(window).outerWidth();
    var liCount = $(".banner>ul>li").length;
    
    $(".banner>ul>li").css("width",wrapWidth);
    $(".banner>ul").css("width",wrapWidth*liCount);
    
    $(window).resize(function(){
        wrapWidth = $(window).outerWidth();
        $(".banner>ul>li").css("width",wrapWidth);
        $(".banner>ul").css("width",wrapWidth*liCount);
        $(".banner>ul").css({left:current*wrapWidth*-1});
    });
    
    $("#btn_next").click(function(){
        
        if(current>=0){
            current++;
            if(current == 3) { current=0};
            listMove();
        }

    });
    $("#btn_prev").click(function(){
        
        if(current>=0){
            current--;
            if(current == -1) { current=2};
            listMove();
        }

    });
    
    $(".bts").click(function(){
        current = $(this).index();
        
        
        listMove();
    });
    function listMove(){
        $(".banner>ul").stop().animate({left:current*wrapWidth*-1});
        
            $(".bts").css("bakcground-color","white");
            $(".bts").eq(current).css("background-color","white");
            $(".bts").eq(current-1).css("background-color","transparent");
            $(".bts").eq(current+1).css("background-color","transparent");
       
    }
    
    var timeID;
    timer();
    function timer(){
        timeID = setInterval(function(){
            $("#btn_next").trigger("click");
        }, 8000);
    }
    
    $(".banner").on({
        mouseover:function(){
            clearInterval(timeID);
        },
        mouseleave:function(){
            timer();
        }
    })
    
    
});















