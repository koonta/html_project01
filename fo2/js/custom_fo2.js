$(document).ready(function(){

//	$(".snsbox>ul>li").click(function(){
//        $(".ssnswrap").show();
//    });
//    $(".ssbox01>img").click(function(){
//        $(".ssnswrap").css("display","block");
//    });
	
    $("body").append("<div id='glayLayer'></div>");
    
    var t = $(".snsbox>ul>li").index();
    
    $(".snsbox>ul>li.li_01>a").click(function(e){
        e.preventDefault();
        $("#glayLayer").css("display","block");
        $(".ssnswrap").css("display","block");
//        $(".snsbox>ul>li").eq(tt).css("background", "#fff");
            console.log(t);                             
//        $("#overLayer").html("<img src='"+$(this).attr("href")+"'>");
        return false;
    });
    
    $(".ssbox01>a>img").click(function(){
        console.log("bbb");
        $("#glayLayer").css("display","none");
        $(".ssnswrap").css("display","none");
    });
    
    
});















