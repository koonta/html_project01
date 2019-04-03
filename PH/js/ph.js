$(document).ready(function(){
    
    $(".mbox:nth-child(1)").css({"top":"0px","opacity":"1"});
    $(".mbox:nth-child(2)").css({"top":"80px","opacity":"1"});
    $(".mbox:nth-child(3)").css({"top":"160px","opacity":"1"});
    $(".mbox:nth-child(4)").css({"top":"240px","opacity":"1"});
    
    $("div.mbox").click(function(){
        var i = $(this).index();
        console.log(i);
        $("div.pbox").eq(i+1).offset().top;
        console.log("aaa");
        var mTop = $("div.pbox").eq(i+1).offset().top;
       $("html, body").stop().animate({"scrollTop":mTop+"px"},1000); 
    });
    
    
   
	 $(".mbox").click(function(){
		 if(!$(this).hasClass("active")){
			 
				$(".mbox").each(function(){
					if($(this).hasClass("active")){
						
						$(this).removeClass("active");
				    $(this).find(".mbox2").slideUp();	
						
					}
				});
			 
			  $(this).addClass("active");
			  $(this).find(".mbox2").slideDown();
				}else{
					
				$(this).removeClass("active");
				$(this).find(".mbox2").slideUp();	
				}
	 });
    
     $(".pbox").each(function(){
            $(this).on("mousewheel",function(e){
//                e.preventDefault();
                var delta = 0;
                delta = event.wheelDelta/120;
                var moveTop = null; //각페이지의 탑값계산
                if(delta<0){
                   if($(this).next() !== undefined){
                      moveTop=$(this).next().offset().top;
                      }
                   }else{
                   if($(this).prev() !== undefined){
                      moveTop=$(this).prev().offset().top;
                      }
                   }
//               
                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
        });
    
    
    
    
    
});