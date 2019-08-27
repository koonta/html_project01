$(function(){
   
   
    $(".mnav>ul>li").mouseover(function(){
//        var dd = $(this).index();
//        console.log(dd);
        $(this).children(".sub").stop().slideDown(300);
    });
    $(".mnav>ul>li").mouseleave(function(){
//        var dd = $(this).index();
//        console.log(dd);
        $(this).children(".sub").stop().slideUp();
    });
    
            
	$(".banner li").last().appendTo(".banner>ul");
    $(".banner ul").css("left",-1000);
    
    setInterval(function(){
        $(".banner ul").animate({
            left: "-="+1000
        },1500,function(){
            $(".banner li").first().appendTo(".banner ul");
            $(".banner ul").css("left",-1000);
        });
    },3000);

        
    var hh = ($(window).height()/2)-($(".mowrap").height()/2);
             $(".modal").css("padding-top",hh);
    $(".modal").fadeOut(0);
    
    $(".buss>img").click(function(){
        $(".modal").fadeIn(0);
    });
    $(".mowrap>p>a").click(function(){
        $(".modal").fadeOut(0);
    });
    
    
    var win;
    $("header>h1>a").click(
    
    function(){
        win = window.open('open.html', 'child','toolbar=no,location=no,status=no,menubar=no,resizable=no,scrollbars=no,width=500,height=300');
    });
    
    
    
    
    
    
});