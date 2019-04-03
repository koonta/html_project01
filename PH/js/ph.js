$(document).ready(function(){
    
    $(".mbox:nth-child(1)").css({"top":"0px","opacity":"1"});
    $(".mbox:nth-child(2)").css({"top":"80px","opacity":"1"});
    $(".mbox:nth-child(3)").css({"top":"160px","opacity":"1"});
    $(".mbox:nth-child(4)").css({"top":"240px","opacity":"1"});
    
    $(".smwrap ul li").click(function(){
        var d = $(this).index();
        $(".smwrap ul li").removeClass();
        $(".smwrap ul li").eq(d).addClass("long")
        var i = $(this).index();
        console.log(i);
        $("div.pbox").eq(i).offset().top;
        console.log("aaa");
        var mTop = $("div.pbox").eq(i).offset().top;
       $("html, body").stop().animate({"scrollTop":mTop+"px"},1000);
        
    });
    $(".mbox").click(function(){
        var d = $(this).index()+1;
        $(".smwrap ul li").removeClass();
        $(".smwrap ul li").eq(d).addClass("long");    
    });
    
    
   
	 $(".mbox").click(function(){
		 if(!$(this).hasClass("active")){
			 
				$(".mbox").each(function(){
					if($(this).hasClass("active")){
						
						$(this).removeClass("active");
				   
					}
				});
			 
			  $(this).addClass("active");
			  
				}else{
					console.log("sdfawefawe");
				$(this).removeClass("active");
				
                $(".smwrap ul li").removeClass();
                $(".smwrap ul li").eq(0).addClass("long");    
				}
	 });
    
     $(".pbox").each(function(index){
            $(this).on("mousewheel",function(e){
//                e.preventDefault();
                var delta = 0;
                var lk = window.pageYOffset;
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
                
//                var kk = $(this).offset().top;
//                console.log("aa:"+kk+"index:"+index);
////                var lk = window.pageYOffset;
//                if(lk>=kk){
//                    $(".smwrap ul li").removeClass();
//                    $(".smwrap ul li").eq(index).addClass("long");
//                }
                

                $("html, body").stop().animate({"scrollTop":moveTop+"px"},1000);
            });
        });
    
        
        
        
    
    
});