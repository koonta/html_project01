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
        $("#glayLayer").css({"display":"none", "z-index":"1"});
        $(".f02wrap").css({"display":"block", "z-index": "0"});
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        $(".snsbox>ul>li.li_05").css({'background-color': 'white', 'z-index': "100"});
        return false;
    });
    
    $(".f_01>.xbox>a>img, #glayLayer").click(function(){
//        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".f02wrap").css("display","none");
        $(".snsbox>ul>li.li_04").css({'background-color':'#eee', 'z-index': '0'})
    });
    
    
    
});















